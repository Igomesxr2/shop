import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.container}>
                <ul className={styles.lista}>
                    <li>
                        <Image
                            src={"https://static.vecteezy.com/system/resources/previews/018/930/691/non_2x/instagram-logo-instagram-icon-transparent-free-png.png"}
                            width={24} height={24} alt='Logo'
                        />
                        Instagram
                    </li>

                    <li>
                        <Image
                            src={"https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"}
                            width={24} height={24} alt='Logo'
                        />
                        Facebook
                    </li>

                    <li>
                        <Image
                            src={"https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"}
                            width={24} height={24} alt='Logo'
                        />
                        Youtube
                    </li>
                </ul>

                <p className={styles.paragrafo}>Criada em 20/06/2006</p>

                <div className={styles.logo}>

                    <Image className={styles.logo}
                        src={"https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"}
                        width={100} height={100} alt='Logo'
                    />

                </div>
            </div>
        </footer>
    );
}
