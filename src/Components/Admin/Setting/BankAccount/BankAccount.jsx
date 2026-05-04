import React from 'react';
import './BankAccount.css';
import qr from '../../../../Assets/Pictures/QR-Code.png';

export default function BankAccount(){
  return (
    <div className="bank-page container">
      <h3 className="bank-header">Company Bank Account</h3>
      <div className="bank-card">
        <div className="bank-qr">
          <img src={qr} alt="qr" />
          <div className="upi">UPI ID : Elcon.network@oksbi</div>
        </div>

        <div className="bank-details">
          <div className="bd-title">Bank Account Details</div>
          <table className="bd-table">
            <tbody>
              <tr><td>Bank Name</td><td>State Bank Of India</td></tr>
              <tr><td>Bank Branch</td><td>Pashan Pune</td></tr>
              <tr><td>A/c Holder Name</td><td>Elcon Network</td></tr>
              <tr><td>A/c No.</td><td>458578525894</td></tr>
              <tr><td>A/c Type</td><td>Current Account</td></tr>
              <tr><td>IFSC Code</td><td>SBIN004736</td></tr>
            </tbody>
          </table>

          <div className="bank-actions">
            <button className="btn-edit">EDIT</button>
            <button className="btn-update">UPDATE</button>
          </div>
        </div>
      </div>
    </div>
  )
}
