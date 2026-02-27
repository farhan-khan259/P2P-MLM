import './MemberAlertList.css';
import { memberAlertRows } from '../../Common/mockData';

function MemberAlertList() {
  return (
    <div>
      <h1 className="page-title">Member Alert List</h1>

      <div className="panel">
        <div className="form-grid">
          <label className="field-label">From Date</label>
          <input className="text-input" placeholder="DD-MM-YYYY" />

          <label className="field-label">To Date</label>
          <input className="text-input" placeholder="DD-MM-YYYY" />
        </div>

        <div className="btn-row">
          <button className="btn-primary">Submit</button>
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
                <th>Form Status</th>
                <th>Block Status</th>
                <th>Member ID</th>
                <th>Member Name</th>
                <th>Total Direct</th>
                <th>Total Pay</th>
                <th>Timer</th>
              </tr>
            </thead>
            <tbody>
              {memberAlertRows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>{row[5]}</td>
                  <td>{row[6]}</td>
                  <td className="timer-error">{row[7]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing 1 to 10 of 21 entries</span>
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberAlertList;
