import '../../Common/UserLayout.css';
import { donationIncomeRows } from '../../Common/userMockData';
import './DonationsIncome.css';

function DonationsIncome() {
  const totalDonationIncome = donationIncomeRows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <div>
      <h1 className="user-page-title">Donations Income</h1>
      <div className="user-panel">
        <h3>Total Donations Income : {totalDonationIncome}</h3>

        <div className="donation-income-filters">
          <input className="text-input" type="text" placeholder="DONAR MEMBER ID" aria-label="Donar Member ID" />
          <select className="select-input" aria-label="Level">
            <option value="">LEVEL</option>
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
          <select className="select-input" aria-label="Rows per page">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button className="user-btn-blue" type="button">Search</button>
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
                <th>DONAR MEMBER ID</th>
                <th>DONAR MEMBER NAME</th>
                <th>LEVEL</th>
                <th>AMOUNT</th>
                <th>TRASACTION ID</th>
                <th>REQUEST DATE</th>
                <th>APROVE DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {donationIncomeRows.map((row, index) => (
                <tr key={`${row.memberId}-${index}`}>
                  <td>{index + 1}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.level}</td>
                  <td>{row.amount}</td>
                  <td>{row.transactionId}</td>
                  <td>{row.requestDate}</td>
                  <td>{row.approveDate}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DonationsIncome;
