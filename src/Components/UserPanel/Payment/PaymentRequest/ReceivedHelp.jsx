import React from "react";
import "./ReceivedHelp.css";

const receivedHelpRows = [
  { sNo: 1, memberId: "MM101010", name: "SONALI SHIRKE", amount: 300, rank: 1, requestDate: "23-11-2024 12:57:37PM", transactionId: "123456789012", status: "PENDING" },
  { sNo: 2, memberId: "MM101011", name: "AMBIKA SALUNKE", amount: 1000, rank: 2, requestDate: "23-11-2024 12:57:37PM", transactionId: "123456789012", status: "PENDING" },
  { sNo: 3, memberId: "MM101012", name: "RAJKIRAN SALUKE", amount: 2000, rank: 3, requestDate: "23-11-2024 12:57:37PM", transactionId: "123456789012", status: "PENDING" },
  { sNo: 4, memberId: "MM101013", name: "AMIT SHARMA", amount: 4000, rank: 4, requestDate: "23-11-2024 12:57:37PM", transactionId: "123456789012", status: "PENDING" },
  { sNo: 5, memberId: "MM101014", name: "SADDAM SHAIKH", amount: 16000, rank: 6, requestDate: "23-11-2024 12:57:37PM", transactionId: "123456789012", status: "PENDING" },
  { sNo: 6, memberId: "MM101015", name: "THOMAS ANTHONY", amount: 2000, rank: 3, requestDate: "23-11-2024 12:57:37PM", transactionId: "123456789012", status: "PENDING" },
  { sNo: 7, memberId: "MM101016", name: "RAZMAN HUSSAIN", amount: 4000, rank: 4, requestDate: "23-11-2024 12:57:37PM", transactionId: "123456789012", status: "PENDING" },
];

const ReceivedHelp = () => {
  return (
    <div>
      <h1 className="user-page-title">Received  Help (Downline ➔ You)</h1>
      <div className="user-panel">
        <div
          className="level-income-filters"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, minmax(110px, 1fr))",
            gap: 8,
            marginBottom: 14,
            ...(window.innerWidth <= 600
              ? { gridTemplateColumns: "1fr", gap: 6 }
              : {})
          }}
        >
          <input className="text-input" placeholder="DONAR MEMBER ID" />
          <select className="select-input">
            <option value="">RANK</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <label className="filter-field">
            <input className="text-input" type="date" aria-label="Start Date" />
          </label>
          <label className="filter-field">
            <input className="text-input" type="date" aria-label="End Date" />
          </label>
          <select className="select-input">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="user-btn-blue3" type="button">Search</button>
        </div>
        <div className="epin-tools" style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginBottom: 10 }}>
          <button className="btn-outline">Excel</button>
          <button className="btn-outline">PDF</button>
          <button className="btn-outline">Print</button>
        </div>
        <div className="table-wrap">
          <table className="user-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>DONAR MEMBER ID</th>
                <th>DONAR MEMBER NAME</th>
                <th>AMOUNT</th>
                <th>RANK</th>
                <th>REQUEST DATE</th>
                <th>TRASACTION ID</th>
                <th>PAYMENT PROOF</th>
                <th>ACTION</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {receivedHelpRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.memberId}</td>
                  <td>{row.name}</td>
                  <td>{row.amount}</td>
                  <td>{row.rank}</td>
                  <td>{row.requestDate}</td>
                  <td>{row.transactionId}</td>
                  <td><button className="user-btn-blue3">VIEW</button></td>
                  <td>
                    <button className="user-mini-btn user-accept" type="button">ACCEPT</button>
                    <button className="user-mini-btn user-reject" type="button" style={{ marginLeft: 4 }}>REJECT</button>
                  </td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReceivedHelp;
