import '../../Common/UserLayout.css';
import './DatewiseIncome.css';

const datewiseIncomeData = [
  {
    sNo: 1,
    incomeDate: '01-02-2026',
    memberId: 'MM101010',
    totalIds: 3,
    levelIncome: 60.00,
    totalBvPoint: 1000,
    repurchaseIncome: 1000.00,
    dailyIncome: 1060.00
  },
  {
    sNo: 2,
    incomeDate: '02-02-2026',
    memberId: 'MM101010',
    totalIds: 5,
    levelIncome: 100.00,
    totalBvPoint: 1200,
    repurchaseIncome: 1200.00,
    dailyIncome: 1300.00
  },
  {
    sNo: 3,
    incomeDate: '03-02-2026',
    memberId: 'MM101010',
    totalIds: 10,
    levelIncome: 200.00,
    totalBvPoint: 2500,
    repurchaseIncome: 2500.00,
    dailyIncome: 2700.00
  },
  {
    sNo: 4,
    incomeDate: '04-02-2026',
    memberId: 'MM101010',
    totalIds: 12,
    levelIncome: 240.00,
    totalBvPoint: 250,
    repurchaseIncome: 250.00,
    dailyIncome: 490.00
  },
  {
    sNo: 5,
    incomeDate: '05-02-2026',
    memberId: 'MM101010',
    totalIds: 15,
    levelIncome: 300.00,
    totalBvPoint: 1500,
    repurchaseIncome: 1500.00,
    dailyIncome: 1800.00
  },
  {
    sNo: 6,
    incomeDate: '06-02-2026',
    memberId: 'MM101010',
    totalIds: 20,
    levelIncome: 400.00,
    totalBvPoint: 1800,
    repurchaseIncome: 1800.00,
    dailyIncome: 2200.00
  },
  {
    sNo: 7,
    incomeDate: '04-01-2026',
    memberId: 'MM101010',
    totalIds: 25,
    levelIncome: 500.00,
    totalBvPoint: 2000,
    repurchaseIncome: 2000.00,
    dailyIncome: 2500.00
  }
];

function DatewiseIncome() {
  const totalAmount = datewiseIncomeData.reduce(
    (sum, row) => sum + row.dailyIncome,
    0
  );

  return (
    <div>
      <h1 className="user-page-title">Datewise Income</h1>
      <div className="user-panel">
        <div className="report-filters">
          <input type="date" placeholder="START DATE" aria-label="Start Date" />
          <input type="date" placeholder="END DATE" aria-label="End Date" />
          <select aria-label="Rows per page">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="user-btn-blue" type="button">SERCH</button>
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
                <th>INCOME DATE</th>
                <th>MEMBER ID</th>
                <th>TOTAL ID'S</th>
                <th>LEVEL INCOME</th>
                <th>TOTAL BV POINT</th>
                <th>REPURCHASE INCOME</th>
                <th>DAILY INCOME</th>
              </tr>
            </thead>
            <tbody>
              {datewiseIncomeData.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.totalIds}</td>
                  <td>{row.levelIncome.toFixed(2)}</td>
                  <td>{row.totalBvPoint}</td>
                  <td>{row.repurchaseIncome.toFixed(2)}</td>
                  <td>{row.dailyIncome.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="report-total-row">
                <td colSpan="7">TOTAL AMOUNT</td>
                <td>{totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pagination-row">
          <button className="page-btn" type="button">«</button>
          <button className="page-btn" type="button">‹</button>
          <button className="page-btn active" type="button">1</button>
          <button className="page-btn" type="button">2</button>
          <button className="page-btn" type="button">3</button>
          <button className="page-btn" type="button">4</button>
          <button className="page-btn" type="button">5</button>
          <button className="page-btn" type="button">6</button>
          <button className="page-btn" type="button">7</button>
          <button className="page-btn" type="button">›</button>
          <button className="page-btn" type="button">»</button>
        </div>
      </div>
    </div>
  );
}

export default DatewiseIncome;
