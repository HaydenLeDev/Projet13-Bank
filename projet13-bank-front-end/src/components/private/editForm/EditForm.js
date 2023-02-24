import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { accountService } from '../../../_services'
import { useDispatch } from 'react-redux'
import { changeName } from '../../../feature/user.slice'

function EditFrom() {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    })

    const onChange = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value //Quand on passe dans onchange on fusionne l'ancien etat avec la nouveauté
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        accountService.changeName(name).then(res => {
            dispatch(changeName(name))
        }) .catch(error => console.log(error))
        navigate("/user/profile")
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input-wrapper">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={name.firstName}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={name.lastName}
                    onChange={onChange}
                    required
                />
            </div>
            <button className="sign-in-button">Change name</button>
        </form>
    )
}
export default EditFrom