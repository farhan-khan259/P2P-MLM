import { useEffect, useState } from 'react';
import './EPinRequest.css';
import { getAdminEpinRequests, updateAdminEpinRequestStatus } from '../../../api/managementService';

function EPinRequest() {
  const [rows, setRows] = useState([]);

  const loadRows = async () => {
    try {
      const response = await getAdminEpinRequests();
      setRows(response.requests || []);
    } catch (error) {
      setRows([]);
    }
  };

  useEffect(() => {
    loadRows();
  }, []);

  const handleApprove = async (requestId) => {
    await updateAdminEpinRequestStatus(requestId, { status: 'Approved' });
    await loadRows();
  };

  return (
    <div>
      <h1 className="page-title">ePin Request</h1>

      <div className="panel">
        <div className="epin-header-row">
          <h2 className="epin-title">List ePin Request</h2>
        </div>

        <div className="epin-filter-grid">
          <input className="text-input" placeholder="Client ID" />
          <select className="select-input">
            <option>Status</option>
            <option>Approved</option>
            <option>Pending</option>
          </select>
          <select className="select-input">
            <option>ePin Name</option>
            <option>Activation</option>
          </select>
          <input className="text-input" type="date" />
          <input className="text-input" type="date" />
          <select className="select-input">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <button className="btn-primary">Search</button>
        </div>

        <div className="epin-tools">
          <button className="btn-outline">Excel</button>
          <button className="btn-outline">PDF</button>
          <button className="btn-outline">Print</button>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Action</th>
                <th>Client ID</th>
                <th>Name</th>
                <th>Package/Cost</th>
                <th>Qty</th>
                <th>Paid Amt.</th>
                <th>Mobile</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row._id || row.id}>
                  <td>{row.id}</td>
                  <td>
                    <button className="btn-primary" type="button" onClick={() => handleApprove(row._id)}>
                      Approve
                    </button>
                  </td>
                  <td>{row.clientId}</td>
                  <td>{row.name}</td>
                  <td>{row.packageCost}</td>
                  <td>{row.qty}</td>
                  <td>
                    <span className="epin-chip epin-chip-success">{row.paidAmount}</span>
                  </td>
                  <td>{row.mobile}</td>
                  <td>{row.date}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing Page 1 of 1 From {rows.length} Rows</span>
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

export default EPinRequest;
