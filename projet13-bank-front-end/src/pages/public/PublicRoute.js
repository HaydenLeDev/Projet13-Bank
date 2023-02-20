import { Route, Routes } from "react-router-dom";
import Home from "./home/Home"
import Login from './login/Login';
import Layout from './layout/Layout';

function PublicRoute() {
    return(
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
    )
}

export default PublicRoute