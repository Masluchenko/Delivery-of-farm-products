import {Link, Outlet} from 'react-router-dom';
import Header from './screens/Header/Header'
const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />
        </>

    );
}
export {Layout}