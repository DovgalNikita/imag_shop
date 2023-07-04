import { FC } from 'react';
import Image from 'next/image';
import styles from './PopularCategoriesItem.module.scss'

const PopularCategoriesItem: FC <IPopularCategoriesItem> = ({img, caption}) => {
    return(
        <div className={styles.observer}>
            <div className={styles.block}>
                <Image 
                    src={img}
                    alt=""
                    width={'150'}
                    height={'150'}
                    className={styles.image}
                />
                <div className={styles.caption}>{caption}</div>
            </div>
        </div>
    )
}   

export default PopularCategoriesItem;