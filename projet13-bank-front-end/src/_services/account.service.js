import Axios from "./caller.service"

let login = (credential) => {
    return Axios.post("/user/login", credential)
}

let changeName = (name) => {
    return Axios.put("/user/profile", name)
}

let saveToken = (token) => {
    localStorage.setItem("token", token)
}

let logout = () => {
    localStorage.removeItem("token")
}

let isLogged = () => {
    let token = localStorage.getItem("token")
    return !!token //Renvois toujours un boolen (Si null = false sinon true)
}

let getToken = () => {
    return localStorage.getItem("token")
}

export const accountService = {
    login, changeName, saveToken, logout, isLogged, getToken
}