import {Route, Routes} from 'react-router-dom';

import Home from './components/screens/Home/Home';
// import Cards from './components/screens/Home/Cards/Cards';
import CreateCatalog from './components/screens/Assortment/Сatalog/CreateСatalog'
import { NotfoundPage } from './components/screens/Notfound/NotfoundPage';
import Cards from './components/screens/Home/Cards/Cards';
import CreateChees from './components/screens/Assortment/Сatalog/Food/CreateChees';
import { Layout } from './components/Layout';

import DialogFlex from './components/screens/Assortment/Сatalog/CreateCard/Cardinfo';


export function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path='CreateCatalog/' element={<CreateCatalog />}>
                        <Route index element={<Cards />}/>
                        <Route path='Content' element={<DialogFlex />}/>
                        <Route path='Chees' element={<CreateChees />} />
                    </Route> 

                    {/* <Route path='/Cards' element={<Cards />}/> */}
                    <Route path='*' element={<NotfoundPage />}/>
                </Route>
            </Routes>
            
            
        </>
    )
}