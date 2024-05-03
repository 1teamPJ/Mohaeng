import { Outlet } from 'react-router-dom';
import CBheader from "../pages/CBheader";
import CBlist from "../pages/CBlist";
import "../pages/CBstyle.css";

function CbLayout(){
    return (
        <>  
            <CBheader/>
            <CBlist/>

            <Outlet/>
            
        </>
    )
}
export default CbLayout;