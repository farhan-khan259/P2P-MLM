import '../../Common/UserLayout.css';
import './ChangePassword.css';

function ChangePassword() {
  return (
    <div>
      <h1 className="user-page-title">Change Login Password</h1>
      <div className="user-panel">
        <div className="form-grid">
          <label>Member ID</label><input defaultValue="IHH192108" />
          <label>Present Login Password</label><input defaultValue="•••••" type="password" />
          <label>New Login Password</label><input type="password" />
          <label>Confirm New Login Password</label><input type="password" />
        </div>
        <div className="btn-row">
          <button className="user-btn-blue">Update</button>
          <button className="user-btn-muted">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
