import './Login.css'
import Form from "../../../components/auth/form/Form";

function Login() {


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  )
}

export default Login
