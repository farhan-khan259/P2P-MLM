import '../../Common/UserLayout.css';
import { directList } from '../../Common/userMockData';
import './TeamLevel.css';

function TeamLevel() {
  return (
    <div>
      <h1 className="user-page-title">My Tree Level</h1>
      <div className="user-panel">
        <div className="tree-controls">
          <label>LEVEL</label>
          <select><option>Select Level</option></select>
          <button className="user-btn-blue">Show Details</button>
        </div>
        <div className="table-toolbar"><button className="user-btn-outline">Excel</button></div>
        <div className="table-wrap">
          <table className="user-table">
            <thead>
              <tr>
                <th>MEMBERID</th>
                <th>NAME</th>
                <th>SPONSOR ID</th>
                <th>JOIN DATE</th>
              </tr>
            </thead>
            <tbody>
              {directList.map((item) => (
                <tr key={item.memberId}>
                  <td>{item.memberId}</td>
                  <td>{item.memberName}</td>
                  <td>IHH192108</td>
                  <td>{item.joiningDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TeamLevel;
