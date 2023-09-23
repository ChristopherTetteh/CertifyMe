import { ethers } from 'hardhat';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying CertifyMe contract with the account:', deployer.address);

  const CertifyMe = await ethers.getContractFactory('CertifyMe');
  const certifyMe = await CertifyMe.deploy();

  console.log('CertifyMe contract address:', certifyMe.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
