import '../../Common/UserLayout.css';
import { paymentRows } from '../../Common/userMockData';
import './SelfPaymentHistory.css';

function SelfPaymentHistory() {
  return (
    <div>
      <h1 className="user-page-title">Payment History</h1>
      <div className="user-panel">
        <div className="table-toolbar"><button className="user-btn-outline">Excel</button></div>
        <table className="user-table">
          <thead>
            <tr>
              <th>SR. NO.</th>
              <th>FROM MEMBER ID</th>
              <th>FROM MEMBER NAME</th>
              <th>TO MEMBER ID</th>
              <th>TO MEMBER NAME</th>
              <th>AMOUNT</th>
              <th>REQUEST DATE</th>
              <th>APPROVE DATE</th>
              <th>STATUS</th>
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
                <td>{row.requestDate}</td>
                <td>{row.approveDate}</td>
                <td>{row.status}</td>
                <td>{row.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SelfPaymentHistory;
