// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertifyMe {
    address public contractOwner;
    
    struct Certificate {
        string name;
        string issuer;
        uint256 issueDate;
        address certificateOwner;
    }

    Certificate[] public certificates;

    modifier onlyContractOwner() {
        require(msg.sender == contractOwner, "Only the contract owner can perform this action");
        _;
    }

    constructor() {
        contractOwner = msg.sender;
    }

    function createCertificate(
        string memory _name,
        string memory _issuer,
        uint256 _issueDate,
        address _to
    ) external onlyContractOwner {
        certificates.push(Certificate(_name, _issuer, _issueDate, _to));
    }

    function getCertificate(uint256 _certificateId)
        external
        view
        returns (
            string memory name,
            string memory issuer,
            uint256 issueDate,
            address certificateOwner
        )
    {
        require(_certificateId < certificates.length, "Certificate does not exist");
        Certificate storage certificate = certificates[_certificateId];
        return (certificate.name, certificate.issuer, certificate.issueDate, certificate.certificateOwner);
    }
}
