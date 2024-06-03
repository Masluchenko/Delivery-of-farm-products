import {Route, Routes} from 'react-router-dom';

import Home from './components/screens/Home/Home';
// import Cards from './components/screens/Home/Cards/Cards';
import CreateCatalog from './components/screens/Assortment/Сatalog/CreateСatalog'
import { NotfoundPage } from './components/screens/Notfound/NotfoundPage';
import Cards from './components/screens/Home/Cards/Cards';
import { Layout } from './components/Layout'

export function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path='CreateCatalog/' element={<CreateCatalog />}>
                        <Route index element={<Cards />}/>
                        <Route path='Milk' element={<h1>milksssssssssssssssss</h1>} />
                        <Route path='Meat' element={<Home />} />
                        <Route path='Chees' element={<h3>CHEEEEEESSS</h3>} />
                    </Route> 

                    {/* <Route path='/Cards' element={<Cards />}/> */}
                    <Route path='*' element={<NotfoundPage />}/>
                </Route>
            </Routes>
            
            
        </>
    )
}