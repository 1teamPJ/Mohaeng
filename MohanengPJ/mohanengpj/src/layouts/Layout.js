import Recommend from "../Recommend";
import Header from "../Header"
import { Outlet } from 'react-router-dom';


function Layout(){
    return (
        <>
            <Header />
            <Recommend />
            <Outlet />
        </>
    )
}
export default Layout;