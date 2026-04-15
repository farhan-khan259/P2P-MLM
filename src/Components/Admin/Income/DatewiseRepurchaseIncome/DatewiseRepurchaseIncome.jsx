import './DatewiseRepurchaseIncome.css';

const datewiseRepurchaseIncomeRows = [
  {
    sNo: 1,
    incomeDate: '01-02-2026',
    memberId: 'MM101010',
    bvPoin: 1000,
    repurchaseIncome: 1000.0,
    tds: 50.0,
    adminCharge: 0.0,
    netPayout: 950.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 2,
    incomeDate: '02-02-2026',
    memberId: 'MM101011',
    bvPoin: 1200,
    repurchaseIncome: 1200.0,
    tds: 60.0,
    adminCharge: 0.0,
    netPayout: 1140.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 3,
    incomeDate: '03-02-2026',
    memberId: 'MM101012',
    bvPoin: 2500,
    repurchaseIncome: 2500.0,
    tds: 125.0,
    adminCharge: 0.0,
    netPayout: 2375.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 4,
    incomeDate: '04-02-2026',
    memberId: 'MM101013',
    bvPoin: 250,
    repurchaseIncome: 250.0,
    tds: 12.5,
    adminCharge: 0.0,
    netPayout: 237.5,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 5,
    incomeDate: '05-02-2026',
    memberId: 'MM101014',
    bvPoin: 1500,
    repurchaseIncome: 1500.0,
    tds: 75.0,
    adminCharge: 0.0,
    netPayout: 1425.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 6,
    incomeDate: '06-02-2026',
    memberId: 'MM101015',
    bvPoin: 1800,
    repurchaseIncome: 1800.0,
    tds: 90.0,
    adminCharge: 0.0,
    netPayout: 1710.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 7,
    incomeDate: '04-01-2026',
    memberId: 'MM101016',
    bvPoin: 2000,
    repurchaseIncome: 2000.0,
    tds: 100.0,
    adminCharge: 0.0,
    netPayout: 1900.0,
    status: 'Credited To E-wallet'
  }
];

function DatewiseRepurchaseIncome() {
  const totalAmount = datewiseRepurchaseIncomeRows.reduce((sum, row) => sum + row.repurchaseIncome, 0);

  return (
    <div className="tds-report-page">
      <h2 className="section-title tds-screen-title">Datewise Repurchase Income</h2>
      <section className="panel tds-panel">
        <div className="btn-row tds-export-row">
          <button type="button" className="btn-outline tds-export-btn">XLS</button>
          <button type="button" className="btn-outline tds-export-btn">PDF</button>
        </div>

        <div className="tds-filter-row">
          <input className="text-input tds-filter-input" type="date" placeholder="START DATE" />
          <input className="text-input tds-filter-input" type="date" placeholder="END DATE" />
          <select className="select-input tds-filter-input tds-size-select" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary tds-search-btn" type="button">Search</button>
        </div>

        <div className="table-wrap tds-table-wrap">
          <table className="data-table tds-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>INCOME DATE</th>
                <th>TO MEMBER ID</th>
                <th>TOTAL BV POIN</th>
                <th>REPURCHASE INCOME</th>
                <th>TDS - 5 %</th>
                <th>ADMIN CHARGE - 0 %</th>
                <th>NET PAYOUT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {datewiseRepurchaseIncomeRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.bvPoin}</td>
                  <td>{row.repurchaseIncome.toFixed(2)}</td>
                  <td>{row.tds.toFixed(2)}</td>
                  <td>{row.adminCharge.toFixed(2)}</td>
                  <td>{row.netPayout.toFixed(2)}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
              <tr className="summary-row">
                <td colSpan="7" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL AMOUNT</td>
                <td>{totalAmount.toFixed(2)}</td>
                <td></td>
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

export default DatewiseRepurchaseIncome;
