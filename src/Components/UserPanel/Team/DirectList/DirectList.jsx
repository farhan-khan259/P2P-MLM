import '../../Common/UserLayout.css';
import { directList } from '../../Common/userMockData';
import './DirectList.css';

function DirectList() {
  return (
    <div>
      <h1 className="user-page-title">My Direct</h1>
      <div className="user-panel">
        <h3>My Active Direct 1</h3>
        <h3>My In-Active Direct 1</h3>
        <h3>My Total Direct 2</h3>
        <div className="table-toolbar"><button className="user-btn-outline">Excel</button></div>
        <table className="user-table">
          <thead>
            <tr>
              <th>SR. NO.</th>
              <th>MEMBERID</th>
              <th>MEMBER NAME</th>
              <th>JOINING DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {directList.map((item, index) => (
              <tr key={item.memberId}>
                <td>{index + 1}</td>
                <td>{item.memberId}</td>
                <td>{item.memberName}</td>
                <td>{item.joiningDate}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DirectList;
