import '../../Common/UserLayout.css';
import { profileData } from '../../Common/userMockData';
import './MyProfile.css';

function MyProfile() {
  return (
    <div>
      <h1 className="user-page-title">My Profile</h1>
      <div className="user-panel profile-columns">
        <div className="profile-col">
          <p><strong>Member Name:</strong> {profileData.memberName}</p>
          <p><strong>Sponsor ID:</strong> {profileData.sponsorId}</p>
          <p><strong>Sponsor Name:</strong> {profileData.sponsorName}</p>
          <p><strong>Address:</strong> {profileData.address}</p>
          <p><strong>State:</strong> {profileData.state}</p>
          <p><strong>City:</strong> {profileData.city}</p>
          <p><strong>Pincode:</strong> {profileData.pincode}</p>
        </div>
        <div className="profile-col">
          <p><strong>Mobile:</strong> {profileData.mobile}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Aadhar No.:</strong> {profileData.aadharNo}</p>
          <p><strong>Pan No.:</strong> {profileData.panNo}</p>
        </div>
        <div className="profile-col">
          <p><strong>Bank Name:</strong> {profileData.bankName}</p>
          <p><strong>A/C Holder Name:</strong> {profileData.accountHolder}</p>
          <p><strong>A/C No.:</strong> {profileData.accountNo}</p>
          <p><strong>IFSC Code:</strong> {profileData.ifsc}</p>
          <p><strong>Bank Branch:</strong> {profileData.bankBranch}</p>
          <p><strong>Google Pay:</strong> {profileData.googlePay}</p>
          <p><strong>PAYTM:</strong> {profileData.paytm}</p>
          <p><strong>Phone Pay:</strong> {profileData.phonePay}</p>
          <p><strong>UPI:</strong> {profileData.upi}</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
