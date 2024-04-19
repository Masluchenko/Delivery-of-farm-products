import styles from './Home.module.scss'

function Home(){
    return(
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <a href='#' className={styles.navbarBrand}>Farm Product</a>

                    <div className={styles.navbarWrap}>
                        <ul className={styles.navbarMenu}>
                            <li>Поставщики</li>
                            <li>Доставка</li>
                            <li>Рецепты</li>
                            <li>Новинки</li>
                            <li>%Акции</li>
                            <li>Подарки и сертификаты</li>
                        </ul>
                    </div>

                </div>
               
            </nav>
    )
}

export default Home