import '../../Common/UserLayout.css';
import './DatewiseRepurchaseIncome.css';

const datewiseRepurchaseIncomeRows = [
  {
    sNo: 1,
    incomeDate: '01-02-2026',
    memberId: 'MM101010',
    memberName: 'ANAMIKA SAXENA',
    bvPoin: 1000,
    repurchaseIncome: 1000.0,
    tds: 50.0,
    adminCharge: 0.0,
    netAmount: 950.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 2,
    incomeDate: '02-02-2026',
    memberId: 'MM101010',
    memberName: 'ANAMIKA SAXENA',
    bvPoin: 1200,
    repurchaseIncome: 1200.0,
    tds: 60.0,
    adminCharge: 0.0,
    netAmount: 1140.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 3,
    incomeDate: '03-02-2026',
    memberId: 'MM101010',
    memberName: 'ANAMIKA SAXENA',
    bvPoin: 2500,
    repurchaseIncome: 2500.0,
    tds: 125.0,
    adminCharge: 0.0,
    netAmount: 2375.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 4,
    incomeDate: '04-02-2026',
    memberId: 'MM101010',
    memberName: 'ANAMIKA SAXENA',
    bvPoin: 250,
    repurchaseIncome: 250.0,
    tds: 12.5,
    adminCharge: 0.0,
    netAmount: 237.5,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 5,
    incomeDate: '05-02-2026',
    memberId: 'MM101010',
    memberName: 'ANAMIKA SAXENA',
    bvPoin: 1500,
    repurchaseIncome: 1500.0,
    tds: 75.0,
    adminCharge: 0.0,
    netAmount: 1425.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 6,
    incomeDate: '06-02-2026',
    memberId: 'MM101010',
    memberName: 'ANAMIKA SAXENA',
    bvPoin: 1800,
    repurchaseIncome: 1800.0,
    tds: 90.0,
    adminCharge: 0.0,
    netAmount: 1710.0,
    status: 'Credited To E-wallet'
  },
  {
    sNo: 7,
    incomeDate: '04-01-2026',
    memberId: 'MM101010',
    memberName: 'ANAMIKA SAXENA',
    bvPoin: 2000,
    repurchaseIncome: 2000.0,
    tds: 100.0,
    adminCharge: 0.0,
    netAmount: 1900.0,
    status: 'Credited To E-wallet'
  }
];

function DatewiseRepurchaseIncome() {
  const totalAmount = datewiseRepurchaseIncomeRows.reduce((sum, row) => sum + row.repurchaseIncome, 0);

  return (
    <div>
      <h1 className="user-page-title">Datewise Repurchase Income</h1>
      <div className="user-panel">
        <div className="report-filters">
          <input type="date" aria-label="Start Date" />
          <input type="date" aria-label="End Date" />
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
                <th>INCOME DATE</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>TOTAL BV POIN</th>
                <th>REPURCHASE INCOME</th>
                <th>TDS - 5%</th>
                <th>ADMIN CHARGE - 0%</th>
                <th>NET AMOUNT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {datewiseRepurchaseIncomeRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.bvPoin}</td>
                  <td>{row.repurchaseIncome.toFixed(2)}</td>
                  <td>{row.tds.toFixed(2)}</td>
                  <td>{row.adminCharge.toFixed(2)}</td>
                  <td>{row.netAmount.toFixed(2)}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
              <tr className="report-total-row">
                <td colSpan="8">TOTAL AMOUNT</td>
                <td>{totalAmount.toFixed(2)}</td>
                <td></td>
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

export default DatewiseRepurchaseIncome;
