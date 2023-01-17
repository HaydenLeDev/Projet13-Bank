import { Route, Routes } from "react-router-dom";
import User from "./user/User";
import PrivateLayout from "./PrivateLayout"


function PrivateRoute() {
    return(
        <Routes>
          <Route element={<PrivateLayout />}>
            <Route path="dashboard" element={<User />} />
          </Route>
        </Routes>
    ) 
}

export default PrivateRoute