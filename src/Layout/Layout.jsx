import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";



const Layout = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;