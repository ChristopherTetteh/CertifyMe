import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import Form from "react-bootstrap/Form";

const SignUpAdminFm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      console.log(data.user);
      navigate("/AddQualifications");

      
    }catch(err){

    }
  };
//   auth/invalid-email

  return (
    <div className="container">
        <div>
            <h2>Register As An Admin</h2>
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={confirmPassword} onClick={(e) => setConfirmPassword(e.target.value)} className="p-3" />
        </Form.Group>
        <div className="d-flex justify-content-between  align-items-center">
            <Link to="/SignIn">Already have an Account</Link>
           <button className="btn btn-success" type="submit">{loading? "Submitting" : "Submit"}</button> 
        </div>
        
      </Form>
    </div>
  );
};

export default SignUpAdminFm;
