
import Front from "../components/Front"
import { Outlet } from 'react-router-dom';

function Layout(){
    return (
        <>  
            <Front/>

            <Outlet/>
            
        </>
    )
}
export default Layout;