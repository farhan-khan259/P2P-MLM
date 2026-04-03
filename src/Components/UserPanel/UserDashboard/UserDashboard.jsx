// UserDashboard.jsx
import React from 'react';
import '../Common/UserLayout.css';
import './UserDashboard.css';
import profileImage from '../../../Assets/Pictures/images.png';

const productImages = [
  {
    src: require('../../../Assets/Pictures/sydney-artsakh-aug-31-2020-program-to-recycle-bottles-and-cans-with-10-cents-each-return-and-earn-2d3xt9f.jpg'),
    name: 'Sydney Recycle Program'
  },
  {
    src: require('../../../Assets/Pictures/gront-kollage_produktfoto_2-1-1280x839.jpg.webp'),
    name: 'Gront Product'
  },
];

const stats = [
  { label: 'I Given Help', value: '156550.00', icon: '🤝' },
  { label: 'I Received Help', value: '452150.00', icon: '🙌' },
  { label: 'Pending Help', value: '455800.00', icon: '⏳' },
  { label: 'Level Income', value: '254550.00', icon: '📈' },
  { label: 'Total Team', value: '10250', icon: '👥' },
  { label: 'Total Income', value: '1510000.00', icon: '💰' },
  { label: 'Upgraded Level', value: '6', icon: '⬆️' },
  { label: 'My Directs', value: '10', icon: '👤' },
  { label: "Today's Income", value: '1500', icon: '📅' },
  { label: 'Last Month Income', value: '26560', icon: '📊' },
];

const topEarners = [
  { id: 'EL12345678', name: 'SONALI SHIRKE', amount: '156550.00' },
  { id: 'EL12345679', name: 'AMBIKA SALUNKE', amount: '452150.00' },
  { id: 'EL12345680', name: 'RAJKIRAN SALUKE', amount: '455800.00' },
  { id: 'EL12345681', name: 'AMIT SHARMA', amount: '254550.00' },
  { id: 'EL12345682', name: 'SADDAM SHAIKH', amount: '1510000.00' },
];

function MemberDashboard() {
  return (
    <div className="user-dashboard1-member-dashboard-root">
      <div className="user-dashboard1-member-dashboard-header">
        <div className="user-dashboard1-member-dashboard-profile-card">
          <div className="user-dashboard1-member-dashboard-profile-pic">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="user-dashboard1-member-dashboard-profile-info">
            <div className="user-dashboard1-member-dashboard-profile-name">Nishikant Kalias Shrike - EL12345678</div>
            <div className="user-dashboard1-member-dashboard-profile-meta">Register Date: 23.06.2021 | Status: Active</div>
          </div>
        </div>
        <div className="user-dashboard1-member-dashboard-actions">
          <button className="user-dashboard1-member-dashboard-action-btn user-dashboard1-member-dashboard-buy">🛒 Buy Product</button>
          <button className="user-dashboard1-member-dashboard-action-btn user-dashboard1-member-dashboard-withdraw">💰 Withdraw</button>
          <button className="user-dashboard1-member-dashboard-action-btn user-dashboard1-member-dashboard-join">👥 Join Now</button>
          <button className="user-dashboard1-member-dashboard-action-btn user-dashboard1-member-dashboard-share">🔗 Share Link</button>
        </div>
      </div>

      <div className="user-dashboard1-member-dashboard-stats-grid">
        {stats.map((stat, idx) => (
          <div className="user-dashboard1-member-dashboard-stat-card" key={stat.label}>
            <div className="user-dashboard1-member-dashboard-stat-icon">{stat.icon}</div>
            <div className="user-dashboard1-member-dashboard-stat-content">
              <div className="user-dashboard1-member-dashboard-stat-label">{stat.label}</div>
              <div className="user-dashboard1-member-dashboard-stat-value">₹ {stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="user-dashboard1-member-dashboard-table-section">
        <div className="user-dashboard1-member-dashboard-table-title">🏆 Daily Top Earner</div>
        <div className="user-dashboard1-member-dashboard-table-wrap">
          <table className="user-dashboard1-member-dashboard-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {topEarners.map((row, idx) => (
                <tr key={row.id}>
                  <td>{idx + 1}</td>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>₹ {row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="user-dashboard1-member-dashboard-products-section">
        <div className="user-dashboard1-member-dashboard-products-title">📦 Our Products (Sydney & Gront)</div>
        <div className="user-dashboard1-member-dashboard-products-grid">
          {productImages.map((img, idx) => (
            <div className="user-dashboard1-member-dashboard-product-card" key={idx}>
              <img src={img.src} alt={img.name} />
              <div className="user-dashboard1-member-dashboard-product-name">{img.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberDashboard;