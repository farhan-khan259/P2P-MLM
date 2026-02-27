import './MyDirectReferral.css';
import { teamRows } from '../../Common/mockData';

function MyDirectReferral() {
  return (
    <div>
      <h1 className="page-title">Member Direct Report</h1>

      <div className="panel">
        <div className="form-grid" style={{ maxWidth: 700 }}>
          <label className="field-label">Member ID</label>
          <input className="text-input" />
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
                <th>Total Direct</th>
                <th>Mobile</th>
                <th>Joining Date</th>
                <th>Active Date</th>
                <th>Form Status</th>
                <th>Block Status</th>
              </tr>
            </thead>
            <tbody>
              {teamRows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3].replace('Total Direct :1', 'Total Member : 1')}</td>
                  <td>{row[4]}</td>
                  <td>{row[7]}</td>
                  <td>{row[7]}</td>
                  <td>ACTIVE</td>
                  <td>ACTIVE</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing 1 to 10 of 366 entries</span>
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">...</button>
            <button className="page-btn">37</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDirectReferral;
