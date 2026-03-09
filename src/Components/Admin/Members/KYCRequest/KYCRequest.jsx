import { useState } from 'react';
import './KYCRequest.css';

const initialFormData = {
  bankName: '',
  bankBranch: '',
  accountHolderName: '',
  bankAccountNumber: '',
  ifscCode: '',
  googlePayNumber: '',
  phonePeNumber: '',
  paytmNumber: '',
  upiId: '',
  aadharCardNumber: '',
  panCardNumber: ''
};

function KYCRequest() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (key) => (event) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="panel" style={{ borderRadius: '28px', padding: '24px' }}>
        <div className="kyc-request-wrap">
          <h2 className="kyc-request-title">KYC Verification</h2>

          <form className="kyc-request-form" onSubmit={handleSubmit}>
            <label className="kyc-label" htmlFor="bankName">Bank Name</label>
            <input
              id="bankName"
              className="text-input"
              placeholder="Enter Bank Name"
              value={formData.bankName}
              onChange={handleChange('bankName')}
            />

            <label className="kyc-label" htmlFor="bankBranch">Bank Branch</label>
            <input
              id="bankBranch"
              className="text-input"
              placeholder="Enter Branch Name"
              value={formData.bankBranch}
              onChange={handleChange('bankBranch')}
            />

            <label className="kyc-label" htmlFor="accountHolderName">Account Holder Name</label>
            <input
              id="accountHolderName"
              className="text-input"
              placeholder="Enter Account Holder Name"
              value={formData.accountHolderName}
              onChange={handleChange('accountHolderName')}
            />

            <label className="kyc-label" htmlFor="bankAccountNumber">Bank Account Number</label>
            <input
              id="bankAccountNumber"
              className="text-input"
              placeholder="Enter Account Number"
              value={formData.bankAccountNumber}
              onChange={handleChange('bankAccountNumber')}
            />

            <label className="kyc-label" htmlFor="ifscCode">IFSC Code</label>
            <input
              id="ifscCode"
              className="text-input"
              placeholder="Enter IFSC Code"
              value={formData.ifscCode}
              onChange={handleChange('ifscCode')}
            />

            <div className="kyc-row-two-col">
              <div className="kyc-col">
                <label className="kyc-label" htmlFor="googlePayNumber">Google Pay Number</label>
                <input
                  id="googlePayNumber"
                  className="text-input"
                  placeholder="Enter Google Pay Number"
                  value={formData.googlePayNumber}
                  onChange={handleChange('googlePayNumber')}
                />
              </div>

              <div className="kyc-col">
                <label className="kyc-label" htmlFor="phonePeNumber">PhonePe Number</label>
                <input
                  id="phonePeNumber"
                  className="text-input"
                  placeholder="Enter PhonePe Number"
                  value={formData.phonePeNumber}
                  onChange={handleChange('phonePeNumber')}
                />
              </div>
            </div>

            <div className="kyc-row-two-col">
              <div className="kyc-col">
                <label className="kyc-label" htmlFor="paytmNumber">Paytm Number</label>
                <input
                  id="paytmNumber"
                  className="text-input"
                  placeholder="Enter Paytm Number"
                  value={formData.paytmNumber}
                  onChange={handleChange('paytmNumber')}
                />
              </div>

              <div className="kyc-col">
                <label className="kyc-label" htmlFor="upiId">UPI ID</label>
                <input
                  id="upiId"
                  className="text-input"
                  placeholder="Enter UPI ID"
                  value={formData.upiId}
                  onChange={handleChange('upiId')}
                />
              </div>
            </div>

            <div className="kyc-row-two-col">
              <div className="kyc-col">
                <label className="kyc-label" htmlFor="aadharCardNumber">Aadhar Card Number</label>
                <input
                  id="aadharCardNumber"
                  className="text-input"
                  placeholder="Enter Aadhar Card Number"
                  value={formData.aadharCardNumber}
                  onChange={handleChange('aadharCardNumber')}
                />
              </div>

              <div className="kyc-col">
                <label className="kyc-label" htmlFor="panCardNumber">PAN Card Number</label>
                <input
                  id="panCardNumber"
                  className="text-input"
                  placeholder="Enter PAN Card Number"
                  value={formData.panCardNumber}
                  onChange={handleChange('panCardNumber')}
                />
              </div>
            </div>

            <label className="kyc-label" htmlFor="aadharFrontImage">Aadhar Card Front Image</label>
            <input id="aadharFrontImage" className="kyc-file-input" type="file" />

            <label className="kyc-label" htmlFor="aadharBackImage">Aadhar Card Back Image</label>
            <input id="aadharBackImage" className="kyc-file-input" type="file" />

            <div className="kyc-submit-row">
              <button className="btn-primary kyc-submit-btn" type="submit">Submit KYC</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default KYCRequest;
