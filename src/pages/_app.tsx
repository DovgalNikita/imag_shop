import './global.css';
import Template from '@/components/Template/Template';
import CatalogMenu from '../components/CatalogMenu/CatalogMenu';
import PopularCategories from '../components/PopularCategories/PopularCategories';

const App = () => {
    return(
        <Template>
            
            <div className="firstLevel">
                <CatalogMenu />
                <PopularCategories />
            </div>

        </Template>
    )
}

export default App;