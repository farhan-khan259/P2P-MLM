import React, { useEffect, useState } from 'react';
import '../Common/UserLayout.css';
import './UserDashboard.css';
import dashboard1 from '../../../Assets/Pictures/dashbaord1.jpeg';
import dashboard2 from '../../../Assets/Pictures/dashbaord2.jpeg';
import dashboard3 from '../../../Assets/Pictures/dashbaord3.jpeg';
import dashboard4 from '../../../Assets/Pictures/dashbaord4.jpeg';
import dashboard5 from '../../../Assets/Pictures/dashbaord5.jpeg';
import productPads from '../../../Assets/Pictures/pads.jpeg';
import productAirpods from '../../../Assets/Pictures/airpods.jpeg';

const bannerSlides = [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5];

const productImages = [
  { src: productPads, name: 'Elcon Anion Sanitary Pads' },
  { src: productAirpods, name: 'Wireless Airpods' }
];

const stats = [
  { label: 'Total Earning', value: '450000.00' },
  { label: 'Last Month Income', value: '45000.00' },
  { label: 'Pending Help', value: '350000.00' },
  { label: 'Given Help', value: '189585.00' },
  { label: 'Received Help', value: '200000.00' },
  { label: "Yesterday's Received Help", value: '16000.00' },
  { label: 'Level Income', value: '60000.00' },
  { label: "Yesterday's Level Income", value: '22500.00' },
  { label: 'Repurchase Income', value: '40000.00' },
  { label: "Yesterday's Repurchase Income", value: '500.00' },
  { label: 'Total L + R Income', value: '100000.00' },
  { label: "Yesterday's Total Income", value: '1500.00' },
  { label: 'Total Team', value: '150' },
  { label: "Yesterday's Joining", value: '16' },
  { label: 'Unlock Level', value: '10' },
  { label: 'My Directs', value: '10' },
  { label: 'Upgraded Level', value: '6' },
  { label: 'Rank', value: 'GOLD' }
];

const leaderboardTabs = [
  { key: 'top', label: 'Top Earner', title: 'Top Earner' },
  { key: 'monthly', label: 'Monthly Top Earner', title: 'Monthly Top Earner' },
  { key: 'daily', label: 'Daily Top Earner', title: 'Daily Top Earner' },
  { key: 'rewards', label: 'Rewards', title: 'Rewards' }
];

const leaderboardData = {
  top: [
    { id: 'EL12345678', name: 'SONALI SHIRKE', amount: '156550.00' },
    { id: 'EL12345679', name: 'AMBIKA SALUNKE', amount: '152150.00' },
    { id: 'EL12345680', name: 'RAJKIRAN SALUKE', amount: '145800.00' },
    { id: 'EL12345681', name: 'AMIT SHARMA', amount: '124550.00' },
    { id: 'EL12345682', name: 'SADDAM SHAIKH', amount: '111000.00' }
  ],
  monthly: [
    { id: 'EL12345671', name: 'NISHIKANT KAILAS SHIRKE', amount: '456550.00' },
    { id: 'EL12345672', name: 'ANAMIKA SAXENA', amount: '352150.00' },
    { id: 'EL12345673', name: 'AMRUTA RAJKIRAN SALKHE', amount: '255800.00' },
    { id: 'EL12345674', name: 'NISHIKANT KAILAS SHIRKE', amount: '224550.00' },
    { id: 'EL12345675', name: 'ANAMIKA SAXENA', amount: '201000.00' }
  ],
  daily: [
    { id: 'EL12345688', name: 'PRIYA SHARMA', amount: '18550.00' },
    { id: 'EL12345689', name: 'RAHUL KUMAR', amount: '17210.00' },
    { id: 'EL12345690', name: 'SNEHA PATIL', amount: '16480.00' },
    { id: 'EL12345691', name: 'VIKAS YADAV', amount: '15320.00' },
    { id: 'EL12345692', name: 'POOJA VERMA', amount: '14990.00' }
  ],
  rewards: [
    { id: 'EL12345651', name: 'MEENA JOSHI', amount: '25000.00' },
    { id: 'EL12345652', name: 'ARUN PAWAR', amount: '18000.00' },
    { id: 'EL12345653', name: 'KARAN MALHOTRA', amount: '15000.00' },
    { id: 'EL12345654', name: 'TINA DAS', amount: '12000.00' },
    { id: 'EL12345655', name: 'NARESH REDDY', amount: '10000.00' }
  ]
};

