import Template from '@/components/Template/Template';
import CatalogMenu from '../components/CatalogMenu/CatalogMenu';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import SalesProduct from '../components/SalesProduct/SalesProduct';
import PrevViewed from '../components/PrevViewed/PrevViewed';
import styles from './styles/index.module.scss';

const App = () => {

    return(
        <Template>
            
            <div className={styles.firstLevel}>
                <CatalogMenu />
                <PopularCategories />
            </div>

            <div className={styles.secondLevel}>
                <SalesProduct />
            </div>

            <div className={styles.thirdLevel}>
                <PrevViewed />
            </div>

        </Template>
    )
}

export default App;