import '../../Common/UserLayout.css';
import './UpdateTransPassword.css';
import { useState } from 'react';

function UpdateTransPassword() {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
  };

  return (
    <div>
      <h1 className="user-page-title">Update Transaction Password</h1>
      <div className="user-panel">
        <form className="form-grid" onSubmit={handleSubmit}>
          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            placeholder="Enter Current Password"
            required
          />
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="Enter New Password"
            required
          />
          <label>Re-type New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Re-type New Password"
            required
          />
          <div className="btn-row">
            <button className="user-btn-blue" type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTransPassword;
