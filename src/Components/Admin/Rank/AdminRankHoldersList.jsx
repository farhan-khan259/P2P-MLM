import { useState } from 'react';
import './AdminRankHoldersList.css';
import { rankHoldersData } from './rankMockData';

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

function AdminRankHoldersList() {
  const [selectedRankFilter, setSelectedRankFilter] = useState('');
  const [filteredData, setFilteredData] = useState(rankHoldersData);

  const handleSearchClick = () => {
    if (selectedRankFilter) {
      const filtered = rankHoldersData.filter(
        (holder) => holder.rank === selectedRankFilter
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(rankHoldersData);
    }
  };

  return (
    <div>
      <h1 className="page-title">Rank</h1>

      <div className="panel">
        
        <div className="rank-filter-grid">
          <select
            className="select-input"
            value={selectedRankFilter}
            onChange={(e) => setSelectedRankFilter(e.target.value)}
          >
            <option value="">All Ranks</option>
            {rankOptions.map((rank, idx) => (
              <option key={idx} value={rank}>
                {rank}
              </option>
            ))}
          </select>
          <button className="btn-primary" onClick={handleSearchClick}>
            Search
          </button>
        </div>

        <div className="table-wrap">
          
          <table className="data-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>JOINING DATE</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>CITY</th>
                <th>DIRECTS</th>
                <th>UPGRADE</th>
                <th>EARNING</th>
                <th>RANK</th>
                <th>STATUS</th>
                <th>ACTION</th>
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
                  <td>{row.directs}</td>
                  <td>{row.upgrade}</td>
                  <td>{row.earning}</td>
                  <td>{row.rank}</td>
                  <td>{row.status}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                      <button type="button" title="Accept" style={{ background: '#e8f8f5', color: '#27ae60', border: '1px solid #27ae60', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>✓</button>
                      <button type="button" title="Reject" style={{ background: '#fadbd8', color: '#e74c3c', border: '1px solid #e74c3c', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>✕</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>
            Showing Page 1 of {Math.ceil(filteredData.length / 10)} From{' '}
            {filteredData.length} Rows
          </span>
          <div className="pagination">
            <button className="page-btn">&lt;&lt;</button>
            <button className="page-btn">&lt;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">&gt;</button>
            <button className="page-btn">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRankHoldersList;
