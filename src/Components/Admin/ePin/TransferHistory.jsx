import './TransferHistory.css';
import { epinTransferRows } from './epinMockData';

function TransferHistory() {
  return (
    <div>
      <h1 className="page-title">Transfer History</h1>

      <div className="panel">
        <div className="epin-header-row">
          <h2 className="epin-title">ePin Transfer History</h2>
        </div>

        <div className="epin-filter-grid">
          <input className="text-input" placeholder="ePin" />
          <input className="text-input" placeholder="From Member ID" />
          <input className="text-input" placeholder="To Member ID" />
          <input className="text-input" type="date" />
          <input className="text-input" type="date" />
          <select className="select-input">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <button className="btn-primary">Search</button>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>ePin</th>
                <th>From Member</th>
                <th>To Member</th>
                <th>Transfer Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {epinTransferRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.epin}</td>
                  <td>{row.fromMember}</td>
                  <td>{row.toMember}</td>
                  <td>{row.transferDate}</td>
                  <td>{row.amount}</td>
                  <td>
                    <span
                      className={`epin-chip ${
                        row.status === 'Success' ? 'epin-chip-success' : 'epin-chip-pending'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing Page 1 of 1 From 3 Rows</span>
          <div className="pagination">
            <button className="page-btn">&lt;&lt;</button>
            <button className="page-btn">&lt;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">&gt;</button>
            <button className="page-btn">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferHistory;
