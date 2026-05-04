import { useNavigate } from 'react-router-dom';
import '../../Common/UserLayout.css';
import './WithdrawalHistory.css';

const withdrawalData = [
  {
    sNo: 1,
    requestDate: '22-04-2026 07:06 PM',
    requestId: '987HSU29FHJ9',
    amount: 1000.00,
    charges: 0.00,
    netAmount: 1000.00,
    paymentMethod: 'UPI ID',
    status: 'Pending'
  },
  {
    sNo: 2,
    requestDate: '20-04-2026 08:06 PM',
    requestId: '457HSU29FJK3',
    amount: 5000.00,
    charges: 0.00,
    netAmount: 5000.00,
    paymentMethod: 'Bank Transfer',
    status: 'Approve'
  },
  {
    sNo: 3,
    requestDate: '02-04-2026 07:06 PM',
    requestId: '127GHU29FJK1',
    amount: 2000.00,
    charges: 0.00,
    netAmount: 2000.00,
    paymentMethod: 'Bank Transfer',
    status: 'Succeed'
  },
  {
    sNo: 4,
    requestDate: '01-04-2026 07:06 PM',
    requestId: '787GHU29FJK1',
    amount: 3000.00,
    charges: 0.00,
    netAmount: 3000.00,
    paymentMethod: 'Bank Transfer',
    status: 'Reject'
  }
];

function getStatusIcon(status) {
  switch (status) {
    case 'Pending':
      return { className: 'withdrawal-detail-btn withdrawal-detail-btn--pending', label: 'Pending', icon: '▭' };
    case 'Approve':
      return { className: 'withdrawal-detail-btn withdrawal-detail-btn--approve', label: 'Approve', icon: '◌' };
    case 'Succeed':
      return { className: 'withdrawal-detail-btn withdrawal-detail-btn--succeed', label: 'Succeed', icon: '✓' };
    case 'Reject':
      return { className: 'withdrawal-detail-btn withdrawal-detail-btn--reject', label: 'Reject', icon: '✕' };
    default:
      return { className: 'withdrawal-detail-btn', label: status, icon: '' };
  }
}

function WithdrawalHistory() {
  const navigate = useNavigate();
  
  const handleWithdrawalNow = () => {
    navigate('/user/payment/withdraw');
  };

  return (
    <div>
      <h1 className="user-page-title">Withdrawal History</h1>
      <div className="user-panel">
        <div className="report-filters">
          <input type="text" placeholder="REQUEST ID" aria-label="Request ID" />
          <input type="text" placeholder="AMOUNT" aria-label="Amount" />
          <select aria-label="Status">
            <option value="">STATUS</option>
            <option value="Pending">Pending</option>
            <option value="Approve">Approve</option>
            <option value="Succeed">Succeed</option>
            <option value="Reject">Reject</option>
          </select>
          <input type="text" placeholder="START DATE" aria-label="Start Date" />
          <input type="text" placeholder="END DATE" aria-label="End Date" />
          <select aria-label="Rows per page">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="user-btn-blue" type="button">SEARCH</button>
        </div>

        <div className="table-toolbar">
          <button className="user-btn-red" type="button" onClick={handleWithdrawalNow}>Withdrawal Now</button>
        </div>

        <div className="table-wrap">
          <table className="user-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>REQUEST DATE</th>
                <th>REQUEST ID</th>
                <th>AMOUNT</th>
                <th>CHARGES</th>
                <th>NET AMOUNT</th>
                <th>PAYMENT METHOD</th>
                <th>STATUS</th>
                <th>DETAILS</th>
              </tr>
            </thead>
            <tbody>
              {withdrawalData.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.requestDate}</td>
                  <td>{row.requestId}</td>
                  <td>{row.amount.toFixed(2)}</td>
                  <td>{row.charges.toFixed(2)}</td>
                  <td>{row.netAmount.toFixed(2)}</td>
                  <td>{row.paymentMethod}</td>
                  <td>{row.status}</td>
                  <td className="details-cell">
                    <button
                      type="button"
                      className={getStatusIcon(row.status).className}
                      aria-label={getStatusIcon(row.status).label}
                    >
                      {getStatusIcon(row.status).icon}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-row">
          <button className="page-btn">«</button>
          <button className="page-btn">‹</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <button className="page-btn">5</button>
          <button className="page-btn">›</button>
          <button className="page-btn">»</button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawalHistory;
