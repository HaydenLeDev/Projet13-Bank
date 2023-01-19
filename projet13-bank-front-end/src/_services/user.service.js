import Axios from "./caller.service"

let getDataUser = () => {
    return Axios.post('/user/profile')
}

export const userService = {
    getDataUser
}