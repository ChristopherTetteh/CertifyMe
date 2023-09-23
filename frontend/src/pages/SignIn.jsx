import SignInStuForm from '../components/Forms/SignInStuForm'
import SignInAdminFm from '../components/Forms/SignInAdminFm'
import Navbar from '../components/Navbar'

const SignIn = () => {
  return (
    <div>
      <div className="container">
      <Navbar />
      <div className="row">
      <div className="col-md-6">
        <SignInStuForm />
      </div>

      <div className="col-md-6">
        <SignInAdminFm />
      </div>
    </div>
    </div>
    </div>
  )
}

export default SignIn