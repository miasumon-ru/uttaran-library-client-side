import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";



const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto" >
            <Navbar></Navbar>
            <Outlet></Outlet>          
        </div>
    );
};

export default MainLayout;