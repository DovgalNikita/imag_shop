import styles from './Header.module.css';
import { FC } from 'react';
import CatalogButton from '../UI/CatalogButton/CatalogButton';
import SearchInput from '../UI/SerachInput/SearchInput';
import HeaderMenu from '../HeaderMenu/HeaderMenu';


const Header: FC <IHeader> = (prop) => {
    return(
        <header style={prop} className = {styles.header}>
            <div className={styles.content}>
                <div className={styles.logo}>IMag</div>
                <CatalogButton />
                <SearchInput placeholder="Поиск по сайту"/>
                <HeaderMenu />
            </div>
        </header>
    )
}

export default Header;