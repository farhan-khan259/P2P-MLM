import '../../Common/UserLayout.css';
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
    <div>
      <h1 className="user-page-title">Repurchase Income</h1>
      <div className="user-panel">
        <h3>Total Repurchase Income : {totalRepurchase.toFixed(2)}</h3>

        <div className="report-filters">
          <select aria-label="Level No">
            <option value="">LEVEL NO</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <input type="text" placeholder="LEVEL ID" aria-label="Level ID" />
          <input type="text" placeholder="FROM MEMBER NAME" aria-label="From Member Name" />
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
          <button className="user-btn-outline" type="button">Excel</button>
          <button className="user-btn-outline" type="button">PDF</button>
        </div>

        <div className="table-wrap">
          <table className="user-table">
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
              <tr className="report-total-row">
                <td colSpan="8">TOTAL REPURCHASE INCOME</td>
                <td>{totalRepurchase.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pagination-row">
          <button className="page-btn" type="button">«</button>
          <button className="page-btn active" type="button">1</button>
          <button className="page-btn" type="button">2</button>
          <button className="page-btn" type="button">3</button>
          <button className="page-btn" type="button">4</button>
          <button className="page-btn" type="button">5</button>
          <button className="page-btn" type="button">6</button>
          <button className="page-btn" type="button">7</button>
          <button className="page-btn" type="button">»</button>
        </div>
      </div>
    </div>
  );
}

export default RepurchaseIncome;