function MemberDashboard() {
  const [activeTab, setActiveTab] = useState('top');
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % bannerSlides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const activeRows = leaderboardData[activeTab] || [];
  const activeTabTitle = leaderboardTabs.find((tab) => tab.key === activeTab)?.title || 'Top Earner';

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % bannerSlides.length);
  };

  return (
    <div className="user-dashboard-shell">
      <div className="user-dashboard1-member-dashboard-root">
        <header className="user-dashboard-topbar">
        </header>

       

        <section className="user-dashboard-carousel-card" aria-label="Dashboard banner carousel">
          <div className="user-dashboard-carousel-stage">
            <button type="button" className="user-dashboard-carousel-nav user-dashboard-carousel-nav-left" onClick={goToPreviousSlide} aria-label="Previous banner">
              ‹
            </button>
            <img src={bannerSlides[activeSlide]} alt={`Dashboard banner ${activeSlide + 1}`} className="user-dashboard-carousel-image" />
            <button type="button" className="user-dashboard-carousel-nav user-dashboard-carousel-nav-right" onClick={goToNextSlide} aria-label="Next banner">
              ›
            </button>
          </div>
          <div className="user-dashboard-carousel-dots" aria-label="Banner navigation dots">
            {bannerSlides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                className={`user-dashboard-carousel-dot ${index === activeSlide ? 'is-active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show banner ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="user-dashboard-news-bar" role="status" aria-live="polite">
          <span className="user-dashboard-news-label">FLASH NEWS</span>
          <div className="user-dashboard-news-track">
            <div className="user-dashboard-news-marquee">KYC is mandatory! Complete your KYC to receive payouts.</div>
          </div>
        </div>

        <section className="user-dashboard1-member-dashboard-header">
          <div className="user-dashboard1-member-dashboard-profile-card">
            <div className="user-dashboard1-member-dashboard-profile-info">
              <div className="user-dashboard1-member-dashboard-profile-name">NISHIKANT KAILAS SHIRKE</div>
              <div className="user-dashboard1-member-dashboard-profile-meta">MEMBER ID : EL12345678 | REGISTER DATE : 23.06.2026</div>
            </div>
          </div>
          <div className="user-dashboard1-member-dashboard-actions">
            <button className="user-dashboard1-member-dashboard-action-btn user-dashboard1-member-dashboard-buy">Buy Product</button>
            <button className="user-dashboard1-member-dashboard-action-btn user-dashboard1-member-dashboard-join">Join Now</button>
            <button className="user-dashboard1-member-dashboard-action-btn user-dashboard1-member-dashboard-share">Share Link</button>
          </div>
        </section>

        <div className="user-dashboard1-member-dashboard-stats-grid">
          {stats.map((stat) => (
            <div className="user-dashboard1-member-dashboard-stat-card" key={stat.label}>
              <div className="user-dashboard1-member-dashboard-stat-content">
                <div className="user-dashboard1-member-dashboard-stat-label">{stat.label}</div>
                <div className="user-dashboard1-member-dashboard-stat-value">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <section className="user-dashboard1-member-dashboard-table-section">
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
        </section>

        <section className="user-dashboard1-member-dashboard-products-section">
          <div className="user-dashboard1-member-dashboard-products-title">📦 Featured Products</div>
          <div className="user-dashboard1-member-dashboard-products-grid">
            {productImages.map((img, idx) => (
              <div className="user-dashboard1-member-dashboard-product-card" key={idx}>
                <img src={img.src} alt={img.name} />
                <div className="user-dashboard1-member-dashboard-product-name">{img.name}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="user-dashboard-bottom-spacer" />
      </div>
    </div>
  );
}

export default MemberDashboard;