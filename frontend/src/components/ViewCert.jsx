import React, { useState } from "react";
import ABI from './utils/abi.json'
import { ethers } from "ethers";
import "../stylesheets/style.css";
import "../stylesheets/issueStyle.css";
import { Link } from "react-router-dom";

const ViewCert = () => {
    const [certID, setCertID] = useState('')
    const [candName, setCandName] = useState('')
    const [loading, setLoading] = useState(false)
    

    const courseOptions = ["Certified Blockchain Associate", "Certified Ethereum Developer", "Blockchain Foundation", "Ether"]

    // const ADDRESS = " 0x5330311658199d78E59984ae50b9389Be17c87bF"

    // const provider = new ethers.Contract(ADDRESS, ABI)


    const handleSubmit = async(e) => {
        e.preventDefault()
        try{

        }catch(err){
            
        }
    }
  return (
    <div>
      <div className="header">
        <a href="/" className="logo">
          Certificate Dapp
        </a>
        <div className="header-right">
          <Link to="/">Home</Link>
          <Link to="/Viewing-of-Certificate" className="active">
            View Certificate
          </Link>
        </div>
      </div>
      <br />
      <form className="entry-form">
        <h3>Issue New Certificate</h3>
        <div className="form-group">
          <label for="courseName">Select Course *</label>
          <select className="form-control" name="courseName" id="courseName">
            <option>Certified Blockchain Associate</option>
            <option>Certified Ethereum Developer</option>
            <option>Blockchain Foundation</option>
            <option>Ethereum Fundamentals</option>
          </select>
        </div>

        <div className="form-group">
          <label for="certificateID">Certificate ID *</label>
          <input
            type="text"
            className="form-control"
            name="certificateID"
            id="certificateID"
            placeholder="Certificate ID"
            required
          />
        </div>
        <div className="form-group">
          <label for="candidateName">Candidate name *</label>
          <input
            type="text"
            className="form-control"
            name="candidateName"
            id="candidateName"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label for="grade">Select Grade *</label>
          <select className="form-control" id="grade" name="grade">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </div>
        <div className="form-group">
          <label for="date">Issue Date *</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            required
          />
        </div>
        <button onclick="issueCertificate()" className="btn btn-info">
          Issue Certificate
        </button>
      </form>
    </div>
  );
};

export default ViewCert;
