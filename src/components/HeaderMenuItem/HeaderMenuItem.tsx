import styles from './HeaderMenuItem.module.css';
import {FC} from 'react';
import Auth from '../../assets/images/auth.png';
import shoppingCart from '../../assets/images/shoppingCart.png';
import favorite from '../../assets/images/favorite.png';
import Image from 'next/image';


const HeaderMenuItem: FC<IHeaderMenuItem> = ({path, alt, caption, counter}) => {
    return(
        <div className={styles.iconBlock}>

            {path == 'Auth' ? <div className={styles.observer}><Image src={Auth} alt={alt} className={styles.icon}/></div> : null}

            {path == 'ShoppingCart' 
                ? <div className={styles.observer}> 
                    {counter && <div className={styles.counter}>{counter}</div>}
                    <Image src={shoppingCart} alt={alt} className={styles.icon} />
                </div>: null}
                
            {path == 'Favorite' ? <div className={styles.observer}><Image src={favorite} alt={alt} className={styles.icon}/></div> : null}

            <div className={styles.caption}>{caption}</div>
        </div>
    )
}

export default HeaderMenuItem;