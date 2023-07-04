import { useRouter } from 'next/router';
import {FC, useEffect} from 'react';
import styles from './styles/404.module.scss';

const ErrorPage: FC = () => {

    const route = useRouter();

    useEffect (()=>{
        setTimeout(()=>{
            route.push('/');
        },2000);
    }, [])

    return(
        <div className={styles.page}>
            <div className={styles.block}>
                <div className={styles.text}> Произошла непредвиденная ошибка. Перенаправляем на главную страницу</div>
            </div>
            <div className={styles.dots}>...</div>
        </div>
    )
}

export default ErrorPage;