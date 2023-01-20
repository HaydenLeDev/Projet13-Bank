import EditButton from "../../../components/private/editButton/EditButton";
import Title from "../../../components/private/title/Title"
import { userService } from "../../../_services"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../../../feature/user.slice"
import { useEffect, useRef } from "react"

function User() {
  const flag = useRef(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    if (flag.current === false) {
      userService.getDataUser()
        .then(res => {
          console.log(res.data.body)
          dispatch(setUserData(res.data.body))
        })
        .catch(error => console.log(error))
    }
    return () => flag.current = true // eslint-disable-next-line
  }, [])

  if (flag.current === false) {
    return (
      <main className="main bg-dark">
        <h1>Loading</h1>
      </main>
    )
  } else {
    return (
      <main className="main bg-dark">
        <Title firstName={user.firstName} lastName={user.lastName} />
        <EditButton />
      </main>
    )
  }

}

export default User;
