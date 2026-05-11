import './TransactionHistory.css';

const transactionHistoryData = [
  {
    sNo: 1,
    dateTime: '01-02-2026 12:57:37PM',
    transactionId: '123456355538',
    memberId: 'MM101011',
    description: 'DAILY PAYOUT',
    credit: 1200.00,
    debit: 0.00,
    balance: 1200.00
  },
  {
    sNo: 2,
    dateTime: '02-02-2026 12:57:37PM',
    transactionId: '124575545575',
    memberId: 'MM101012',
    description: 'DAILY PAYOUT',
    credit: 2500.00,
    debit: 0.00,
    balance: 3700.00
  },
  {
    sNo: 3,
    dateTime: '03-02-2026 12:57:37PM',
    transactionId: '123456789555',
    memberId: 'MM101013',
    description: 'DAILY PAYOUT',
    credit: 3000.00,
    debit: 0.00,
    balance: 6700.00
  },
  {
    sNo: 4,
    dateTime: '04-02-2026 12:57:37PM',
    transactionId: '123456789045',
    memberId: 'MM101014',
    description: 'DAILY PAYOUT',
    credit: 2400.00,
    debit: 0.00,
    balance: 9100.00
  },
  {
    sNo: 5,
    dateTime: '04-02-2026 12:57:37PM',
    transactionId: '1234567890892',
    memberId: 'MM101015',
    description: 'PRODUCT PURCHASE',
    credit: 0.00,
    debit: 400.00,
    balance: 8700.00
  },
  {
    sNo: 6,
    dateTime: '05-02-2026 12:57:37PM',
    transactionId: '123456789066',
    memberId: 'MM101016',
    description: 'DAILY PAYOUT',
    credit: 1250.00,
    debit: 0.00,
    balance: 9950.00
  },
  {
    sNo: 7,
    dateTime: '06-02-2026 12:57:37PM',
    transactionId: '123456789456',
    memberId: 'MM101017',
    description: 'EPIN GENERATION',
    credit: 0.00,
    debit: 2500.00,
    balance: 7450.00
  }
];

function TransactionHistory() {
  const totalCredit = transactionHistoryData.reduce(
    (sum, row) => sum + row.credit,
    0
  );

  const totalDebit = transactionHistoryData.reduce(
    (sum, row) => sum + row.debit,
    0
  );

  const totalBalance = transactionHistoryData[transactionHistoryData.length - 1].balance;

  return (
    <div className="admintransactionhistory-report-page">
      <h2 className="admintransactionhistory-screen-title">Transaction History</h2>

      <section className="panel admintransactionhistory-panel">
        <div className="admintransactionhistory-filter-row">
          <input className="text-input admintransactionhistory-filter-input" placeholder="MEMBER ID" />
          <input className="text-input admintransactionhistory-filter-input" placeholder="TRANSACTION ID" />
          <input className="text-input admintransactionhistory-filter-input" type="date" placeholder="START DATE" />
          <input className="text-input admintransactionhistory-filter-input" type="date" placeholder="END DATE" />
          <select className="select-input admintransactionhistory-filter-input admintransactionhistory-size-select" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary admintransactionhistory-search-btn" type="button">SEARCH</button>
        </div>

        <div className="admintransactionhistory-export-row">
          <button type="button" className="btn-outline admintransactionhistory-export-btn">XLS</button>
          <button type="button" className="btn-outline admintransactionhistory-export-btn">PDF</button>
        </div>

        <div className="table-wrap admintransactionhistory-table-wrap">
          <table className="data-table admintransactionhistory-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>TRANSACTION DATE & TIME</th>
                <th>TRANSACTION ID</th>
                <th>MEMBER ID</th>
                <th>DESCRIPTIONS</th>
                <th>CREDIT</th>
                <th>DEBIT</th>
                <th>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {transactionHistoryData.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.dateTime}</td>
                  <td>{row.transactionId}</td>
                  <td>{row.memberId}</td>
                  <td>{row.description}</td>
                  <td>{row.credit.toFixed(2)}</td>
                  <td>{row.debit.toFixed(2)}</td>
                  <td>{row.balance.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="admintransactionhistory-summary-row">
                <td colSpan="5" style={{ textAlign: 'right', fontWeight: 700 }}>
                  TOTAL
                </td>
                <td>{totalCredit.toFixed(2)}</td>
                <td>{totalDebit.toFixed(2)}</td>
                <td>{totalBalance.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="admintransactionhistory-table-footer">
          <div className="admintransactionhistory-pagination">
            <button className="admintransactionhistory-page-btn">«</button>
            <button className="admintransactionhistory-page-btn">‹</button>
            <button className="admintransactionhistory-page-btn admintransactionhistory-active">1</button>
            <button className="admintransactionhistory-page-btn">2</button>
            <button className="admintransactionhistory-page-btn">3</button>
            <button className="admintransactionhistory-page-btn">4</button>
            <button className="admintransactionhistory-page-btn">5</button>
            <button className="admintransactionhistory-page-btn">6</button>
            <button className="admintransactionhistory-page-btn">7</button>
            <button className="admintransactionhistory-page-btn">›</button>
            <button className="admintransactionhistory-page-btn">»</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TransactionHistory;