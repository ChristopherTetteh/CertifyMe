import React from 'react'
import "../stylesheets/style.css"
import "../stylesheets/issueStyle.css"

const ViewCert = () => {
  return (
    <div>
        <div class="header">
    <a href="/" class="logo">Certificate Dapp</a>
    <div class="header-right">
      <a href="index.html">Home</a>
      <a class="active" href="issueCertificate.html">Issue Certificate</a>
    </div>
  </div>
  <br />
  <div class="entry-form">
    <h3>Issue New Certificate</h3>
    <div class="form-group">
      <label for="courseName">Select Course *</label>
      <select class="form-control" name="courseName" id="courseName">
        <option>Certified Blockchain Associate</option>
        <option>Certified Ethereum Developer</option>
        <option>Blockchain Foundation</option>
        <option>Ethereum Fundamentals</option>
      </select>
    </div>

    <div class="form-group">
      <label for="certificateID">Certificate ID *</label>
      <input type="text" class="form-control" name="certificateID" id="certificateID" placeholder="Certificate ID"
        required />
    </div>
    <div class="form-group">
      <label for="candidateName">Candidate name *</label>
      <input type="text" class="form-control" name="candidateName" id="candidateName" placeholder="Name" required />
    </div>
    <div class="form-group">
      <label for="grade">Select Grade *</label>
      <select class="form-control" id="grade" name="grade">
        <option>S</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <div class="form-group">
      <label for="date">Issue Date *</label>
      <input type="date" class="form-control" id="date" name="date" required />
    </div>
    <button onclick="issueCertificate()" class="btn btn-info">Issue Certificate</button>
  </div>
    </div>
  )
}

export default ViewCert