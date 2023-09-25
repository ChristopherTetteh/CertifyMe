// Import necessary dependencies
// import React, { useState } from "react";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import ViewCertificate from "./ViewCertificate"; // Update the path to match the actual location of your component

// Define your smart contract address and ABI
const CONTRACT_ADDRESS = "0x82dF339D06a087D3789B1760a701597c1dE71aCD";
const CONTRACT_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "certificates",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "issueDate",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "certificateOwner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_issueDate",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "createCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_certificateId",
          "type": "uint256"
        }
      ],
      "name": "getCertificate",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "issuer",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "issueDate",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "certificateOwner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]; // Your smart contract ABI

const CertificateManagement = () => {
    // State variables for certificate data
    const [certificates, setCertificates] = useState([]);
    const [certID, setCertID] = useState('');
    const [candName, setCandName] = useState('');
    const [loading, setLoading] = useState(false);

    // Connect to your smart contract
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider.getSigner());

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call a function on your smart contract to issue the certificate
            const tx = await contract.issueCertificate(certID, candName);
            await tx.wait(); // Wait for the transaction to be mined
            // Fetch updated certificate list from the smart contract
            const updatedCertificates = await contract.getCertificates();
            setCertificates(updatedCertificates);
            // Clear input fields or update as needed
            setCertID('');
            setCandName('');
        } catch (err) {
            // Handle errors
        }
    }

    // Fetch certificate data from the smart contract when the component mounts
    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const certificateList = await contract.getCertificates();
                setCertificates(certificateList);
            } catch (err) {
                // Handle errors
            }
        }
        fetchCertificates();
    }, [contract]);

    return (
        <div>
            {/* Issue Certificate section */}
            <form className="entry-form">
                {/* Form elements for issuing certificates */}
                <button onClick={handleSubmit} className="btn btn-info">
                    Issue Certificate
                </button>
            </form>

            {/* View Certificate section */}
            <ViewCertificate certificates={certificates} />
        </div>
    );
};

export default CertificateManagement;
