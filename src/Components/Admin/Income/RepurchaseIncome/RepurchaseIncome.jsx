import './RepurchaseIncome.css';

const repurchaseIncomeRows = [
  {
    sNo: 1,
    incomeDate: '02-03-2024 12:57:37pm',
    memberId: 'MM101010',
    memberName: 'ANAMIKA SAXENA',
    levelNo: 1,
    levelId: 'MM101011',
    fromMemberName: 'SONALI SHIRKE',
    bvPoin: 10,
    repurchaseIncome: 10.0
  },
  {
    sNo: 2,
    incomeDate: '25-02-2024 12:57:37pm',
    memberId: 'MM101012',
    memberName: 'ANIKET CHOUGULE',
    levelNo: 9,
    levelId: 'MM101012',
    fromMemberName: 'AMBIKA SALUNKE',
    bvPoin: 20,
    repurchaseIncome: 20.0
  },
  {
    sNo: 3,
    incomeDate: '25-02-2024 12:57:37pm',
    memberId: 'MM101013',
    memberName: 'RAJMATA SALUKE',
    levelNo: 2,
    levelId: 'MM101013',
    fromMemberName: 'RAJKIRAN SALUKE',
    bvPoin: 200,
    repurchaseIncome: 200.0
  },
  {
    sNo: 4,
    incomeDate: '16-02-2024 12:57:37pm',
    memberId: 'MM101014',
    memberName: 'SNEHAL MARNE',
    levelNo: 1,
    levelId: 'MM101014',
    fromMemberName: 'AMIT SHARMA',
    bvPoin: 20,
    repurchaseIncome: 20.0
  },
  {
    sNo: 5,
    incomeDate: '10-02-2024 12:57:37pm',
    memberId: 'MM101015',
    memberName: 'SADDAM SHAIKH',
    levelNo: 1,
    levelId: 'MM101015',
    fromMemberName: 'SADDAM SHAIKH',
    bvPoin: 500,
    repurchaseIncome: 500.0
  },
  {
    sNo: 6,
    incomeDate: '10-02-2024 12:57:37pm',
    memberId: 'MM101016',
    memberName: 'AMIT GADE',
    levelNo: 2,
    levelId: 'MM101016',
    fromMemberName: 'THOMAS ANTHONY',
    bvPoin: 800,
    repurchaseIncome: 800.0
  },
  {
    sNo: 7,
    incomeDate: '05-02-2024 12:57:37pm',
    memberId: 'MM101017',
    memberName: 'PARAG GUJARATHI',
    levelNo: 1,
    levelId: 'MM101017',
    fromMemberName: 'RAZMAN HUSSAIN',
    bvPoin: 2000,
    repurchaseIncome: 2000.0
  }
];

function RepurchaseIncome() {
  const totalRepurchase = repurchaseIncomeRows.reduce((sum, row) => sum + row.repurchaseIncome, 0);

  return (
    <div className="repurchase-income-report-page">
      <h2 className="repurchase-income-screen-title">Repurchase Income</h2>

      <section className="panel repurchase-income-panel">
        <div className="repurchase-income-filter-row">
          <input className="text-input repurchase-income-filter-input" placeholder="LEVEL NO" />
          <input className="text-input repurchase-income-filter-input" placeholder="LEVEL ID" />
          <input className="text-input repurchase-income-filter-input" placeholder="FROM MEMBER NAME" />
          <input className="text-input repurchase-income-filter-input" placeholder="START DATE" />
          <input className="text-input repurchase-income-filter-input" placeholder="END DATE" />
          <select className="select-input repurchase-income-filter-input repurchase-income-size-select" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary repurchase-income-search-btn" type="button">Search</button>
        </div>

        <div className="repurchase-income-export-row">
          <button type="button" className="btn-outline repurchase-income-export-btn">XLS</button>
          <button type="button" className="btn-outline repurchase-income-export-btn">PDF</button>
        </div>

        <div className="table-wrap repurchase-income-table-wrap">
          <table className="data-table repurchase-income-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>INCOME DATE & TIME</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>LEVEL NO</th>
                <th>LEVEL ID</th>
                <th>FROM MEMBER NAME</th>
                <th>BV POIN</th>
                <th>REPURCHASE INCOME</th>
              </tr>
            </thead>
            <tbody>
              {repurchaseIncomeRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.levelNo}</td>
                  <td>{row.levelId}</td>
                  <td>{row.fromMemberName}</td>
                  <td>{row.bvPoin}</td>
                  <td>{row.repurchaseIncome.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="repurchase-income-summary-row">
                <td colSpan="8" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL AMOUNT</td>
                <td>{totalRepurchase.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="repurchase-income-table-footer">
          <div className="repurchase-income-pagination">
            <button className="repurchase-income-page-btn">«</button>
            <button className="repurchase-income-page-btn">‹</button>
            <button className="repurchase-income-page-btn repurchase-income-active">1</button>
            <button className="repurchase-income-page-btn">2</button>
            <button className="repurchase-income-page-btn">3</button>
            <button className="repurchase-income-page-btn">4</button>
            <button className="repurchase-income-page-btn">5</button>
            <button className="repurchase-income-page-btn">6</button>
            <button className="repurchase-income-page-btn">7</button>
            <button className="repurchase-income-page-btn">›</button>
            <button className="repurchase-income-page-btn">»</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RepurchaseIncome;