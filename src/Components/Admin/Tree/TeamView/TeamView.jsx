import './TeamView.css';
import { teamRows } from '../../Common/mockData';

function TeamView() {
  return (
    <div>
      <h1 className="page-title">My Team</h1>

      <div className="panel">
        <div className="form-grid-wide" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <div className="form-grid" style={{ gridTemplateColumns: '150px 1fr', maxWidth: '100%' }}>
              <label className="field-label">From Date</label>
              <input className="text-input" placeholder="DD-MM-YYYY" />

              <label className="field-label">To Date</label>
              <input className="text-input" placeholder="DD-MM-YYYY" />
            </div>
            <div className="btn-row">
              <button className="btn-primary">Submit</button>
            </div>
          </div>

          <div>
            <div className="form-grid" style={{ gridTemplateColumns: '130px 1fr', maxWidth: '100%' }}>
              <label className="field-label">Member ID</label>
              <input className="text-input" />
            </div>
            <div className="btn-row">
              <button className="btn-primary">Show Details</button>
            </div>
          </div>
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
                <th>MemberID</th>
                <th>Name</th>
                <th>Total Direct</th>
                <th>Mobile</th>
                <th>Sponsor ID</th>
                <th>Sponsor Name</th>
                <th>Join Date</th>
              </tr>
            </thead>
            <tbody>
              {teamRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing 1 to 10 of 365 entries</span>
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

export default TeamView;
