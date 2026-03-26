import React from "react";
import "./DatewiseLevelIncome.css";

const datewiseLevelIncomeRows = [
  { sNo: 1, incomeDate: "01-02-2026", memberId: "MM101010", totalIds: 3, totalAmount: 60, tds: 3, netPayout: 57, status: 57 },
  { sNo: 2, incomeDate: "02-02-2026", memberId: "MM101010", totalIds: 5, totalAmount: 100, tds: 5, netPayout: 95, status: 95 },
  { sNo: 3, incomeDate: "03-02-2026", memberId: "MM101010", totalIds: 10, totalAmount: 200, tds: 10, netPayout: 190, status: 190 },
  { sNo: 4, incomeDate: "04-02-2026", memberId: "MM101010", totalIds: 12, totalAmount: 240, tds: 12, netPayout: 228, status: 228 },
  { sNo: 5, incomeDate: "05-02-2026", memberId: "MM101010", totalIds: 15, totalAmount: 300, tds: 15, netPayout: 285, status: 285 },
  { sNo: 6, incomeDate: "06-02-2026", memberId: "MM101010", totalIds: 20, totalAmount: 400, tds: 20, netPayout: 380, status: 380 },
  { sNo: 7, incomeDate: "04-01-2026", memberId: "MM101010", totalIds: 25, totalAmount: 500, tds: 25, netPayout: 475, status: 475 },
];

const DatewiseLevelIncome = () => {
  return (
    <div>
      <h1 className="user-page-title">Datewise Level Income</h1>
      <div className="user-panel">
        <div className="level-income-filters">
          <input type="date" placeholder="START DATE" aria-label="Start Date" />
          <input type="date" placeholder="END DATE" aria-label="End Date" />
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
                <th>TO MEMBER ID</th>
                <th>TOTAL ID'S</th>
                <th>TOTAL AMOUNT</th>
                <th>TDS - 5 %</th>
                <th>NET PAYOUT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {datewiseLevelIncomeRows.map((row, idx) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.totalIds}</td>
                  <td>{row.totalAmount}</td>
                  <td>{row.tds}</td>
                  <td>{row.netPayout}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL PAYOUT AMOUNT</td>
                <td colSpan="2" style={{ fontWeight: 700 }}>{datewiseLevelIncomeRows.reduce((sum, row) => sum + row.netPayout, 0)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="table-footer">
          <div className="pagination">
            <button className="page-btn">&laquo;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">6</button>
            <button className="page-btn">7</button>
            <button className="page-btn">&raquo;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatewiseLevelIncome;
