import '../../Common/AdminLayout.css';
import './TransactionHistory.css';

const transactionRows = [
  {
    sNo: 1,
    dateTime: '01-02-2026 12:57:37PM',
    transactionId: '123456355538',
    memberId: 'MM101011',
    description: 'DAILY PAYOUT',
    credit: 1200.0,
    debit: '',
    balance: 1200.0
  },
  {
    sNo: 2,
    dateTime: '02-02-2026 12:57:37PM',
    transactionId: '124575545575',
    memberId: 'MM101012',
    description: 'DAILY PAYOUT',
    credit: 2500.0,
    debit: '',
    balance: 3700.0
  },
  {
    sNo: 3,
    dateTime: '03-02-2026 12:57:37PM',
    transactionId: '123456789555',
    memberId: 'MM101013',
    description: 'DAILY PAYOUT',
    credit: 3000.0,
    debit: '',
    balance: 6700.0
  },
  {
    sNo: 4,
    dateTime: '04-02-2026 12:57:37PM',
    transactionId: '123456789045',
    memberId: 'MM101014',
    description: 'DAILY PAYOUT',
    credit: 2400.0,
    debit: '',
    balance: 9100.0
  },
  {
    sNo: 5,
    dateTime: '04-02-2026 12:57:37PM',
    transactionId: '1234567890892',
    memberId: 'MM101015',
    description: 'PRODUCT PURCHASE',
    credit: '',
    debit: 400.0,
    balance: 8700.0
  },
  {
    sNo: 6,
    dateTime: '05-02-2026 12:57:37PM',
    transactionId: '123456789066',
    memberId: 'MM101016',
    description: 'DAILY PAYOUT',
    credit: 1250.0,
    debit: '',
    balance: 9950.0
  },
  {
    sNo: 7,
    dateTime: '06-02-2026 12:57:37PM',
    transactionId: '123456789456',
    memberId: 'MM101017',
    description: 'EPIN GENERATION',
    credit: '',
    debit: 2500.0,
    balance: 7450.0
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
    <div className="tds-report-page">
      <h2 className="section-title tds-screen-title">Transaction History</h2>

      <section className="panel tds-panel">
       
        <div className="tds-filter-row">
          <input className="text-input tds-filter-input" placeholder="MEMBER ID" aria-label="Member ID" />
          <input className="text-input tds-filter-input" placeholder="TRANSACTION ID" aria-label="Transaction ID" />
          <input className="text-input tds-filter-input" placeholder="START DATE" aria-label="Start Date" />
          <input className="text-input tds-filter-input" placeholder="END DATE" aria-label="End Date" />
          <select className="select-input tds-filter-input tds-size-select" aria-label="Rows per page" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary tds-search-btn" type="button">Search</button>
          
        </div>
         <div className="btn-row tds-export-row">
          <button type="button" className="btn-outline tds-export-btn">XLS</button>
          <button type="button" className="btn-outline tds-export-btn">PDF</button>
        </div>


        <div className="table-wrap tds-table-wrap">
          <table className="data-table tds-table">
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
              <tr className="summary-row">
                <td colSpan="5" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL</td>
                <td>{totalCredit.toFixed(2)}</td>
                <td>{totalDebit.toFixed(2)}</td>
                <td>{totalBalance.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="pagination">
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
      </section>
    </div>
  );
}

export default TransactionHistory;
