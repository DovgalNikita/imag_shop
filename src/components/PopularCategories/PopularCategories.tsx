import { FC } from 'react';
import styles from './PopularCategories.module.scss';
import PopularCategoriesItem from '../PopularCategoriesItem/PopularCategoriesItem';
import Link from 'next/link'

import computer from '../../assets/images/computer.png';
import accessories from '../../assets/images/accessories.png';
import smartphones from '../../assets/images/smartphones.png';
import tv from '../../assets/images/tv.png';

const PopularCategories: FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.title}>Популярные категории</div>
            <div className={styles.categoriesGrid}>
                <Link href="/33" className={styles.categoriesItem}><PopularCategoriesItem img={computer.src} caption={'Компьютеры'}/></Link>
                <Link href="/34" className={styles.categoriesItem}><PopularCategoriesItem img={accessories.src} caption={'Аксессуары'}/></Link>
                <Link href="/35" className={styles.categoriesItem}><PopularCategoriesItem img={smartphones.src} caption={'Смартфоны'}/></Link>
                <Link href="/36" className={styles.categoriesItem}><PopularCategoriesItem img={tv.src} caption={'Телевизоры'}/></Link>
            </div>
        </div>
    )
}

export default PopularCategories;