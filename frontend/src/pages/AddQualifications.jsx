import React, { useState } from 'react';

const IssueCertificate = () => {
  const [recipientName, setRecipientName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [certificateOwner, setCertificateOwner] = useState('');

  const handleRecipientNameChange = (e) => {
    setRecipientName(e.target.value);
  };

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleIssuerChange = (e) => {
    setIssuer(e.target.value);
  };

  const handleIssueDateChange = (e) => {
    setIssueDate(e.target.value);
  };

  const handleCertificateOwnerChange = (e) => {
    setCertificateOwner(e.target.value);
  };

  const handleIssueCertificate = () => {
    // Implement your certificate issuance logic here
    const certificateDetails = {
      recipientName,
      courseName,
      issuer,
      issueDate,
      certificateOwner,
    };

    alert(`Issuing certificate to ${certificateDetails.recipientName} for completing ${certificateDetails.courseName} by ${certificateDetails.issuer} on ${certificateDetails.issueDate}. Certificate owner: ${certificateDetails.certificateOwner}`);
  };

  return (
    <div>
      <h2>Certificate Issuance</h2>
      <form>
        <div>
          <label>Recipient Name:</label>
          <input type="text" value={recipientName} onChange={handleRecipientNameChange} />
        </div>
        <div>
          <label>Course Name:</label>
          <input type="text" value={courseName} onChange={handleCourseNameChange} />
        </div>
        <div>
          <label>Issuer:</label>
          <input type="text" value={issuer} onChange={handleIssuerChange} />
        </div>
        <div>
          <label>Issue Date:</label>
          <input type="date" value={issueDate} onChange={handleIssueDateChange} />
        </div>
        <div>
          <label>Certificate Owner:</label>
          <input type="text" value={certificateOwner} onChange={handleCertificateOwnerChange} />
        </div>
        <button type="button" onClick={handleIssueCertificate}>
          Issue Certificate
        </button>
      </form>
    </div>
  );
};

export default IssueCertificate;
