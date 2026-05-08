import { useState } from 'react';
import './UserMyRank.css';
import { rankProgressionData, rankHoldersData } from './userRankMockData';

const rankOptions = [
  'STARTER',
  'ACHIEVER',
  'STAR',
  'BRONZE',
  'SILVER',
  'GOLD',
  'PLATINUM',
  'EMERALD',
  'DIAMOND',
  'CROWN DIAMOND'
];

function UserMyRank() {
  const [expandedRank, setExpandedRank] = useState(5);
  const [filteredData, setFilteredData] = useState(rankHoldersData);
  const currentRank = rankProgressionData[5];
  const nextRank = rankProgressionData[6];
  const currentEarning = 16000;

  const toggleRank = (rankIndex) => {
    setExpandedRank(expandedRank === rankIndex ? null : rankIndex);
  };

  const handleSelectRank = (index, rank) => {
    const updatedData = [...filteredData];
    updatedData[index].selectRank = rank;
    setFilteredData(updatedData);
  };

  const progressPercentage = (currentEarning / currentRank.earning) * 100;
  const nextProgressPercentage = (currentEarning / nextRank.earning) * 100;

  return (
    <div className="user-rank-container">
      <h1 className="user-rank-page-title">My Rank</h1>

      <div className="user-rank-panel">
        {/* Left Section - Rank Progression */}
        <div className="user-rank-progression-section">
          <h2 className="user-rank-section-title">RANK PROGRESSION</h2>
          <div className="user-rank-progression-list">
            {rankProgressionData.map((rank, index) => (
              <div
                key={index}
                className={`user-rank-item ${expandedRank === index ? 'user-rank-item-expanded' : ''}`}
                onClick={() => toggleRank(index)}
              >
                <div className="user-rank-item-header">
                  <div className="user-rank-circle">
                    {index + 1}
                  </div>
                  <div className="user-rank-info">
                    <span className="user-rank-item-earning">{rank.earning}</span>
                    <span className="user-rank-item-name">{rank.name}</span>
                  </div>
                  <div className="user-rank-expand-icon">
                    {expandedRank === index ? '▼' : '▶'}
                  </div>
                </div>
                {expandedRank === index && (
                  <div className="user-rank-item-detail">
                    <p>Target Earning: ₹{rank.earning.toLocaleString()}</p>
                    <p>Achieve this rank by reaching the target earning amount.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Current and Next Rank */}
        <div className="user-rank-status-section">
          <div className="user-rank-current-card">
            <h3 className="user-rank-card-title">CURRENT RANK</h3>
            <div className="user-rank-badge">
              {currentRank.name}
            </div>
            <div className="user-rank-earning-display">
              {currentEarning}
            </div>
            <div className="user-rank-progress-bar">
              <div
                className="user-rank-progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="user-rank-progress-text">
              {currentEarning} / {currentRank.earning}
            </div>
          </div>

          <div className="user-rank-next-card">
            <h3 className="user-rank-card-title">NEXT RANK</h3>
            <div className="user-rank-next-badge">
              {nextRank.name}
            </div>
            <div className="user-rank-next-earning-display">
              {nextRank.earning}
            </div>
            <div className="user-rank-progress-bar">
              <div
                className="user-rank-next-progress-fill"
                style={{ width: `${Math.min(nextProgressPercentage, 100)}%` }}
              ></div>
            </div>
            <div className="user-rank-progress-text">
              {currentEarning} / {nextRank.earning}
            </div>
          </div>
        </div>
      </div>

      {/* Rank Holders List */}
      <div className="user-rank-holders-panel">
        <div className="user-rank-holders-header">
          <h2 className="user-rank-holders-title">RANK HOLDERS LIST</h2>
        </div>

        <div className="user-rank-table-wrap">
          <table className="user-rank-data-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>JOINING DATE</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>CITY</th>
                <th>TOTAL EARNING</th>
                <th>SELECT RANK</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={row.id}>
                  <td>{row.sno}</td>
                  <td>{row.joiningDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.city}</td>
                  <td>{row.totalEarning}</td>
                  <td>
                    <select
                      className="user-rank-select"
                      value={row.selectRank}
                      onChange={(e) => handleSelectRank(index, e.target.value)}
                    >
                      <option value="">Select</option>
                      {rankOptions.map((rank, idx) => (
                        <option key={idx} value={rank}>
                          {rank}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="user-rank-table-footer">
          <span>Showing Page 1 of 1 From {filteredData.length} Rows</span>
          <div className="user-rank-pagination">
            <button className="user-rank-page-btn">&lt;&lt;</button>
            <button className="user-rank-page-btn">&lt;</button>
            <button className="user-rank-page-btn active">1</button>
            <button className="user-rank-page-btn">&gt;</button>
            <button className="user-rank-page-btn">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMyRank;