import { ethers } from 'hardhat';
import { Contract, Signer } from 'ethers';
import { expect } from 'chai';


describe('CertifyMe Contract',  function () {
  let certContract: any;
  let owner: Signer;
  let student: Signer;
  
  before(async function () {
    // Deploy the CertifyMe contract
    const CertifyMe = await ethers.getContractFactory('CertifyMe');
    certContract = await CertifyMe.deploy();
    await certContract.waitForDeployment();

    // Get the owner of the contract
    [owner, student] = await ethers.getSigners();
  });

  it('Should allow the owner to create and retrieve certificates', async function () {
    // Create a certificate
    const certificateName = 'Certificate of Achievement';
    const issuer = 'University';
    const issueDate = Date.now();

     // Call the createCertificate function on the contract, connected to the owner's signer
    await certContract.connect(owner).createCertificate(
      certificateName,
      issuer,
      issueDate,
      student
      
    );

    // Retrieve the certificate by calling the getCertificate function
    const certificate = await certContract.getCertificate(0);

    // Assert that the retrieved certificate matches the created certificate
    expect(certificate.name).to.equal(certificateName); // Check if the name matches
    expect(certificate.issuer).to.equal(issuer); // Check if the issuer matches
    expect(Number(certificate.issueDate)).to.equal(issueDate);  // Check if the issue date matches
    expect(certificate.certificateOwner).to.equal(await student.getAddress());  // Check if the student matches
  });
});
