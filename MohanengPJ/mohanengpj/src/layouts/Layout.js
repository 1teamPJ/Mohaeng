
import Front from "../components/Front"
import { Outlet } from 'react-router-dom';
import Recommend from "../Recommend"
import Footer from "../pages/Footer";
import Swiper from "../pages/Swiper";

function Layout(){
    return (
        <>  
            <Front/>

            <Outlet/>

            <Swiper/>
            
            <Recommend />

            <Footer />
        </>
    )
}
export default Layout;