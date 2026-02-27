import './LevelIncome.css';
import { paymentRows } from '../../Common/mockData';

function LevelIncome() {
  return (
    <div>
      <h1 className="page-title">Level Income</h1>

      <div className="panel">
        <div className="form-grid">
          <label className="field-label">From Date</label>
          <input className="text-input" placeholder="DD-MM-YYYY" />

          <label className="field-label">To Date</label>
          <input className="text-input" placeholder="DD-MM-YYYY" />
        </div>

        <div className="btn-row">
          <button className="btn-primary">Show Details</button>
        </div>
        <div className="btn-row">
          <button className="btn-outline">Excel</button>
        </div>

        <div className="table-tools">
          <div />
          <label className="search-box">
            Search:
            <input className="text-input" />
          </label>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Member ID</th>
                <th>Member Name</th>
                <th>Pay ID</th>
                <th>Pay Name</th>
                <th>Amount</th>
                <th>Payment Proof</th>
                <th>Status</th>
                <th>Request Date</th>
                <th>Approve Date</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {paymentRows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>{row[5]}</td>
                  <td>{row[6]}</td>
                  <td>{row[12]}</td>
                  <td>{row[10]}</td>
                  <td>{row[11]}</td>
                  <td>{row[13]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing 1 to 10 of 4,015 entries</span>
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">...</button>
            <button className="page-btn">402</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelIncome;
