import Image from "next/image";
export default async function Main() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products")
    const data = await response.json();

    return (
        <main >
            {data.map((produto) => (
                <div key={produto.id}>
                    <h1>{produto.title}</h1>
                    <h2>{produto.price}</h2>
                    <p>{produto.description}</p>
                    <p>{produto.category.name}</p>
                    <Image src={produto.images} width={100} height={100} alt='Imagem de produto'/>
                </div>
            ))}

        </main>
    );
}