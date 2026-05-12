import "../../Common/UserLayout.css";
import "./DailyPayoutReport.css";

const dailyPayoutData = [
  {
    sNo: 1,
    incomeDate: "06-02-2026",
    memberId: "MM101011",
    memberName: "ANAMIKA SAXENA",
    levelIncome: 1200.0,
    repurchaseIncome: 1000.0,
    grossIncome: 2200.0,
    tds: 110.0,
    adminCharge: 110.0,
    netPayable: 1980.0,
    status: "Credited To E-wallet",
  },
  {
    sNo: 2,
    incomeDate: "05-02-2026",
    memberId: "MM101011",
    memberName: "ANAMIKA SAXENA",
    levelIncome: 1000.0,
    repurchaseIncome: 1200.0,
    grossIncome: 2200.0,
    tds: 110.0,
    adminCharge: 110.0,
    netPayable: 1980.0,
    status: "Credited To E-wallet",
  },
  {
    sNo: 3,
    incomeDate: "04-02-2026",
    memberId: "MM101011",
    memberName: "ANAMIKA SAXENA",
    levelIncome: 2000.0,
    repurchaseIncome: 2500.0,
    grossIncome: 4500.0,
    tds: 225.0,
    adminCharge: 225.0,
    netPayable: 4050.0,
    status: "Credited To E-wallet",
  },
  {
    sNo: 4,
    incomeDate: "03-02-2026",
    memberId: "MM101011",
    memberName: "ANAMIKA SAXENA",
    levelIncome: 2400.0,
    repurchaseIncome: 250.0,
    grossIncome: 2650.0,
    tds: 132.5,
    adminCharge: 132.5,
    netPayable: 2385.0,
    status: "Credited To E-wallet",
  },
  {
    sNo: 5,
    incomeDate: "02-02-2026",
    memberId: "MM101011",
    memberName: "ANAMIKA SAXENA",
    levelIncome: 900.0,
    repurchaseIncome: 1500.0,
    grossIncome: 2400.0,
    tds: 120.0,
    adminCharge: 120.0,
    netPayable: 2160.0,
    status: "Credited To E-wallet",
  },
  {
    sNo: 6,
    incomeDate: "01-02-2026",
    memberId: "MM101011",
    memberName: "ANAMIKA SAXENA",
    levelIncome: 400.0,
    repurchaseIncome: 1800.0,
    grossIncome: 2200.0,
    tds: 110.0,
    adminCharge: 110.0,
    netPayable: 1980.0,
    status: "Credited To E-wallet",
  },
  {
    sNo: 7,
    incomeDate: "30-01-2026",
    memberId: "MM101011",
    memberName: "ANAMIKA SAXENA",
    levelIncome: 500.0,
    repurchaseIncome: 2000.0,
    grossIncome: 2500.0,
    tds: 125.0,
    adminCharge: 125.0,
    netPayable: 2250.0,
    status: "Credited To E-wallet",
  },
];

function DailyPayoutReport() {
  const totalPayoutAmount = dailyPayoutData.reduce(
    (sum, row) => sum + row.netPayable,
    0,
  );

  return (
    <div>
      <h1 className="user-page-title">Daily Payout Report</h1>
      <div className="user-panel">
        <div className="report-filters">
          <input type="date" placeholder="START DATE" aria-label="Start Date" />
          <input type="date" placeholder="END DATE" aria-label="End Date" />
          <select aria-label="Rows per page">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="user-btn-blue" type="button">
            SERCH
          </button>
        </div>

        <div className="table-toolbar">
          <button className="user-btn-outline" type="button">
            Excel
          </button>
          <button className="user-btn-outline" type="button">
            PDF
          </button>
        </div>

        <div className="table-wrap">
          <table className="user-table">
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
              {dailyPayoutData.map((row) => (
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
              <tr className="report-total-row">
                <td
                  colSpan="09"
                  style={{
                    textAlign: "end",
                  }}
                  className="report-total-label"
                >
                  TOTAL PAYOUT AMOUNT
                </td>
                <td  colSpan="02" className="report-total-value">
                  {totalPayoutAmount.toFixed(2)}
                </td>
              
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pagination-row">
          <button className="page-btn" type="button">
            «
          </button>
          <button className="page-btn" type="button">
            ‹
          </button>
          <button className="page-btn active" type="button">
            1
          </button>
          <button className="page-btn" type="button">
            2
          </button>
          <button className="page-btn" type="button">
            3
          </button>
          <button className="page-btn" type="button">
            4
          </button>
          <button className="page-btn" type="button">
            5
          </button>
          <button className="page-btn" type="button">
            6
          </button>
          <button className="page-btn" type="button">
            7
          </button>
          <button className="page-btn" type="button">
            ›
          </button>
          <button className="page-btn" type="button">
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default DailyPayoutReport;
