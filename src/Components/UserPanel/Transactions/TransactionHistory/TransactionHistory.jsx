import '../../Common/UserLayout.css';
import './TransactionHistory.css';

const transactionRows = [
  {
    sNo: 1,
    dateTime: '01-02-2026 12:50:17PM',
    transactionId: '123456355538',
    memberId: 'MM101010',
    description: 'DAILY PAYOUT',
    credit: 200.0,
    debit: '',
    balance: 200.0
  },
  {
    sNo: 2,
    dateTime: '02-02-2026 12:37:27PM',
    transactionId: '124575545575',
    memberId: 'MM101010',
    description: 'DAILY PAYOUT',
    credit: 500.0,
    debit: '',
    balance: 700.0
  },
  {
    sNo: 3,
    dateTime: '03-02-2026 11:57:37PM',
    transactionId: '123456789555',
    memberId: 'MM101010',
    description: 'DAILY PAYOUT',
    credit: 300.0,
    debit: '',
    balance: 1000.0
  },
  {
    sNo: 4,
    dateTime: '04-02-2026 12:47:31PM',
    transactionId: '123456789045',
    memberId: 'MM101010',
    description: 'DAILY PAYOUT',
    credit: 400.0,
    debit: '',
    balance: 1400.0
  },
  {
    sNo: 5,
    dateTime: '04-02-2026 12:58:33PM',
    transactionId: '1234567890892',
    memberId: 'MM101010',
    description: 'PRODUCT PURCHASE',
    credit: '',
    debit: 400.0,
    balance: 1000.0
  },
  {
    sNo: 6,
    dateTime: '05-02-2026 12:57:39PM',
    transactionId: '123456789066',
    memberId: 'MM101010',
    description: 'E WALLET TOPUP',
    credit: 250.0,
    debit: '',
    balance: 1250.0
  },
  {
    sNo: 7,
    dateTime: '06-02-2026 12:57:37PM',
    transactionId: '123456789456',
    memberId: 'MM101010',
    description: 'EPIN GENERATION',
    credit: '',
    debit: 250.0,
    balance: 1000.0
  }
];

function formatAmount(value) {
  return typeof value === 'number' ? value.toFixed(2) : '';
}

function TransactionHistory() {
  const totalCredit = transactionRows.reduce((sum, row) => sum + (row.credit || 0), 0);
  const totalDebit = transactionRows.reduce((sum, row) => sum + (row.debit || 0), 0);
  const totalBalance = transactionRows[transactionRows.length - 1].balance;

  return (
    <div>
      <h1 className="user-page-title">Transaction History</h1>
      <div className="user-panel">
        <h3>Total Balance: {totalBalance.toFixed(2)}</h3>

        <div className="report-filters">
          <input type="text" placeholder="TRANSACTION ID" aria-label="Transaction ID" />
          <input type="text" placeholder="START DATE" aria-label="Start Date" />
          <input type="text" placeholder="END DATE" aria-label="End Date" />
          <select aria-label="Rows per page" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="user-btn-blue" type="button">SEARCH</button>
        </div>

        <div className="table-toolbar">
          <button className="user-btn-outline" type="button">Excel</button>
          <button className="user-btn-outline" type="button">PDF</button>
        </div>

        <div className="table-wrap">
          <table className="user-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>TRANSACTION DATE & TIME</th>
                <th>TRANSACTION ID</th>
                <th>MEMBER ID</th>
                <th>DISCRIPTIONS</th>
                <th>CREDIT</th>
                <th>DEBIT</th>
                <th>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {transactionRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.dateTime}</td>
                  <td>{row.transactionId}</td>
                  <td>{row.memberId}</td>
                  <td>{row.description}</td>
                  <td>{formatAmount(row.credit)}</td>
                  <td>{formatAmount(row.debit)}</td>
                  <td>{formatAmount(row.balance)}</td>
                </tr>
              ))}
              <tr className="report-total-row">
                <td colSpan="5" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL</td>
                <td>{totalCredit.toFixed(2)}</td>
                <td>{totalDebit.toFixed(2)}</td>
                <td>{totalBalance.toFixed(2)}</td>
              </tr>
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
          <button className="page-btn">6</button>
          <button className="page-btn">7</button>
          <button className="page-btn">›</button>
          <button className="page-btn">»</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
