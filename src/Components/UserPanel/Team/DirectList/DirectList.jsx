import '../../Common/UserLayout.css';
import { directList } from '../../Common/userMockData';
import './DirectList.css';

function DirectList() {
  return (
    <div>
      <h1 className="user-page-title">My Direct</h1>
      <div className="user-panel">
        <div className="table-toolbar"><button className="user-btn-outline">Excel</button></div>
        <table className="user-table">
          <thead>
            <tr>
              <th>SR. NO.</th>
              <th>MEMBER ID</th>
              <th>MEMBER NAME</th>
              <th>CITY</th>
              <th>DIRECTS</th>
              <th>TOTAL TEAM</th>
              <th>TOTAL INCOME</th>
            </tr>
          </thead>
          <tbody>
            {directList.map((item, index) => (
              <tr key={item.memberId}>
                <td>{index + 1}</td>
                <td>{item.memberId}</td>
                <td>{item.memberName}</td>
                <td>{item.city || '-'}</td>
                <td>{item.directs ?? 0}</td>
                <td>{item.totalTeam ?? 0}</td>
                <td>{item.totalIncome ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DirectList;
