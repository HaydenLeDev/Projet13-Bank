import "./NewNameForm.css"
import EditForm from "../../../components/private/editForm/EditForm"

function NewNameForm() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <h1>New name</h1>
        <EditForm />
      </section>
    </main>
  )
}

export default NewNameForm