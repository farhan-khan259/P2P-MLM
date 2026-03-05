import './DeleteEPin.css';
import { epinRows } from './epinMockData';

const deletedRows = epinRows.filter((row) => row.status === 'Deleted');

function DeleteEPin() {
  return (
    <div>
      <h1 className="page-title">Delete ePin</h1>

      <div className="panel">
        <div className="epin-header-row">
          <h2 className="epin-title">Deleted ePin Records</h2>
        </div>

        <div className="epin-filter-grid">
          <input className="text-input" placeholder="ePin" />
          <input className="text-input" placeholder="Deleted By" />
          <input className="text-input" type="date" />
          <input className="text-input" type="date" />
          <button className="btn-primary">Search</button>
          <button className="btn-outline">Reset</button>
          <div />
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>ePin Name</th>
                <th>ePin</th>
                <th>Cost</th>
                <th>Deleted Date</th>
                <th>Deleted By</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {deletedRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.epinName}</td>
                  <td>{row.epin}</td>
                  <td>{row.cost}</td>
                  <td>{row.genDate}</td>
                  <td>{row.genBy}</td>
                  <td>Manual delete by admin</td>
                  <td>
                    <span className="epin-chip epin-chip-deleted">Deleted</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DeleteEPin;
