import '../../Common/UserLayout.css';
import { paymentRows } from '../../Common/userMockData';
import './LevelIncome.css';

function LevelIncome() {
  return (
    <div>
      <h1 className="user-page-title">Level Income</h1>
      <div className="user-panel">
        <h3>Total Level Income : 15250</h3>
        <div className="level-filters">
          <input placeholder="DD-MM-YYYY" />
          <input placeholder="DD-MM-YYYY" />
          <button className="user-btn-blue">Show Details</button>
        </div>
        <div className="table-toolbar"><button className="user-btn-outline">Excel</button></div>
        <table className="user-table">
          <thead>
            <tr>
              <th>SR. NO.</th>
              <th>MEMBER ID</th>
              <th>MEMBER NAME</th>
              <th>PAY ID</th>
              <th>PAY NAME</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>REQUEST DATE</th>
              <th>APPROVE DATE</th>
              <th>LEVEL</th>
            </tr>
          </thead>
          <tbody>
            {paymentRows.map((row, index) => (
              <tr key={`${row.fromMemberId}-${index}`}>
                <td>{index + 1}</td>
                <td>{row.fromMemberId}</td>
                <td>{row.fromName}</td>
                <td>{row.toMemberId}</td>
                <td>{row.toName}</td>
                <td>{row.amount}</td>
                <td>{row.status}</td>
                <td>{row.requestDate}</td>
                <td>{row.approveDate}</td>
                <td>{row.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LevelIncome;
