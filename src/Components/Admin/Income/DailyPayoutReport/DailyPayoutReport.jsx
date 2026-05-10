import './DailyPayoutReport.css';

const adminDailyPayoutData = [
  {
    sNo: 1,
    incomeDate: '06-02-2026',
    memberId: 'MM101011',
    memberName: 'ANAMIKA SAXENA',
    levelIncome: 1200.00,
    repurchaseIncome: 1000.00,
    grossIncome: 2200.00,
    tds: 110.00,
    adminCharge: 110.00,
    netPayable: 1980.00,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 2,
    incomeDate: '05-02-2026',
    memberId: 'MM101012',
    memberName: 'ANIKET CHOUGULE',
    levelIncome: 1000.00,
    repurchaseIncome: 1200.00,
    grossIncome: 2200.00,
    tds: 110.00,
    adminCharge: 110.00,
    netPayable: 1980.00,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 3,
    incomeDate: '04-02-2026',
    memberId: 'MM101013',
    memberName: 'RAJMATA SALUKE',
    levelIncome: 2000.00,
    repurchaseIncome: 2500.00,
    grossIncome: 4500.00,
    tds: 225.00,
    adminCharge: 225.00,
    netPayable: 4050.00,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 4,
    incomeDate: '03-02-2026',
    memberId: 'MM101014',
    memberName: 'SNEHAL MARNE',
    levelIncome: 2400.00,
    repurchaseIncome: 250.00,
    grossIncome: 2650.00,
    tds: 132.50,
    adminCharge: 132.50,
    netPayable: 2385.00,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 5,
    incomeDate: '02-02-2026',
    memberId: 'MM101015',
    memberName: 'SADDAM SHAIKH',
    levelIncome: 900.00,
    repurchaseIncome: 1500.00,
    grossIncome: 2400.00,
    tds: 120.00,
    adminCharge: 120.00,
    netPayable: 2160.00,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 6,
    incomeDate: '01-02-2026',
    memberId: 'MM101016',
    memberName: 'AMIT GADE',
    levelIncome: 400.00,
    repurchaseIncome: 1800.00,
    grossIncome: 2200.00,
    tds: 110.00,
    adminCharge: 110.00,
    netPayable: 1980.00,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 7,
    incomeDate: '30-01-2026',
    memberId: 'MM101017',
    memberName: 'PARAG GUJARATHI',
    levelIncome: 500.00,
    repurchaseIncome: 2000.00,
    grossIncome: 2500.00,
    tds: 125.00,
    adminCharge: 125.00,
    netPayable: 2250.00,
    status: 'Credited To E-wallet'
  }
];

function DailyPayoutReport() {
  const totalPayoutAmount = adminDailyPayoutData.reduce(
    (sum, row) => sum + row.netPayable,
    0
  );

  return (
    <div className="daily-payout-report-report-page">
      <h2 className="daily-payout-report-screen-title">Daily Payout Report</h2>

      <section className="panel daily-payout-report-panel">
        <div className="daily-payout-report-filter-row">
          <input className="text-input daily-payout-report-filter-input" placeholder="MEMBER ID" />
          <input className="text-input daily-payout-report-filter-input" placeholder="MEMBER NAME" />
          <input className="text-input daily-payout-report-filter-input" type="date" placeholder="START DATE" />
          <input className="text-input daily-payout-report-filter-input" type="date" placeholder="END DATE" />
          <select className="select-input daily-payout-report-filter-input daily-payout-report-size-select" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary daily-payout-report-search-btn" type="button">SERCH</button>
        </div>

        <div className="daily-payout-report-export-row">
          <button type="button" className="btn-outline daily-payout-report-export-btn">XLS</button>
          <button type="button" className="btn-outline daily-payout-report-export-btn">PDF</button>
        </div>

        <div className="table-wrap daily-payout-report-table-wrap">
          <table className="data-table daily-payout-report-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>INCOME DATE</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>LEVEL INCOME</th>
                <th>REPURCHASE INCOME</th>
                <th>GROSS INCOME</th>
                <th>TDS - 5%</th>
                <th>ADMIN CHARGE - 5%</th>
                <th>NET PAYABLE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {adminDailyPayoutData.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.levelIncome.toFixed(2)}</td>
                  <td>{row.repurchaseIncome.toFixed(2)}</td>
                  <td>{row.grossIncome.toFixed(2)}</td>
                  <td>{row.tds.toFixed(2)}</td>
                  <td>{row.adminCharge.toFixed(2)}</td>
                  <td>{row.netPayable.toFixed(2)}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
              <tr className="daily-payout-report-summary-row">
                <td colSpan="10" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL PAYOUT AMOUNT</td>
                <td>{totalPayoutAmount.toFixed(2)}</td>
               
               
              </tr>
            </tbody>
          </table>
        </div>

        <div className="daily-payout-report-table-footer">
          <div className="daily-payout-report-pagination">
            <button className="daily-payout-report-page-btn">«</button>
            <button className="daily-payout-report-page-btn">‹</button>
            <button className="daily-payout-report-page-btn daily-payout-report-active">1</button>
            <button className="daily-payout-report-page-btn">2</button>
            <button className="daily-payout-report-page-btn">3</button>
            <button className="daily-payout-report-page-btn">4</button>
            <button className="daily-payout-report-page-btn">5</button>
            <button className="daily-payout-report-page-btn">6</button>
            <button className="daily-payout-report-page-btn">7</button>
            <button className="daily-payout-report-page-btn">›</button>
            <button className="daily-payout-report-page-btn">»</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DailyPayoutReport;