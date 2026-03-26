import React from "react";
import "./GivenHelp.css";

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
          <div className="section-title">Sender Details (help Provider)</div>
          <div className="section-row"><span>Member Name :</span> {data.sender.name}</div>
          <div className="section-row"><span>Member ID :</span> {data.sender.id}</div>
          <div className="section-row"><span>E-mail ID :</span> {data.sender.email}</div>
        </div>
        <div className="donation-section">
          <div className="section-title">Receiver Details (help Receiver)</div>
          <div className="section-row"><span>Member Name :</span> {data.receiver.name}</div>
          <div className="section-row"><span>Mobile No. :</span> {data.receiver.mobile}</div>
          <div className="section-row"><span>Member ID :</span> {data.receiver.id}</div>
          <div className="section-row"><span>E-mail ID :</span> {data.receiver.email}</div>
          <div className="section-row"><span>Gpay :</span> {data.receiver.gpay}</div>
          <div className="section-row"><span>PhonePe :</span> {data.receiver.phonepe}</div>
          <div className="section-row"><span>PayTM :</span> {data.receiver.paytm}</div>
          <div className="section-row"><span>UPI ID :</span> {data.receiver.upi}</div>
          <div className="section-row"><span>Bank Name :</span> {data.receiver.bank}</div>
          <div className="section-row"><span>Account No :</span> {data.receiver.account}</div>
          <div className="section-row"><span>Beneficiary Name :</span> {data.receiver.beneficiary}</div>
          <div className="section-row"><span>IFSC Code :</span> {data.receiver.ifsc}</div>
        </div>
        <div className="donation-section">
          <div className="section-title">Donation Or Help Details</div>
          <div className="section-row"><span>Amount Sent in Rupees :</span> <span className="amount">₹ {data.donation.amount}.00</span></div>
          <div className="section-row"><span>Donation Date :</span> {data.donation.date}</div>
          <div className="section-row"><span>Donation Status :</span> {data.donation.status}</div>
        </div>
        <div className="donation-section">
          <div className="section-title">Declaration By Sender</div>
          <div className="section-row declaration-text">{data.declaration}</div>
          <div className="section-row"><span>Pay Slip :</span> <input type="file" /></div>
          <div className="section-row"><span>Transaction No :</span> <input type="text" className="input-txn" /></div>
        </div>
        <div className="donation-section verification-section">
          <button className="user-btn-blue">Get Code</button>
          <span className="verification-label">E-Mail Verification Code :</span>
          <input type="text" className="input-code" />
        </div>
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
