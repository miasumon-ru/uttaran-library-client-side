import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";



const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto" >
            <Navbar></Navbar>
            <Outlet></Outlet>     

            <Footer></Footer>     
        </div>
    );
};

export default MainLayout;