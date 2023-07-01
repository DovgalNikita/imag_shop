import { FC, useCallback, useState } from 'react';
import Link from 'next/link';
import styles from './SearchInput.module.css';

const array: arr[] = [
    {id:0,title:'6.7" Смартфон HONOR X8a 128 ГБ черныйСмартфон HONOR X8a '},
    {id:1,title:'6.7" HONOR HONOR X8a 128 ГБ черный Смартфон HONOR X8a'},
    {id:2,title:'6.7" HONOR X8a X8a 128 Смартфон HONOR X8a ГБ черный'},
    {id:3,title:'6.7" X8a HONOR X8a Смартфон HONOR X8a 128 ГБ черный'},
    {id:4,title:'6.7" ГБ HONOR X8a 128 ГБ черный Смартфон HONOR X8aСмартфон HONOR X8a'},
    {id:5,title:'6.7" Смартфон HONOR X8a 128 ГБ черныйСмартфон HONOR X8aСмартфон HONOR X8aСмартфон '},
    {id:6,title:'6.7" X8a HONOR X8a 128 ГБ черный Смартфон HONOR X8a'},
    {id:7,title:'6.7" Смартфон HONOR X8a 128 ГБ черный '},
    {id:8,title:'6.7" черный HONOR X8a 128 ГБ черный Смартфон HONOR X8aСмартфон HONOR X8a'},
    {id:9,title:'6.7" Смартфон HONOR X8a 128 ГБ черный Смартфон HONOR X8aСмартфон HONOR X8aСмартфон HONOR X8a'},   
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