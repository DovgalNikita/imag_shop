import {FC} from 'react';
import styles from './PrevViewed.module.scss';

const PrevViewed: FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.title}>Ранее просмотренные</div>
            <div className={styles.content}></div>
        </div>
    )
}

export default PrevViewed;