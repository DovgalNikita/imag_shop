import {FC, useEffect, useState} from 'react';
import styles from './SalesProduct.module.scss';
import {RootState} from '@/redux/index';
import {useSelector, useDispatch} from 'react-redux';
import { increaseValue, decreaseValue } from '@/redux/salesCarousel';
import SalesProductItem from '@/components/SalesProductItem/SalesProductItem';
import MyLoader from '@/components/Skeleton/Skeleton';

const SalesProduct: FC <ISalesProduct> = () => {
    
    const value = useSelector ( (state: RootState) => state.carouselSlice.carouselPosition);
    const [visible, setVisible] = useState (false);
    const dispatch = useDispatch();
    const [show,setShow] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setShow(false);
        },3000)
    },[])

    return(
        <div className={styles.block} onMouseOver={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}>
            <div className={styles.title}>Товары со скидкой</div>
            <div className={styles.contentBlock}>

                {visible
                    ?   value <= 0 ? <button className={styles.disabledSliderButton} >{'❮'}</button> : <button className={styles.sliderButton} onClick={()=>dispatch(decreaseValue(25))}>{'❮'}</button>
                    :   null
                }

                {visible
                    ?   value >= 100 ? <button className={styles.disabledSliderButton} >{'❯'}</button> : <button className={styles.sliderButton} onClick={()=>dispatch(increaseValue(25))}>{'❯'}</button>
                    :   null
                }



                

                <div className={styles.content}>
                    <div className={styles.bar} style={{left:`${-value}%`}}>
                        {/* <SalesProductItem />
                        <SalesProductItem />
                        <SalesProductItem />
                        <SalesProductItem />
                        <SalesProductItem />
                        <SalesProductItem />
                        <SalesProductItem /> */}

                        {show ? <MyLoader width={300} height={150}/> : <SalesProductItem />}
                        {show ? <MyLoader width={300} height={150}/> : <SalesProductItem />}
                        {show ? <MyLoader width={300} height={150}/> : <SalesProductItem />}
                        {show ? <MyLoader width={300} height={150}/> : <SalesProductItem />}
                        {show ? <MyLoader width={300} height={150}/> : <SalesProductItem />}
                        {show ? <MyLoader width={300} height={150}/> : <SalesProductItem />}
                        {show ? <MyLoader width={300} height={150}/> : <SalesProductItem />}
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SalesProduct;