import { Route, Routes } from "react-router-dom";
import User from "./user/User";
import PrivateLayout from "./PrivateLayout"
import NewNameForm from "./newNameForm/NewNameForm"

function PrivateRoute() {
    return(
        <Routes>
          <Route element={<PrivateLayout />}>
            <Route path="profile" element={<User />} />
            <Route path="edit" element={<NewNameForm />} />
          </Route>
        </Routes>
    ) 
}

export default PrivateRoute