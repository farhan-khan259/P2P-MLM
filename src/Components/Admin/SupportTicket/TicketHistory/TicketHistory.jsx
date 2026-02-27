import './TicketHistory.css';
import { ticketRows } from '../../Common/mockData';

function TicketHistory() {
  return (
    <div>
      <h1 className="page-title">Ticket History</h1>

      <div className="panel">
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
                <th>Ticket Number</th>
                <th>Member ID</th>
                <th>Created Date</th>
                <th>Topic</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ticketRows.map((row) => (
                <tr key={`${row[0]}-${row[2]}`}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing 1 to 10 of 36 entries</span>
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketHistory;
