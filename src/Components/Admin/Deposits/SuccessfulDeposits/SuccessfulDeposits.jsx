import './SuccessfulDeposits.css';

const successfulRows = [
  { sno: 1, depositDate: '09-03-2029', memberId: 'EL20110380', memberName: 'Nishikant Shirke', mobileNo: '7020110380', transactionId: '42545555555535', paymentMode: 'Bank Transfer', amount: '500.00', utrNumber: '42545555555535', status: 'Succeed', remark: 'E wallet' },
  { sno: 2, depositDate: '08-03-2029', memberId: 'EL75615112', memberName: 'Sonali Shirke', mobileNo: '9175615112', transactionId: '0424422424222', paymentMode: 'Phone Pe', amount: '200.00', utrNumber: '0424422424222', status: 'Succeed', remark: 'e pin' },
  { sno: 3, depositDate: '07-03-2029', memberId: 'EL22757474', memberName: 'Amruta Salunke', mobileNo: '9922757474', transactionId: '0445458555555', paymentMode: 'Google Pay', amount: '250.00', utrNumber: '0445458555555', status: 'Succeed', remark: '40 E pin' },
  { sno: 4, depositDate: '06-03-2029', memberId: 'EL20114787', memberName: 'Megha Shirke', mobileNo: '7020114787', transactionId: '2575757575777', paymentMode: 'Upi Id', amount: '1000.00', utrNumber: '2575757575777', status: 'Succeed', remark: 'epins' },
  { sno: 5, depositDate: '05-03-2029', memberId: 'EL22585845', memberName: 'Snehal Marne', mobileNo: '9822585845', transactionId: '4257577555778', paymentMode: 'Upi Id', amount: '500.00', utrNumber: '4257577555778', status: 'Succeed', remark: '20 epins' },
  { sno: 6, depositDate: '04-03-2029', memberId: 'EL22834083', memberName: 'Guddi Katale', mobileNo: '9822834083', transactionId: '5424242444544', paymentMode: 'Upi Id', amount: '1500.00', utrNumber: '5424242444544', status: 'Succeed', remark: '20 epins' },
  { sno: 7, depositDate: '03-03-2029', memberId: 'EL22834083', memberName: 'Guddi Katale', mobileNo: '9822834083', transactionId: '0455788887553', paymentMode: 'Upi Id', amount: '1000.00', utrNumber: '0455788887553', status: 'Succeed', remark: '20 epins' }
];

const actionButtons = [
  { className: 'withdrawal-action-btn withdrawal-action-btn--approve', label: 'Approve', icon: '◌' },
  { className: 'withdrawal-action-btn withdrawal-action-btn--succeed', label: 'Succeed', icon: '✓' },
  { className: 'withdrawal-action-btn withdrawal-action-btn--reject', label: 'Reject', icon: '✕' },
  { className: 'withdrawal-action-btn withdrawal-action-btn--reset', label: 'Change Status', icon: '↻' }
];

function renderActionButtons() {
  return (
    <div className="withdrawal-action-group" aria-label="Deposit actions">
      {actionButtons.map((button) => (
        <button key={button.label} type="button" className={button.className} aria-label={button.label}>
          {button.icon}
        </button>
      ))}
    </div>
  );
}

function SuccessfulDeposits() {
  return (
    <div className="tds-report-page">
      <h2 className="section-title tds-screen-title">Successful Deposits</h2>

      <section className="panel tds-panel">
        <div className="btn-row tds-export-row" aria-label="Export options">
          <button type="button" className="btn-outline tds-export-btn" aria-label="Export Excel">XLS</button>
          <button type="button" className="btn-outline tds-export-btn" aria-label="Export PDF">PDF</button>
        </div>

        <div className="tds-filter-row">
          <input className="text-input tds-filter-input" placeholder="Start Date" />
          <input className="text-input tds-filter-input" placeholder="End Date" />
          <input className="text-input tds-filter-input" placeholder="Member Id" />
          <input className="text-input tds-filter-input" placeholder="Member Name" />
          <input className="text-input tds-filter-input" placeholder="Transaction ID" />
          <input className="text-input tds-filter-input" placeholder="Payment Mode" />
          <input className="text-input tds-filter-input" placeholder="Utr Number" />
          <select className="select-input tds-filter-input" defaultValue="">
            <option value="">Status</option>
            <option value="Pending">Pending</option>
            <option value="Approve">Approve</option>
            <option value="Succeed">Succeed</option>
            <option value="Rejected">Rejected</option>
          </select>
          <select className="select-input tds-filter-input tds-size-select" defaultValue="10">
            <option value="10">10/50/100</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary tds-search-btn" type="button">SERCH</button>
        </div>

        <div className="table-wrap tds-table-wrap">
          <table className="data-table tds-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Deposit Date</th>
                <th>Member Id</th>
                <th>Member Name</th>
                <th>Mobile No</th>
                <th>Trasaction ID</th>
                <th>Payment Mode</th>
                <th>AMOUNT</th>
                <th>UTR NUMBER</th>
                <th>SLIP</th>
                <th>Status</th>
                <th>Action</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {successfulRows.map((row) => (
                <tr key={`${row.sno}-${row.transactionId}`}>
                  <td>{row.sno}</td>
                  <td>{row.depositDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.mobileNo}</td>
                  <td>{row.transactionId}</td>
                  <td>{row.paymentMode}</td>
                  <td>{row.amount}</td>
                  <td>{row.utrNumber}</td>
                  <td><button type="button" className="deposit-slip-btn">VIEW</button></td>
                  <td>{row.status}</td>
                  <td className="action-cell">{renderActionButtons()}</td>
                  <td className="remark-cell">{row.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
      </section>
    </div>
  );
}

export default SuccessfulDeposits;
