import './DatewiseLevelIncome.css';

const datewiseLevelIncomeRows = [
  {
    sNo: 1,
    incomeDate: '02-03-2024 12:57:37pm',
    memberId: 'MM101011',
    memberName: 'ANAMIKA SAXENA',
    unlockLevel: 1,
    levelIncome: 820.0,
    tds: 50.0,
    adminCharge: 0.0,
    netPayout: 820.0
  },
  {
    sNo: 2,
    incomeDate: '25-02-2024 12:57:37pm',
    memberId: 'MM101012',
    memberName: 'ANIKET CHOUGULE',
    unlockLevel: 9,
    levelIncome: 1020.0,
    tds: 60.0,
    adminCharge: 0.0,
    netPayout: 1020.0
  },
  {
    sNo: 3,
    incomeDate: '25-02-2024 12:57:37pm',
    memberId: 'MM101013',
    memberName: 'RAJMATA SALUKE',
    unlockLevel: 2,
    levelIncome: 1000.0,
    tds: 125.0,
    adminCharge: 0.0,
    netPayout: 1000.0
  },
  {
    sNo: 4,
    incomeDate: '16-02-2024 12:57:37pm',
    memberId: 'MM101014',
    memberName: 'SNEHAL MARNE',
    unlockLevel: 1,
    levelIncome: 2000.0,
    tds: 12.5,
    adminCharge: 0.0,
    netPayout: 2000.0
  },
  {
    sNo: 5,
    incomeDate: '10-02-2024 12:57:37pm',
    memberId: 'MM101015',
    memberName: 'SADDAM SHAIKH',
    unlockLevel: 1,
    levelIncome: 3020.0,
    tds: 75.0,
    adminCharge: 0.0,
    netPayout: 3020.0
  },
  {
    sNo: 6,
    incomeDate: '07-02-2024 12:57:37pm',
    memberId: 'MM101016',
    memberName: 'AMIT GADE',
    unlockLevel: 2,
    levelIncome: 1500.0,
    tds: 90.0,
    adminCharge: 0.0,
    netPayout: 1500.0
  },
  {
    sNo: 7,
    incomeDate: '05-02-2024 12:57:37pm',
    memberId: 'MM101017',
    memberName: 'PARAG GUJARATHI',
    unlockLevel: 1,
    levelIncome: 1400.0,
    tds: 100.0,
    adminCharge: 0.0,
    netPayout: 1400.0
  }
];

function DatewiseLevelIncome() {
  const totalTds = datewiseLevelIncomeRows.reduce((sum, row) => sum + row.tds, 0);
  const totalNet = datewiseLevelIncomeRows.reduce((sum, row) => sum + row.netPayout, 0);

  return (
    <div className="tds-report-page">
      <h2 className="section-title tds-screen-title">Datewise Level Income</h2>
      <section className="panel tds-panel">
        <div className="btn-row tds-export-row">
          <button type="button" className="btn-outline tds-export-btn">XLS</button>
          <button type="button" className="btn-outline tds-export-btn">PDF</button>
        </div>

        <div className="tds-filter-row">
          <input className="text-input tds-filter-input" placeholder="MEMBER ID" />
          <input className="text-input tds-filter-input" placeholder="MEMBER NAME" />
          <input className="text-input tds-filter-input" placeholder="UNLOCK LEVEL NO" />
          <input className="text-input tds-filter-input" placeholder="START DATE" />
          <input className="text-input tds-filter-input" placeholder="END DATE" />
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
                <th>INCOME DATE & TIME</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>UNLOCK LEVEL</th>
                <th>LEVEL INCOME</th>
                <th>TDS - 5 %</th>
                <th>ADMIN - 0 %</th>
                <th>NET PAYOUT</th>
              </tr>
            </thead>
            <tbody>
              {datewiseLevelIncomeRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.unlockLevel}</td>
                  <td>{row.levelIncome.toFixed(2)}</td>
                  <td>{row.tds.toFixed(2)}</td>
                  <td>{row.adminCharge.toFixed(2)}</td>
                  <td>{row.netPayout.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="summary-row">
                <td colSpan="6" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL TDS FROM LEVEL INCOME</td>
                <td>{totalTds.toFixed(2)}</td>
                <td style={{ textAlign: 'right', fontWeight: 700 }}>TO E-WALLET</td>
                <td>{totalNet.toFixed(2)}</td>
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

export default DatewiseLevelIncome;
