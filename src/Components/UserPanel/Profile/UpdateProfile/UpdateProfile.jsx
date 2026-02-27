import '../../Common/UserLayout.css';
import { profileData } from '../../Common/userMockData';
import './UpdateProfile.css';

function UpdateProfile() {
  return (
    <div>
      <h1 className="user-page-title">Edit Profile</h1>
      <div className="user-panel">
        <div className="form-grid">
          <label>Member Name</label><input defaultValue={profileData.memberName} />
          <label>Address</label><input defaultValue={profileData.address} />
          <label>Country</label><select><option>Select Country</option></select>
          <label>State</label><input defaultValue={profileData.state} />
          <label>City</label><input defaultValue={profileData.city} />
          <label>Pincode</label><input defaultValue={profileData.pincode} />
          <label>Calling Number</label><input />
          <label>Whatsapp Number</label><input />
          <label>E-mail</label><input defaultValue={profileData.email} />
        </div>
        <div className="btn-row">
          <button className="user-btn-blue">Update</button>
          <button className="user-btn-muted">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
