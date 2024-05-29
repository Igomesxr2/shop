import Image from "next/image";
import styles from "./header.module.css";
export default async function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.divHeader}>
                <Image className={styles.logo}
                    src={"https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"}
                    width={100} height={100} alt='Logo'
                />

                <h1 className={styles.h1}>SHOP G</h1>

                <nav className={styles.nav}>
                    <p className={styles.navP}>Explorar</p>
                    <p className={styles.navP}>Categorias</p>
                    <p className={styles.navP}>Promoções</p>
                    <p className={styles.navP}>Comprados</p>
                </nav>

                <div className={styles.icons}>
                    <Image className={styles.logo}
                        src={"https://cdn.icon-icons.com/icons2/936/PNG/512/shopping-cart-black-shape_icon-icons.com_73416.png"}
                        width={30} height={30} alt='Carrinho'
                    />

                    <Image className={styles.logo}
                        src={"https://cdn-icons-png.flaticon.com/128/5166/5166970.png"}
                        width={30} height={30} alt='Cadastrar produto'
                    />

                    <Image className={styles.logo}
                        src={"https://cdn-icons-png.freepik.com/256/15/15235.png?semt=ais_hybrid"}
                        width={30} height={30} alt='perfil'
                    />
                </div>
            </div>

        </header>
    );
}