import './PaymentRequest.css';
import { paymentRows } from '../../Common/mockData';

function PaymentRequest() {
  return (
    <div>
      <h1 className="page-title">Payment Request</h1>

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
                <th>Sr. No.</th>
                <th>From Member ID</th>
                <th>From Member Name</th>
                <th>To Member ID</th>
                <th>To Member Name</th>
                <th>Amount</th>
                <th>Payment Proof</th>
                <th>A/C No.</th>
                <th>IFSC Code</th>
                <th>Bank Name</th>
                <th>Request Date</th>
                <th>Approve Date</th>
                <th>Status</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                  <td>
                    <button className="btn-danger">Decline</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <span>Showing 1 to 10 of 1440 entries</span>
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">...</button>
            <button className="page-btn">144</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentRequest;
