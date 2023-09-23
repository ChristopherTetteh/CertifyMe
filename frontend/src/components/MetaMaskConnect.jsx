import React from "react";
import { useMetaMask } from "metamask-react";
import { Link } from "react-router-dom";

const MetaMaskConnect = () => {
  const { status, connect } = useMetaMask();
  return (
    <div>
      {status === "initializing" && <p>Initializing...</p>}
      {status === "connecting" && (
        <button className="btn btn-warning">Connecting</button>
      )}
      {status === "notConnected" && (
        <button className="btn btn-success" onClick={connect}>Connect Wallet</button>
      )}
      {status === "unavailable" && <p>Please Install MetaMask</p>}
      {status === "connected" && (
        <div className="d-flex gap-5">
          <Link to="/AddQualifications" className="text-decoration-none text-dark">AddQualifications</Link>

          <Link to="/Viewing-of-Certificate" className="text-decoration-none text-dark">Viewing of Certificate</Link>
        </div>
      )}
    </div>
  );
};

export default MetaMaskConnect;
