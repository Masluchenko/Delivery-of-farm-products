import {Route, Routes} from 'react-router-dom';
import Header from './components/screens/Header/Header';
import Home from './components/screens/Home/Home';
import Cards from './components/screens/Home/Cards/Cards';

import { NotfoundPage } from './components/screens/Notfound/NotfoundPage';
export function App() {
    return (
        <div>
            <Header />
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Cards' element={<Cards />}/>
            
            <Route path='*' element={<NotfoundPage />}/>
        </Routes>
        </div>
    )
}