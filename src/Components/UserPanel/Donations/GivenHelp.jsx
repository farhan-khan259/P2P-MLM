import React from "react";
import "./GivenHelp.css";
import "../Payment/PaymentRequest/HelpInfo.css";

const GivenHelp = () => {
  // Placeholder data for demonstration
  const data = {
    sender: {
      name: "Nishikant Kailas Shirke",
      id: "EL 12345678",
      email: "23nkshirke@gmail.com"
    },
    receiver: {
      name: "Sonali Shirke",
      mobile: "+91 7021101380",
      id: "EL 12345678",
      email: "sonalnikshirke@gmail.com",
      gpay: "+91 7021101380",
      phonepe: "+91 7021101380",
      paytm: "+91 7021101380",
      upi: "+91 7021101380",
      bank: "Sate Bank Of India",
      account: "123456789012",
      beneficiary: "Sonali Nishikant Shirke",
      ifsc: "SBIN00897"
    },
    donation: {
      amount: 300,
      date: "March 15 2026 10.30AM",
      status: "Waiting Receiver Confirmation | Pending"
    },
    declaration: `I hereby declare that I am giving the above amount as voluntary help / donation to the above member on my own wish. This payment is not salary, not commission, not investment, not business profit.\nI understand that this amount is non-refundable and I will not make any legal claim against company / admin / receiver in future.`
  };

  return (
    <div className="given-help-container">
      <h2 className="donation-title">DONATION DECLARATION FORM</h2>
      <div className="donation-note">
        <span className="donation-free-will">“I am donating of my own free will”</span>
        <span className="donation-desc">I am declare that I am not involved in any criminal and terrorist activity. I am gifting this amount as per my wish to <b>Sonali Nishikant Shirke</b> and I will never claim this amount in future”</span>
      </div>
      <div className="donation-details-card">
        <div className="donation-section">
          <div className="section-title21">Sender Details (help Provider)</div>
          <div className="help-info-row"><span className="help-info-label">Member Name :</span> <span className="help-info-value">{data.sender.name}</span></div>
          <div className="help-info-row"><span className="help-info-label">Member ID :</span> <span className="help-info-value">{data.sender.id}</span></div>
          <div className="help-info-row"><span className="help-info-label">E-mail ID :</span> <span className="help-info-value">{data.sender.email}</span></div>
        </div>
        <div className="donation-section">
          <div className="section-title21">Receiver Details (help Receiver)</div>
          <div className="help-info-row"><span className="help-info-label">Member Name :</span> <span className="help-info-value">{data.receiver.name}</span></div>
          <div className="help-info-row"><span className="help-info-label">Mobile No. :</span> <span className="help-info-value">{data.receiver.mobile}</span></div>
          <div className="help-info-row"><span className="help-info-label">Member ID :</span> <span className="help-info-value">{data.receiver.id}</span></div>
          <div className="help-info-row"><span className="help-info-label">E-mail ID :</span> <span className="help-info-value">{data.receiver.email}</span></div>
          <div className="help-info-row"><span className="help-info-label">Gpay :</span> <span className="help-info-value">{data.receiver.gpay}</span></div>
          <div className="help-info-row"><span className="help-info-label">PhonePe :</span> <span className="help-info-value">{data.receiver.phonepe}</span></div>
          <div className="help-info-row"><span className="help-info-label">PayTM :</span> <span className="help-info-value">{data.receiver.paytm}</span></div>
          <div className="help-info-row"><span className="help-info-label">UPI ID :</span> <span className="help-info-value">{data.receiver.upi}</span></div>
          <div className="help-info-row"><span className="help-info-label">Bank Name :</span> <span className="help-info-value">{data.receiver.bank}</span></div>
          <div className="help-info-row"><span className="help-info-label">Account No :</span> <span className="help-info-value">{data.receiver.account}</span></div>
          <div className="help-info-row"><span className="help-info-label">Beneficiary Name :</span> <span className="help-info-value">{data.receiver.beneficiary}</span></div>
          <div className="help-info-row"><span className="help-info-label">IFSC Code :</span> <span className="help-info-value">{data.receiver.ifsc}</span></div>
        </div>
        <div className="donation-section">
          <div className="section-title21">Donation Or Help Details</div>
          <div className="help-info-row"><span className="help-info-label">Amount Sent in Rupees :</span> <span className="help-info-value amount">₹ {data.donation.amount}.00</span></div>
          <div className="help-info-row"><span className="help-info-label">Donation Date :</span> <span className="help-info-value">{data.donation.date}</span></div>
          <div className="help-info-row"><span className="help-info-label">Donation Status :</span> <span className="help-info-value">{data.donation.status}</span></div>
        </div>
        <div className="donation-section">
          <div className="section-title21">Declaration By Sender</div>
          <div className="help-info-row"><span className="help-info-label">Declaration :</span> <span className="help-info-value declaration-text">{data.declaration}</span></div>
          <div className="help-info-row"><span className="help-info-label">Pay Slip :</span> <input type="file" /></div>
          <div className="help-info-row"><span className="help-info-label">Transaction No :</span> <input type="text" className="input-txn" /></div>
        </div>
        <div className="donation-section verification-section">
          <button className="user-btn-blue">Get Code</button>
          <span className="verification-label">E-Mail Verification Code :</span>
          <input type="text" className="input-code" />
        </div>
        <button className="help-submit-btn">Submit</button>
      </div>
      <div className="rank-steps">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`rank-step${i === 0 ? " active" : ""}`}>{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default GivenHelp;
