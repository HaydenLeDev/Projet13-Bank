import { Outlet } from "react-router";
import Header from "../../../components/public/header/Header"
import Footer from "../../../components/public/footer/Footer"

function Layout() {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default Layout;
