import './MemberBlockList.css';
import { memberViewRows } from '../../Common/mockData';

function MemberBlockList() {
  return (
    <div>
      <h1 className="page-title">Member Block List</h1>

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
                <th>Password</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {memberViewRows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>INACTIVE</td>
                  <td>{row[3]}</td>
                  <td>{row[4]}</td>
                  <td>{row[5]}</td>
                  <td>{row[6]}</td>
                  <td>{row[7]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing 1 to 10 of 136 entries</span>
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">...</button>
            <button className="page-btn">14</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberBlockList;
