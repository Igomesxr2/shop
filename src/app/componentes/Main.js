'use client'
import { useEffect, useState } from "react";
import styles from "./main.module.css";

import Image from "next/image";
export default function Main() {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()

            setProductList(data)
        }

        getProduct()

    }, [])

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


    return (
        <>
            <div>
                <button onClick={orderAZ}>A-Z</button>
            </div>
            <div>
                <button onClick={orderZA}>Z-A</button>
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
                    </div>
                ))}

            </main>
        </>
    );
}