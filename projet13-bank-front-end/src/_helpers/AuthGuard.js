import { Navigate } from "react-router"
import { accountService } from "../_services/account.service"

function AuthGard( {children} ){

    if (!accountService.isLogged()){
        return <Navigate to="/login" />
    }
    return children
}

export default AuthGard