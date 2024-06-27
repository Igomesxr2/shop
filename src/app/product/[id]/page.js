import Image from "next/image";

export default async function Product({ params }) {
  const response = await fetch(
    "https://fakestoreapi.com/products/" + params.id
  );
  const data = await response.json();
  return (
    <div>
        {<Image src={data.image} width={100} height={100} alt='Imagem de produto' />}
        <h1>{data.title}</h1>
        <h2>{data.price}</h2>
        <p>{data.description}</p>
        <p>{data.category}</p>
        <p>{data.rating.count}</p>
    </div>
  )
}