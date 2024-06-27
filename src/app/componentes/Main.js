'use client'
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Spinner from "./Spinner";
import ErrorGetData from "./ErrorGetData";
import Link from "next/link";
import product from "../product/[id]/page";

import Image from "next/image";
export default function Main() {

    const [productList, setProductList] = useState([])
    const [completeList, setCompleteList] = useState([]);
    const [search, setSearch] = useState("")
    const [errorFetch, setErrorFetch] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            try{
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()

                setProductList(data)
                setCompleteList(data)
            }catch{
                setErrorFetch(true);
            }
        }

        getProduct()

    }, [])

    if(errorFetch == true){
        return <ErrorGetData/>
      }

    if (completeList[0] == null) {
        return (
          <main>
            <Spinner />
          </main>
        );
      }

    const orderAZ = () => {
        const newList = [...productList].sort((a, b) =>
            a.title.localeCompare(b.title)
        )
        setProductList(newList)
    }

    const orderZA = () => {
        const newList = [...productList].sort((a, b) =>
            b.title.localeCompare(a.title)
        )
        setProductList(newList)
    }

    const precoMaior = () => {
        let newList = [...productList].sort((a, b) => a.price - b.price);
        newList = newList.reverse();
        setProductList(newList);
      };


    const precoMenor = () => {
        const newList = [...productList].sort((a, b) => a.price - b.price);
    
        setProductList(newList);
      };

      const searchText = (text) => {
        setSearch(text);
    
        if (text.trim() == "") {
          setProductList(completeList);
          return;
        }
    
        const newList = productList.filter((product) =>
          product.title.toUpperCase().trim().includes(search.toUpperCase().trim())
        );
        setProductList(newList);
      };
      
    
    return (
        <>

         <input
          type="text"
          value={search}
          placeholder="Pesquise Produto"
          onChange={(event) => searchText(event.target.value)}
        />
            <div>
                <button onClick={orderAZ}>A-Z</button>
            </div>
            <div>
                <button onClick={orderZA}>Z-A</button>
            </div>
            <div>
                <button onClick={precoMaior}>Ordenar Preço Decrescente</button>
            </div>
            <div>
                <button onClick={precoMenor}>Ordenar Preço Crescente</button>
            </div>
            <main className={styles.main}>
                {productList.map((produto) => (
                    <div className={styles.card} key={produto.id}>
                        {<Image src={produto.image} width={100} height={100} alt='Imagem de produto' />}
                        <h1 className={styles.title}>{produto.title}</h1>
                        <h2>{produto.price}</h2>
                        <p className={styles.description}>{produto.description}</p>
                        <p>{produto.category}</p>
                        <p>{produto.rating.count}</p>

                        <button><Link href={`product/${produto.id}`}>Ver produto</Link></button>
                    </div>
                ))}

            </main>
        </>
    );
}