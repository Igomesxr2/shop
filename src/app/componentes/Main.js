import styles from "./main.module.css";

import Image from "next/image";
export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();

    return (
        <main className={styles.main}>
            {data.map((produto) => (
                <div className={styles.card} key={produto.id}>
                    {<Image src={produto.image} width={100} height={100} alt='Imagem de produto' />}
                    <h1>{produto.title}</h1>
                    <h2>{produto.price}</h2>
                    <p>{produto.description}</p>
                    <p>{produto.category}</p>
                    <p>{produto.rating.count}</p>
                </div>
            ))}

        </main>
    );
}