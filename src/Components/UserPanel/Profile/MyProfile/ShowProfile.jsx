import '../../Common/UserLayout.css';
import '../../../Public/Register/Register.css';
import { profileData } from '../../Common/userMockData';
import userprofile from '../../../../Assets/Pictures/images.png';

function ShowProfile() {
  return (
    <section className="public-page">
      <div className="public-container">
        <h2 className="register-title" style={{marginBottom: 24}}>My Profile</h2>
        <div className="show-profile-card">
          <div className="show-profile-grid">
            {/* PHOTO + NAME */}
            <div className="show-profile-photo-box">
              <div className="show-profile-photo">
                <img style={{border: '1px solid black',borderRadius: '50%'}} src={userprofile} alt="Profile" />
              </div>
              <div className="show-profile-name-bar">
                NAME : {profileData.memberName}({profileData.memberId})
              </div>
            </div>
            {/* MEMBER PROFILE DETAILS */}
            <div className="show-profile-section">
              <div className="show-profile-section-header">MEMBER PROFILE DETAILS</div>
              <div className="show-profile-section-body">
                <div><b>MEMBER ID</b> <span>{profileData.memberId}</span></div>
                <div><b>FULL NAME</b> <span>{profileData.memberName}</span></div>
                <div><b>DOB</b> <span>23-JULY-1990</span></div>
                <div><b>MOBILE</b> <span>{profileData.mobile}</span></div>
                <div><b>EMAIL</b> <span>{profileData.email}</span></div>
                <div><b>JOINING DATE</b> <span>10-MARCH-2026</span></div>
                <div><b>STATUS</b> <span>ACTIVE</span></div>
              </div>
            </div>
            {/* ADDRESS DETAILS */}
            <div className="show-profile-section">
              <div className="show-profile-section-header">ADDRESS DETAILS</div>
              <div className="show-profile-section-body">
                <div><b>ADDRESS</b> <span>{profileData.address}</span></div>
                <div><b>STATE</b> <span>{profileData.state}</span></div>
                <div><b>DISTRICT</b> <span>PUNE</span></div>
                <div><b>CITY</b> <span>{profileData.city}</span></div>
                <div><b>PINCODE</b> <span>{profileData.pincode}</span></div>
              </div>
            </div>
            {/* BANK DETAILS */}
            <div className="show-profile-section">
              <div className="show-profile-section-header">BANK DETAILS</div>
              <div className="show-profile-section-body">
                <div><b>BANK NAME</b> <span>{profileData.bankName}</span></div>
                <div><b>HOLDER NAME</b> <span>ANAMIKA SAXENA</span></div>
                <div><b>ACC NUMBER</b> <span>{profileData.accountNo}</span></div>
                <div><b>IFSC CODE</b> <span>{profileData.ifsc}</span></div>
                <div><b>BANK BRANCH</b> <span>{profileData.bankBranch}</span></div>
                <div><b>PAN NO</b> <span>BHWPS08670</span></div>
              </div>
            </div>
            {/* ONLINE PAYMENT DETAILS */}
            <div className="show-profile-section">
              <div className="show-profile-section-header">ONLINE PAYMENT DETAILS</div>
              <div className="show-profile-section-body">
                <div><b>GOOGLE PAY</b> <span>9175615128</span></div>
                <div><b>PHONEPE NO.</b> <span>9175615128@YBL</span></div>
                <div><b>PAYTM NO.</b> <span>9175615128</span></div>
                <div><b>UPI ID</b> <span>SHALIK.YAGNESH@OKSBl</span></div>
              </div>
              <div className="show-profile-section-header show-profile-section-header-sub">KYC DETAILS</div>
              <div className="show-profile-section-body">
                <div><b>AADHAAR NO</b> <span>123456789012</span></div>
                <div><b>PAN NO</b> <span>BHWPS08670</span></div>
              </div>
            </div>
            {/* NOMINEE DETAILS */}
            <div className="show-profile-section">
              <div className="show-profile-section-header">NOMINEE DETAILS</div>
              <div className="show-profile-section-body">
                <div><b>NOMINEE NAME</b> <span>AMRUTA SALUNKE</span></div>
                <div><b>RELATION</b> <span>SISTER</span></div>
                <div><b>AGE</b> <span>30</span></div>
                <div><b>MOBILE</b> <span>7020110390</span></div>
              </div>
            </div>
            {/* SPONSOR DETAILS */}
            <div className="show-profile-section">
              <div className="show-profile-section-header">SPONSOR DETAILS</div>
              <div className="show-profile-section-body">
                <div><b>SPONSOR ID</b> <span>EL 23423423</span></div>
                <div><b>SPONSOR NAME</b> <span>AMRUTA SALUNKE</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowProfile;
