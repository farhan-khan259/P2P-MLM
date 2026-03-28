import React from "react";
import "./TransactionHistory.css";

const transactionRows = [
  { sNo: 1, date: "01-02-2026", particular: "LEVEL INCOME", debit: "", credit: 200, balance: 200 },
  { sNo: 2, date: "02-02-2026", particular: "LEVEL INCOME", debit: "", credit: 500, balance: 700 },
  { sNo: 3, date: "03-02-2026", particular: "LEVEL INCOME", debit: "", credit: 300, balance: 1000 },
  { sNo: 4, date: "04-02-2026", particular: "LEVEL INCOME", debit: "", credit: 400, balance: 1400 },
  { sNo: 5, date: "04-02-2026", particular: "PRODUCT PURCHASE", debit: 400, credit: "", balance: 1000 },
  { sNo: 6, date: "05-02-2026", particular: "LEVEL INCOME", debit: "", credit: 250, balance: 1250 },
  { sNo: 7, date: "06-02-2026", particular: "EPIN GENERATION", debit: 250, credit: "", balance: 1000 },
];

const TransactionHistory = () => {
  return (
    <div>
      <h1 className="user-page-title">Transaction History</h1>
      <div className="user-panel">
        <div className="transaction-filters">
          <input className="text-input" placeholder="DEBITE" />
          <input className="text-input" placeholder="CREDIT" />
          <input className="text-input" type="date" placeholder="START DATE" />
          <input className="text-input" type="date" placeholder="END DATE" />
          <select className="select-input">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary" type="button">SEARCH</button>
        </div>
        <div className="epin-tools">
          <button className="btn-outline">Excel</button>
          <button className="btn-outline">PDF</button>
          <button className="btn-outline">Print</button>
        </div>
        <div className="table-wrap">
          <table className="user-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>TRANSACTION DATE & TIME</th>
                <th>PARTICULAR</th>
                <th>DEBIT</th>
                <th>CREDIT</th>
                <th>BALANCE</th>
              </tr>
            </thead>
            <tbody>
              {transactionRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.date}</td>
                  <td>{row.particular}</td>
                  <td>{row.debit}</td>
                  <td>{row.credit}</td>
                  <td>{row.balance}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" style={{ textAlign: 'right', fontWeight: 700 }}>TOTAL E-WALLET BALANCE</td>
                <td style={{ fontWeight: 700 }}>1000</td>
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

export default TransactionHistory;
