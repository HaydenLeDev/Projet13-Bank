import "./Title.css"
import { useEffect, useRef, useState } from "react"
import { userService } from "../../../_services"

function Title() {

    const [user, setUser] = useState([])
    const flag = useRef(false)

    useEffect(() => {
        if (flag.current === false){
            userService.getDataUser()
            .then(res => {
                console.log(res.data.body)
                setUser(res.data.body)
            })
            .catch(error => console.log(error))
        }
        return () => flag.current = true
    }, [])

    return (
        <h1 className="TitleUser">
            Welcome back <br></br> {user.firstName} {user.lastName}
        </h1>
    )
}

export default Title