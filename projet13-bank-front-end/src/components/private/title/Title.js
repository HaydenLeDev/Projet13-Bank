import "./Title.css"

function Title({firstName, lastName}) {

    return (
        <h1 className="TitleUser">
            Welcome back <br></br> {firstName} {lastName}
        </h1>
    )
}

export default Title