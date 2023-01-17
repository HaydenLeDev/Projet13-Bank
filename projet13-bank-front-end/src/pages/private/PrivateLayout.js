import { Outlet } from "react-router";
import Header from "../../components/private/UserHeader"
import Footer from "../../components/public/footer/Footer"

function PrivateLayout() {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default PrivateLayout;
