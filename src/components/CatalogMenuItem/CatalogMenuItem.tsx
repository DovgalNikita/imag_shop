import { FC } from 'react';
import styles from './CatalogMenuItem.module.scss';
import Image from 'next/image';
import { LaptopSVG } from '@/assets/images/LaptopSVG';
import Link from 'next/link';


const CatalogMenuItem: FC <ICatalogMenuItem> = ({caption,children}) => {
    return(

        <Link href="" className={styles.block}>
            <div className={styles.content}>
                <div className={styles.img}>{children}</div> 
                <div className={styles.caption}>{caption}</div>
            </div>
        </Link> 
    )
}

export default CatalogMenuItem;