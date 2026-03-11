import '../../Common/UserLayout.css';
import { teamList } from '../../Common/userMockData';
import './MyTeam.css';

function MyTeam() {
  return (
    <div>
      <h1 className="user-page-title">Downline List</h1>
      <div className="user-panel">
        <div className="downline-filters">
          <input type="text" placeholder="MEMBER ID" aria-label="Member ID" />
          <select aria-label="Level">
            <option value="">LEVEL</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <select aria-label="Unlock Level">
            <option value="">UNLOCK LEVEL</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <input type="text" placeholder="START DATE" aria-label="Start Date" />
          <input type="text" placeholder="END DATE" aria-label="End Date" />
          <select aria-label="Rows per page">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button className="user-btn-blue" type="button">Search</button>
        </div>

        <div className="table-toolbar">
          <button className="user-btn-outline" type="button">Excel</button>
          <button className="user-btn-outline" type="button">PDF</button>
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>MEMBER ID</th>
              <th>MEMBER NAME</th>
              <th>LEVEL</th>
              <th>JOIN DATE</th>
              <th>UNLOCK LEVEL</th>
              <th>CITY</th>
              <th>RANK NO</th>
            </tr>
          </thead>
          <tbody>
            {teamList.map((item, index) => (
              <tr key={item.memberId}>
                <td>{index + 1}</td>
                <td>{item.memberId}</td>
                <td>{item.name}</td>
                <td>{item.level}</td>
                <td>{item.joinDate}</td>
                <td>{item.unlockLevel}</td>
                <td>{item.city}</td>
                <td>{item.rankNo}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="downline-pagination" aria-label="Pagination">
          <button type="button" className="downline-page-btn" disabled>
            «
          </button>
          <button type="button" className="downline-page-btn" disabled>
            ‹
          </button>
          <button type="button" className="downline-page-btn downline-page-btn-active">
            1
          </button>
          <button type="button" className="downline-page-btn">2</button>
          <button type="button" className="downline-page-btn">3</button>
          <button type="button" className="downline-page-btn">4</button>
          <button type="button" className="downline-page-btn">5</button>
          <button type="button" className="downline-page-btn">6</button>
          <button type="button" className="downline-page-btn">7</button>
          <button type="button" className="downline-page-btn">›</button>
          <button type="button" className="downline-page-btn">»</button>
        </div>
      </div>
    </div>
  );
}

export default MyTeam;
