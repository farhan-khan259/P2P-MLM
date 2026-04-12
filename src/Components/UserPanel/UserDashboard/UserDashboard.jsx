// UserDashboard.jsx
import React, { useState } from 'react';
import '../Common/UserLayout.css';
import './UserDashboard.css';
import profileImage from '../../../Assets/Pictures/images.png';
import productPads from '../../../Assets/Pictures/pads.jpeg';
import productAirpods from '../../../Assets/Pictures/airpods.jpeg';

const productImages = [
  {
    src: productPads,
    name: 'Elcon Anion Sanitary Pads'
  },
  {
    src: productAirpods,
    name: 'Wireless Airpods'
  }
];

const stats = [
  { label: ' Given Help', value: '156550.00',  },
  { label: ' Received Help', value: '452150.00', },
  { label: 'Pending Help', value: '455800.00', },
  { label: 'Level Income', value: '254550.00',  },
  { label: 'Total Team', value: '10250',},
  { label: 'Total Income', value: '1510000.00', },
  { label: 'Upgraded Level', value: '6', },
  { label: 'My Directs', value: '10', },
  { label: "Today's Income", value: '1500', },
  { label: 'Last Month Income', value: '26560',},
  { label: 'Unlock Level', value: '7', },
  { label: 'Rank', value: 'Gold', },
];

const noCurrencyLabels = new Set(['Upgraded Level', 'My Directs', 'Unlock Level', 'Rank']);

const leaderboardTabs = [
  { key: 'top', label: 'Top Earner', title: 'Top Earner' },
  { key: 'monthly', label: 'Monthly Top Earner', title: 'Monthly Top Earner' },
  { key: 'daily', label: 'Daily Top Earner', title: 'Daily Top Earner' },
  { key: 'rewards', label: 'Rewards', title: 'Rewards' },
];

const leaderboardData = {
  top: [
    { id: 'EL12345678', name: 'SONALI SHIRKE', amount: '156550.00' },
    { id: 'EL12345679', name: 'AMBIKA SALUNKE', amount: '152150.00' },
    { id: 'EL12345680', name: 'RAJKIRAN SALUKE', amount: '145800.00' },
    { id: 'EL12345681', name: 'AMIT SHARMA', amount: '124550.00' },
    { id: 'EL12345682', name: 'SADDAM SHAIKH', amount: '111000.00' },
  ],
  monthly: [
    { id: 'EL12345671', name: 'NISHIKANT KAILAS SHIRKE', amount: '456550.00' },
    { id: 'EL12345672', name: 'ANAMIKA RARTRYY SAXENA', amount: '352150.00' },
    { id: 'EL12345673', name: 'AMRUTA RAJKIRAN SALKHE', amount: '255800.00' },
    { id: 'EL12345674', name: 'NISHIKNAT KAILAS SHIRKE', amount: '224550.00' },
    { id: 'EL12345675', name: 'ANAMIKA GHJHBJK SAXENA', amount: '201000.00' },
  ],
  daily: [
    { id: 'EL12345688', name: 'PRIYA SHARMA', amount: '18550.00' },
    { id: 'EL12345689', name: 'RAHUL KUMAR', amount: '17210.00' },
    { id: 'EL12345690', name: 'SNEHA PATIL', amount: '16480.00' },
    { id: 'EL12345691', name: 'VIKAS YADAV', amount: '15320.00' },
    { id: 'EL12345692', name: 'POOJA VERMA', amount: '14990.00' },
  ],
  rewards: [
    { id: 'EL12345651', name: 'MEENA JOSHI', amount: '25000.00' },
    { id: 'EL12345652', name: 'ARUN PAWAR', amount: '18000.00' },
    { id: 'EL12345653', name: 'KARAN MALHOTRA', amount: '15000.00' },
    { id: 'EL12345654', name: 'TINA DAS', amount: '12000.00' },
    { id: 'EL12345655', name: 'NARESH REDDY', amount: '10000.00' },
  ],
};

function MemberDashboard() {
  const [activeTab, setActiveTab] = useState('top');
  const activeRows = leaderboardData[activeTab] || [];
  const activeTabTitle = leaderboardTabs.find((tab) => tab.key === activeTab)?.title || 'Top Earner';

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
        {stats.map((stat) => (
          <div className="user-dashboard1-member-dashboard-stat-card" key={stat.label}>
            
            <div className="user-dashboard1-member-dashboard-stat-content">
              <div className="user-dashboard1-member-dashboard-stat-label">{stat.label}</div>
              <div className="user-dashboard1-member-dashboard-stat-value">
                {noCurrencyLabels.has(stat.label) ? stat.value : `₹ ${stat.value}`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="user-dashboard1-member-dashboard-table-section">
        <div className="user-dashboard1-member-dashboard-table-title">🏆 {activeTabTitle}</div>
        <div className="user-dashboard1-member-dashboard-table-tabs" role="tablist" aria-label="Earner Categories">
          {leaderboardTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`user-dashboard1-member-dashboard-tab-btn ${activeTab === tab.key ? 'user-dashboard1-member-dashboard-tab-btn-active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
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
              {activeRows.map((row, idx) => (
                <tr key={`${activeTab}-${row.id}`}>
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
        <div className="user-dashboard1-member-dashboard-products-title">📦 Featured Products</div>
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