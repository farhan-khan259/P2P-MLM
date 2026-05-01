import './LevelIncomeReports.css';

const levelIncomeReportsData = [
  {
    sNo: 1,
    incomeDateTime: '02-03-2024 12:57:37pm',
    memberId: 'MM101011',
    memberName: 'ANAMIKA SAXENA',
    unlockLevel: 1,
    levelNo: 1,
    levelId: 'MM164222',
    fromMemberName: 'SONALI SHIRKE',
    amount: 20.00
  },
  {
    sNo: 2,
    incomeDateTime: '25-02-2024 12:57:37pm',
    memberId: 'MM101012',
    memberName: 'ANIKET CHOUGULE',
    unlockLevel: 9,
    levelNo: 0,
    levelId: 'MM101015',
    fromMemberName: 'AMBIKA SALUNKE',
    amount: 20.00
  },
  {
    sNo: 3,
    incomeDateTime: '25-02-2024 12:57:37pm',
    memberId: 'MM101013',
    memberName: 'RAJMATA SALUKE',
    unlockLevel: 2,
    levelNo: 2,
    levelId: 'MM101018',
    fromMemberName: 'RAJKIRAN SALUKE',
    amount: 20.00
  },
  {
    sNo: 4,
    incomeDateTime: '16-02-2024 12:57:37pm',
    memberId: 'MM101014',
    memberName: 'SNEHAL MARNE',
    unlockLevel: 1,
    levelNo: 1,
    levelId: 'MM101022',
    fromMemberName: 'AMIT SHARMA',
    amount: 20.00
  },
  {
    sNo: 5,
    incomeDateTime: '10-02-2024 12:57:37pm',
    memberId: 'MM101015',
    memberName: 'SADDAM SHAIKH',
    unlockLevel: 1,
    levelNo: 1,
    levelId: 'MM104242',
    fromMemberName: 'SADDAM SHAIKH',
    amount: 20.00
  },
  {
    sNo: 6,
    incomeDateTime: '07-02-2024 12:57:37pm',
    memberId: 'MM101016',
    memberName: 'AMIT GADE',
    unlockLevel: 2,
    levelNo: 2,
    levelId: 'MM105777',
    fromMemberName: 'THOMAS ANTHONY',
    amount: 20.00
  },
  {
    sNo: 7,
    incomeDateTime: '05-02-2024 12:57:37pm',
    memberId: 'MM101017',
    memberName: 'PARAG GUJARATHI',
    unlockLevel: 1,
    levelNo: 1,
    levelId: 'MM104755',
    fromMemberName: 'RAZMAN HUSSAIN',
    amount: 20.00
  }
];

function LevelIncomeReports() {
  const totalAmount = levelIncomeReportsData.reduce(
    (sum, row) => sum + row.amount,
    0
  );

  return (
    <div className="tds-report-page">
      <h2 className="section-title tds-screen-title">Level Income Reports</h2>

      <section className="panel tds-panel">
        <div className="btn-row tds-export-row">
          <button type="button" className="btn-outline tds-export-btn">XLS</button>
          <button type="button" className="btn-outline tds-export-btn">PDF</button>
        </div>

        <div className="tds-filter-row">
          <input className="text-input tds-filter-input" placeholder="MEMBER ID" />
          <input className="text-input tds-filter-input" placeholder="MEMBER NAME" />
          <input className="text-input tds-filter-input" placeholder="LEVEL NO" />
          <input className="text-input tds-filter-input" placeholder="LEVEL ID" />
          <input className="text-input tds-filter-input" type="date" placeholder="START DATE" />
          <input className="text-input tds-filter-input" type="date" placeholder="END DATE" />
          <select className="select-input tds-filter-input tds-size-select" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary tds-search-btn" type="button">SERCH</button>
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
                <th>LEVEL NO</th>
                <th>LEVEL ID</th>
                <th>FROM MEMBER NAME</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {levelIncomeReportsData.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDateTime}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.unlockLevel}</td>
                  <td>{row.levelNo}</td>
                  <td>{row.levelId}</td>
                  <td>{row.fromMemberName}</td>
                  <td>{row.amount.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="summary-row">
                <td colSpan="8" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL AMOUNT</td>
                <td>{totalAmount.toFixed(2)}</td>
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

export default LevelIncomeReports;
