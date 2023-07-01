import { FC } from 'react';
import styles from './CatalogMenuItem.module.css';

const CatalogMenuItem: FC <ICatalogMenuItem> = () => {
    return(
        <div>
            <svg className={styles.svg}><use href="#icon" /></svg>
        </div> 
    )
}

export default CatalogMenuItem;