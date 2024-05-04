
import Front from "../components/Front"
import { Outlet } from 'react-router-dom';
import Recommend from "../Recommend"
import Footer from "../pages/Footer";

function Layout(){
    return (
        <>  
            <Front/>

            <Outlet/>
            
            <Recommend />

            <Footer />
        </>
    )
}
export default Layout;