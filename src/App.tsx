import {Route, Routes} from 'react-router-dom';

import Home from './components/screens/Home/Home';
// import Cards from './components/screens/Home/Cards/Cards';
import CreateCatalog from './components/screens/Assortment/Сatalog/CreateСatalog'
import { NotfoundPage } from './components/screens/Notfound/NotfoundPage';

import { Layout } from './components/Layout'

export function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path='/CreateCatalog' element={<CreateCatalog />}/> 

                    {/* <Route path='/Cards' element={<Cards />}/> */}
                    <Route path='*' element={<NotfoundPage />}/>
                </Route>
            </Routes>
            
            
        </>
    )
}