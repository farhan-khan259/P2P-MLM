import '../../Common/UserLayout.css';
import { profileData } from '../../Common/userMockData';
import './UpdateBankDetails.css';

function UpdateBankDetails() {
  return (
    <div>
      <h1 className="user-page-title">Edit Bank A/C</h1>
      <div className="user-panel">
        <div className="form-grid">
          <label>Account No.</label><input defaultValue={profileData.accountNo} />
          <label>Holder Name</label><input defaultValue={profileData.accountHolder} />
          <label>Bank Name</label><input defaultValue={profileData.bankName} />
          <label>Bank Branch</label><input defaultValue={profileData.bankBranch} />
          <label>PAN Number</label><input defaultValue={profileData.panNo} />
          <label>ADHAR Number</label><input defaultValue={profileData.aadharNo} />
          <label>IFSC Code</label><input defaultValue={profileData.ifsc} />
        </div>
        <div className="btn-row">
          <button className="user-btn-blue">Update</button>
          <button className="user-btn-muted">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateBankDetails;
