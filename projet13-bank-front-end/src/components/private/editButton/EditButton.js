import "./EditButton.css"
import { Link } from 'react-router-dom'

function EditButton() {

    return (
        <div className="EditButton">
            <Link to="/user/edit" className="edit-button">
                Edit Name
            </Link>
        </div>
    )
}

export default EditButton