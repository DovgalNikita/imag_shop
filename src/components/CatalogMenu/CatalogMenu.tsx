import { FC } from 'react';
import styles from './CatalogMenu.module.scss';
import CatalogMenuItem from '../CatalogMenuItem/CatalogMenuItem';
import {LaptopSVG}  from '@/assets/images/LaptopSVG';
import {HairDryer} from '@/assets/images/HairDryer';
import {Smartphones} from '@/assets/images/Smartphones';
import {TV} from '@/assets/images/TV';

const CatalogMenu: FC = () => {
    return(
        <div className={styles.block}>
            <CatalogMenuItem caption={'Бытовая техника'}> <LaptopSVG color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Красота и здоровье'}> <HairDryer color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Смартфоны и электроника'}> <Smartphones color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'ТВ, консоли и аудио'}> <TV color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'ПК, ноутбуки, периферия'}> <LaptopSVG color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Комплектующие для пк'}> <LaptopSVG color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Офис и мебель'}> <LaptopSVG color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Сетевое оборудование'}> <LaptopSVG color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Отдых и развлечения'}> <LaptopSVG color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Инструмент и стройка'}> <LaptopSVG color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Садовая техника'}> <LaptopSVG color="white"/> </CatalogMenuItem>
            <CatalogMenuItem caption={'Дом, декор и посуда'}> <LaptopSVG color="white"/> </CatalogMenuItem>
        </div> 
    )
}

export default CatalogMenu;