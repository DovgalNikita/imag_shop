import {FC} from 'react';
import styles from './SalesProductItem.module.scss'

const SalesProductItem: FC<ISalesProductItem> = ({
    id,
    title,
    initialPrice,
    lastPrice,
    img}) => {

    return(
        <div className={styles.block}>
            
        </div>
    )

}

export default SalesProductItem;