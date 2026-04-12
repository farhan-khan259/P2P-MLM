import { useMemo, useState } from 'react';
import './SuccessfulDeposits.css';

const successfulRows = [
  {
    sno: 1,
    depositDate: '09-03-2029',
    memberId: 'EL20110380',
    memberName: 'Nishikant Shirke',
    mobileNo: '7020110380',
    transactionId: '42545555555535',
    paymentMode: 'Bank Transfer',
    amount: '500',
    utrNumber: '42545555555535',
    status: 'Succeed',
    remark: 'E wallet'
  },
  {
    sno: 2,
    depositDate: '08-03-2029',
    memberId: 'EL75615112',
    memberName: 'Sonali Shirke',
    mobileNo: '9175615112',
    transactionId: '0424422424222',
    paymentMode: 'Phone Pe',
    amount: '200',
    utrNumber: '0424422424222',
    status: 'Succeed',
    remark: 'e pin'
  },
  {
    sno: 3,
    depositDate: '07-03-2029',
    memberId: 'EL22757474',
    memberName: 'Amruta Salunke',
    mobileNo: '9922757474',
    transactionId: '0445458555555',
    paymentMode: 'Google Pay',
    amount: '250',
    utrNumber: '0445458555555',
    status: 'Succeed',
    remark: '40 E pin'
  },
  {
    sno: 4,
    depositDate: '06-03-2029',
    memberId: 'EL20114787',
    memberName: 'Megha Shirke',
    mobileNo: '7020114787',
    transactionId: '2575757575777',
    paymentMode: 'Upi Id',
    amount: '1000',
    utrNumber: '2575757575777',
    status: 'Succeed',
    remark: 'epins'
  },
  {
    sno: 5,
    depositDate: '05-03-2029',
    memberId: 'EL22585845',
    memberName: 'Snehal Marne',
    mobileNo: '9822585845',
    transactionId: '4257577555778',
    paymentMode: 'Upi Id',
    amount: '500',
    utrNumber: '4257577555778',
    status: 'Succeed',
    remark: '20 epins'
  },
  {
    sno: 6,
    depositDate: '04-03-2029',
    memberId: 'EL22834083',
    memberName: 'Guddi Katale',
    mobileNo: '9822834083',
    transactionId: '5424242444544',
    paymentMode: 'Upi Id',
    amount: '1500',
    utrNumber: '5424242444544',
    status: 'Succeed',
    remark: '20 epins'
  },
  {
    sno: 7,
    depositDate: '03-03-2029',
    memberId: 'EL22834083',
    memberName: 'Guddi Katale',
    mobileNo: '9822834083',
    transactionId: '0455788887553',
    paymentMode: 'Upi Id',
    amount: '1000',
    utrNumber: '0455788887553',
    status: 'Succeed',
    remark: '20 epins'
  }
];

function SuccessfulDeposits() {
  const [filters, setFilters] = useState({ memberId: '', memberName: '', transactionId: '' });
  const [pageSize, setPageSize] = useState('10');

  const rows = useMemo(() => {
    const memberId = filters.memberId.toLowerCase();
    const memberName = filters.memberName.toLowerCase();

    return successfulRows
      .filter((row) => {
        return (
          (!memberId || row.memberId.toLowerCase().includes(memberId)) &&
          (!memberName || row.memberName.toLowerCase().includes(memberName)) &&
          (!filters.transactionId || row.transactionId.includes(filters.transactionId))
        );
      })
      .slice(0, Number(pageSize));
  }, [filters, pageSize]);

  const onFilterChange = (key) => (event) => {
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <div className="success-deposits-page">
    
      <h2 className="section-title success-screen-title">Successful Deposits</h2>

      <section className="panel success-panel">
        <div className="btn-row success-export-row">
          <button type="button" className="btn-outline success-export-btn">XLS</button>
          <button type="button" className="btn-outline success-export-btn">PDF</button>
        </div>

        <div className="success-filter-row">
          <input type="date" className="text-input success-filter-input" />
          <input type="date" className="text-input success-filter-input" />
          <input type="text" className="text-input success-filter-input" placeholder="Member Id" value={filters.memberId} onChange={onFilterChange('memberId')} />
          <input type="text" className="text-input success-filter-input" placeholder="Member Name" value={filters.memberName} onChange={onFilterChange('memberName')} />
          <input type="text" className="text-input success-filter-input" placeholder="Transaction ID" value={filters.transactionId} onChange={onFilterChange('transactionId')} />
          <select className="select-input success-filter-input success-size-select" value={pageSize} onChange={(event) => setPageSize(event.target.value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button type="button" className="btn-primary success-search-btn">Search</button>
        </div>

        <div className="table-wrap success-table-wrap">
          <table className="data-table success-table">
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
              {rows.map((row) => (
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
                  <td><button type="button" className="success-slip-btn">VIEW</button></td>
                  <td>{row.status}</td>
                  <td>
                    <div className="success-action-group">
                      <button type="button" className="success-action success">✓</button>
                      <button type="button" className="success-action change">↻</button>
                      <button type="button" className="success-action reject">✕</button>
                    </div>
                  </td>
                  <td>{row.remark}</td>
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
