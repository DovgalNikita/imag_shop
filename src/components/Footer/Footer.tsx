import styles from './Footer.module.scss';
import {FC} from 'react';

const Footer: FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.title}>
                <span>IMag</span> - лучший выбор для семейных покупок!
            </div>
            <div className={styles.content}>
                <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A398e8b30db32aeb81e2b86e148c47738c3620c7abb8f88c5433b9a6a8e3e03eb&amp;source=constructor" width="1100" height="250" frameborder="0"></iframe>
                <div className={styles.info}>
                    <div>Оставайтесь на связи</div>
                    <div>Время работы: <span>10:00 - 22:00</span></div>
                    <div>Адрес: <span>350024, г. Краснодар, ул. Северная, 313</span></div>
                    <div>Телефон: <span><a href="tel:88005553535">+ 7 - (800) - 555 - 35 - 35</a></span></div>
                    <div>Почта: <span><a href="mailto:88005553535">email@email.ru</a></span></div>
                    <input type="text" className={styles.input} placeholder="Номер для обратного звонка"/>
                </div>
                <div className={styles.info}>
                    <div>Оставайтесь на связи</div>
                    <div>Время работы: <span>10:00 - 22:00</span></div>
                    <div>Адрес: <span>350024, г. Краснодар, ул. Северная, 313</span></div>
                    <div>Телефон: <span><a href="tel:88005553535">+ 7 - (800) - 555 - 35 - 35</a></span></div>
                    <div>Почта: <span><a href="mailto:88005553535">email@email.ru</a></span></div>
                    <input type="text" className={styles.input} placeholder="Номер для обратного звонка"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;