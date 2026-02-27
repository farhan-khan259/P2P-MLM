import PublicPageHeader from '../Common/PublicPageHeader';
import './Register.css';

function Register() {
  return (
    <div>
      <PublicPageHeader title="Registration" />
      <section className="public-page">
        <div className="public-container register-card public-white-card">
          <h3>New Registration</h3>
          <div className="public-form-grid">
            <div className="public-form-field">
              <label>Sponsor ID</label>
              <input />
            </div>
            <div className="public-form-field">
              <label>Your Sponsor Is</label>
              <input />
            </div>

            <div className="public-form-field">
              <label>Applicant Name</label>
              <input placeholder="As Per Aadhaar Card" />
            </div>
            <div className="public-form-field">
              <label>Email ID</label>
              <input placeholder="Email" />
            </div>

            <div className="public-form-field">
              <label>Date Of Birth</label>
              <input placeholder="* apply for 18 year old and above" />
            </div>
            <div className="public-form-field">
              <label>Mobile No.</label>
              <input placeholder="Mobile No." />
            </div>

            <div className="public-form-field">
              <label>Whatsapp No.</label>
              <input placeholder="Whatsapp No." />
            </div>
            <div className="public-form-field">
              <label>Country</label>
              <select>
                <option>Select Country</option>
              </select>
            </div>

            <div className="public-form-field">
              <label>State</label>
              <select>
                <option>Select State</option>
              </select>
            </div>
            <div className="public-form-field">
              <label>City</label>
              <input placeholder="City" />
            </div>
          </div>

          <h3 className="register-subtitle">Account Details</h3>
          <div className="public-form-grid">
            <div className="public-form-field register-full-row">
              <label>Your User Name</label>
              <input placeholder="Auto Generate" />
            </div>
            <div className="public-form-field">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="public-form-field">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>

          <div className="register-actions">
            <label className="register-terms">
              <input type="checkbox" /> I agree to the Policies and Terms of Use.
            </label>
            <button type="button" className="public-primary-btn">
              Register Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
