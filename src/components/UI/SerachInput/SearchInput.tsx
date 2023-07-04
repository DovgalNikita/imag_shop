import { FC, useState } from 'react';
import Link from 'next/link';
import styles from './SearchInput.module.scss';

const array: arr[] = [

      
]
type arr = {
    id:number,
    title:string
}


const SearchInput: FC <ISearchInput> = ({placeholder}) => {

    const [find, setFind] = useState <boolean>(false);
    const [searchValue, setSerachValue] = useState <string> ('');
    const [searchResult, setSerachResult] = useState <object []>([]);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSerachValue(e.target.value);

    } 

    return(
        <div className={styles.inputBlock}>
            <input type="input" className={styles.input} placeholder={placeholder} value={searchValue} onChange={inputHandler}/>
            
            {
                find 
                    ?<div className={styles.list}>
                        {
                            array && array.map( ({id,title}, count) => count < 9 ? <Link key={String(id)} href="" className={styles.listItem}><div onClick={()=>alert(title)}>{title}</div></Link>: null)
                        }
                    </div>
                    :null
            }

        </div>
    )
}

export default SearchInput;