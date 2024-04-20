import styles from './Home.module.scss'

function Home(){
    return(
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <div>
                        <a href='#' className={styles.navbarBrand}>Farm Product</a>
                    </div>
                    <div className={styles.navbarWrap}>
                        <ul className={styles.navbarMenu}>
                            <li><a href="" className={styles.submenuLink}>О нас</a>
                                <ul className={styles.submenu}>
                                    <li><a href="">Производство</a></li>
                                    <li><a href="">Магазин</a></li>
                                    <li><a href="">Сервис</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Поставщики</a> </li>
                            <li><a href='#'>Доставка</a></li>
                            <li><a href='#'>Рецепты</a></li>
                            <li><a href='#'>Новинки</a></li>
                            <li><a href='#'>%Акции</a></li>
                            <li><a href='#'>Подарки и сертификаты</a></li>
                        </ul>
                    </div>
                </div>
                <div>

                </div>
               
            </div>
    )
}

export default Home