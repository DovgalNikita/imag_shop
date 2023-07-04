import {FC} from 'react';
import styles from './SalesProduct.module.scss';

const SalesProduct: FC <ISalesProduct> = () => {
    return(
        <div className={styles.block}>
            <div className={styles.title}>Товары со скидкой</div>
            <div className={styles.content}>
                
            </div>
        </div>
    )
}

export default SalesProduct;