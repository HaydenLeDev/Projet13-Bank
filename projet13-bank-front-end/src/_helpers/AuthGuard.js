import { Navigate } from "react-router"

function AuthGard( {children} ){
    let logged = false 
    
    if (!logged){
        return <Navigate to="/login" />
    }
    return children
}

export default AuthGard