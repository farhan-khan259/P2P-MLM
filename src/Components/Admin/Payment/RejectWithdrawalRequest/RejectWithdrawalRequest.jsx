import './RejectWithdrawalRequest.css';

const rejectWithdrawalRequests = [
  {
    sNo: 1,
    requestDate: '20-04-2026 07:06 PM',
    requestId: '78YSHU29FJK3',
    memberId: 'EL20110380',
    memberName: 'Nishikant Shirke',
    mobileNo: '7020110380',
    upiId: '7020110380@zyb',
    bankAccountNo: '4587020110380',
    bankName: 'State Bank Of India',
    branch: 'Pashan',
    ifscCode: 'SBIN000887P',
    amount: 1000.0,
    charges: 0.0,
    netAmount: 1000.0,
    paymentMethod: 'UPI ID',
    status: 'Reject',
    remark: '-'
  },
  {
    sNo: 2,
    requestDate: '20-04-2026 07:06 PM',
    requestId: '78YGHU29FJK1',
    memberId: 'EL75615112',
    memberName: 'Sonali Shirke',
    mobileNo: '9175615112',
    upiId: '9175615112@zyb',
    bankAccountNo: '4589175615112',
    bankName: 'HDFC Bank',
    branch: 'Baner',
    ifscCode: 'HDFC688BP',
    amount: 5000.0,
    charges: 0.0,
    netAmount: 5000.0,
    paymentMethod: 'BANK TRANSFER',
    status: 'Reject',
    remark: '-'
  },
  {
    sNo: 3,
    requestDate: '20-04-2026 07:06 PM',
    requestId: '78YGHU29FJK1',
    memberId: 'EL22757474',
    memberName: 'Amruta Salunke',
    mobileNo: '9922757474',
    upiId: '9922757474@zyb',
    bankAccountNo: '7859922757474',
    bankName: 'ICICI Bank',
    branch: 'Bavdhan',
    ifscCode: 'ICICR4334U',
    amount: 2000.0,
    charges: 0.0,
    netAmount: 2000.0,
    paymentMethod: 'BANK TRANSFER',
    status: 'Reject',
    remark: '-'
  }
];

const actionButtons = [
  { className: 'withdrawal-action-btn withdrawal-action-btn--approve', label: 'Approve', icon: '◌' },
  { className: 'withdrawal-action-btn withdrawal-action-btn--succeed', label: 'Succeed', icon: '✓' },
  { className: 'withdrawal-action-btn withdrawal-action-btn--reject', label: 'Reject', icon: '✕' },
  { className: 'withdrawal-action-btn withdrawal-action-btn--reset', label: 'Change Status', icon: '↻' }
];

function renderActionButtons() {
  return (
    <div className="withdrawal-action-group" aria-label="Withdrawal actions">
      {actionButtons.map((button) => (
        <button key={button.label} type="button" className={button.className} aria-label={button.label}>
          {button.icon}
        </button>
      ))}
    </div>
  );
}

function RejectWithdrawalRequest() {
  return (
    <div className="tds-report-page">
      <h2 className="section-title tds-screen-title">Reject Withdrawal Request</h2>

      <section className="panel tds-panel">
      
        <div className="tds-filter-row">
          <input className="text-input tds-filter-input" placeholder="REQUEST ID" aria-label="Request ID" />
          <input className="text-input tds-filter-input" placeholder="MEMBER ID" aria-label="Member ID" />
          <input className="text-input tds-filter-input" placeholder="AMOUNT" aria-label="Amount" />
          <input className="text-input tds-filter-input" placeholder="START DATE" aria-label="Start Date" />
          <input className="text-input tds-filter-input" placeholder="END DATE" aria-label="End Date" />
          <select className="select-input tds-filter-input tds-size-select" aria-label="Rows per page" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary tds-search-btn" type="button">SERCH</button>
        </div>


  <div className="btn-row tds-export-row">
          <button type="button" className="btn-outline tds-export-btn">XLS</button>
          <button type="button" className="btn-outline tds-export-btn">PDF</button>
        </div>

        <div className="table-wrap tds-table-wrap">
          <table className="data-table tds-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>REQUEST DATE</th>
                <th>REQUEST ID</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>MOBILE NO</th>
                <th>UPI ID</th>
                <th>BANK ACC NO</th>
                <th>BANK NAME</th>
                <th>BRANCH</th>
                <th>IFSC CODE</th>
                <th>AMOUNT</th>
                <th>CHARGES</th>
                <th>NET AMOUNT</th>
                <th>PAYMENT METHOD</th>
                <th>STATUS</th>
                <th>ACTION</th>
                <th>REMARK</th>
              </tr>
            </thead>
            <tbody>
              {rejectWithdrawalRequests.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.requestDate}</td>
                  <td>{row.requestId}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.mobileNo}</td>
                  <td>{row.upiId}</td>
                  <td>{row.bankAccountNo}</td>
                  <td>{row.bankName}</td>
                  <td>{row.branch}</td>
                  <td>{row.ifscCode}</td>
                  <td>{row.amount.toFixed(2)}</td>
                  <td>{row.charges.toFixed(2)}</td>
                  <td>{row.netAmount.toFixed(2)}</td>
                  <td>{row.paymentMethod}</td>
                  <td>{row.status}</td>
                  <td className="action-cell">{renderActionButtons()}</td>
                  <td className="remark-cell">{row.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="pagination">
            <button className="page-btn">«</button>
            <button className="page-btn">‹</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">›</button>
            <button className="page-btn">»</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RejectWithdrawalRequest;
