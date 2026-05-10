import './DatewiseIncome.css';

const adminDatewiseIncomeData = [
  {
    sNo: 1,
    incomeDate: '01-02-2026',
    memberId: 'MM101010',
    unlockLevel: 1,
    totalIds: 3,
    levelIncome: 60.00,
    totalBvPoint: 1000,
    repurchaseIncome: 1000.00,
    dailyIncome: 1060.00
  },
  {
    sNo: 2,
    incomeDate: '02-02-2026',
    memberId: 'MM101011',
    unlockLevel: 9,
    totalIds: 5,
    levelIncome: 100.00,
    totalBvPoint: 1200,
    repurchaseIncome: 1200.00,
    dailyIncome: 1300.00
  },
  {
    sNo: 3,
    incomeDate: '03-02-2026',
    memberId: 'MM101012',
    unlockLevel: 2,
    totalIds: 10,
    levelIncome: 200.00,
    totalBvPoint: 2500,
    repurchaseIncome: 2500.00,
    dailyIncome: 2700.00
  },
  {
    sNo: 4,
    incomeDate: '04-02-2026',
    memberId: 'MM101013',
    unlockLevel: 1,
    totalIds: 12,
    levelIncome: 240.00,
    totalBvPoint: 250,
    repurchaseIncome: 250.00,
    dailyIncome: 490.00
  },
  {
    sNo: 5,
    incomeDate: '05-02-2026',
    memberId: 'MM101014',
    unlockLevel: 1,
    totalIds: 15,
    levelIncome: 300.00,
    totalBvPoint: 1500,
    repurchaseIncome: 1500.00,
    dailyIncome: 1800.00
  },
  {
    sNo: 6,
    incomeDate: '06-02-2026',
    memberId: 'MM101015',
    unlockLevel: 2,
    totalIds: 20,
    levelIncome: 400.00,
    totalBvPoint: 1800,
    repurchaseIncome: 1800.00,
    dailyIncome: 2200.00
  },
  {
    sNo: 7,
    incomeDate: '04-01-2026',
    memberId: 'MM101016',
    unlockLevel: 1,
    totalIds: 25,
    levelIncome: 500.00,
    totalBvPoint: 2000,
    repurchaseIncome: 2000.00,
    dailyIncome: 2500.00
  }
];

function DatewiseIncome() {
  const totalAmount = adminDatewiseIncomeData.reduce(
    (sum, row) => sum + row.dailyIncome,
    0
  );

  return (
    <div className="datewise-income-report-page">
      <h2 className="datewise-income-screen-title">Datewise Income</h2>

      <section className="panel datewise-income-panel">
        <div className="datewise-income-filter-row">
          <input className="text-input datewise-income-filter-input" placeholder="TO MEMBER ID" />
          <input className="text-input datewise-income-filter-input" placeholder="UNLOCK LEVEL" />
          <input className="text-input datewise-income-filter-input" placeholder="TOTAL ID'S" />
          <input className="text-input datewise-income-filter-input" type="date" placeholder="START DATE" />
          <input className="text-input datewise-income-filter-input" type="date" placeholder="END DATE" />
          <select className="select-input datewise-income-filter-input datewise-income-size-select" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary datewise-income-search-btn" type="button">SERCH</button>
        </div>

        <div className="datewise-income-export-row">
          <button type="button" className="btn-outline datewise-income-export-btn">XLS</button>
          <button type="button" className="btn-outline datewise-income-export-btn">PDF</button>
        </div>

        <div className="table-wrap datewise-income-table-wrap">
          <table className="data-table datewise-income-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>INCOME DATE</th>
                <th>MEMBER ID</th>
                <th>UNLOCK LEVEL</th>
                <th>TOTAL ID'S</th>
                <th>LEVEL INCOME</th>
                <th>TOTAL B.V. POINT</th>
                <th>REPURCHASE INCOME</th>
                <th>DAILY INCOME</th>
              </tr>
            </thead>
            <tbody>
              {adminDatewiseIncomeData.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.unlockLevel}</td>
                  <td>{row.totalIds}</td>
                  <td>{row.levelIncome.toFixed(2)}</td>
                  <td>{row.totalBvPoint}</td>
                  <td>{row.repurchaseIncome.toFixed(2)}</td>
                  <td>{row.dailyIncome.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="datewise-income-summary-row">
                <td colSpan="8" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL AMOUNT</td>
                <td>{totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="datewise-income-table-footer">
          <div className="datewise-income-pagination">
            <button className="datewise-income-page-btn">«</button>
            <button className="datewise-income-page-btn">‹</button>
            <button className="datewise-income-page-btn datewise-income-active">1</button>
            <button className="datewise-income-page-btn">2</button>
            <button className="datewise-income-page-btn">3</button>
            <button className="datewise-income-page-btn">4</button>
            <button className="datewise-income-page-btn">5</button>
            <button className="datewise-income-page-btn">6</button>
            <button className="datewise-income-page-btn">7</button>
            <button className="datewise-income-page-btn">›</button>
            <button className="datewise-income-page-btn">»</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DatewiseIncome;