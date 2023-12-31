import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
// import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";

const SignInStuForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data.user);
      navigate("/AddQualifications");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
        <div>
            <h2>Login As A Student</h2>
        </div>
      <Form onClick={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-3" />
        </Form.Group>
        
        <div className="d-flex justify-content-between  align-items-center">
            <Link to="/SignUp">Don't have an Account</Link>
           <button className="btn btn-success">{loading? "Submitting" : "Submit"}</button> 
        </div>
      </Form>
    </div>
  );
};

export default SignInStuForm;
