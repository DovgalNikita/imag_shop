import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
import styles from './HeaderMenu.module.css';

const HeaderMenu = () => {

    return(
        <div className={styles.menu}>
            <HeaderMenuItem path="Favorite" alt="" caption="Избранное"/>
            <HeaderMenuItem path="ShoppingCart" alt="" caption="Корзина" counter={3}/>
            <HeaderMenuItem path="Auth" alt="" caption="Войти"/>
        </div>
    )
}

export default HeaderMenu;