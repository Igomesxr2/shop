import Image from "next/image";
export default function NotFound() {
    return (
        <div>
            <Image src={"https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg"}
                width={1000} height={400} alt='Imagem de produto'
            />
        </div>
    );
}