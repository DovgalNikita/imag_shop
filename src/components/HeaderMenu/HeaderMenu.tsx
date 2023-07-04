import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
import styles from './HeaderMenu.module.scss';

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