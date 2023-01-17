import { Outlet } from "react-router";
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"

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
