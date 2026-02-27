import '../../Common/UserLayout.css';
import { teamList } from '../../Common/userMockData';
import './MyTeam.css';

function MyTeam() {
  return (
    <div>
      <h1 className="user-page-title">My Team</h1>
      <div className="user-panel">
        <div className="table-toolbar"><button className="user-btn-outline">Excel</button></div>
        <table className="user-table">
          <thead>
            <tr>
              <th>SR. NO.</th>
              <th>MEMBERID</th>
              <th>NAME</th>
              <th>TOTAL DIRECT</th>
              <th>SPONSOR ID</th>
              <th>JOIN DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {teamList.map((item, index) => (
              <tr key={item.memberId}>
                <td>{index + 1}</td>
                <td>{item.memberId}</td>
                <td>{item.name}</td>
                <td>Active :1 InActive :0 Total Direct :1</td>
                <td>{item.sponsorId}</td>
                <td>{item.joinDate}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyTeam;
