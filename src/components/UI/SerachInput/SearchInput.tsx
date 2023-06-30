import { FC } from 'react';
import styles from './SearchInput.module.css';

const SearchInput: FC <ISearchInput> = ({placeholder}) => {
    return(
        <input type="text" className={styles.input} placeholder={placeholder}/>
    )
}

export default SearchInput;