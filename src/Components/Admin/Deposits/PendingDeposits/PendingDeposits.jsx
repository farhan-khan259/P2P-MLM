import { useMemo, useState } from 'react';
import './PendingDeposits.css';

const pendingRows = [
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
    status: 'Pending',
    remark: '-'
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
    status: 'Pending',
    remark: '-'
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
    status: 'Pending',
    remark: '-'
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
    status: 'Pending',
    remark: '-'
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
    status: 'Pending',
    remark: '-'
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
    status: 'Pending',
    remark: '-'
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
    remark: '-'
  }
];

function PendingDeposits() {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    memberId: '',
    memberName: '',
    transactionId: ''
  });
  const [pageSize, setPageSize] = useState('10');

  const visibleRows = useMemo(() => {
    const loweredMemberId = filters.memberId.toLowerCase();
    const loweredMemberName = filters.memberName.toLowerCase();

    const filteredRows = pendingRows.filter((row) => {
      return (
        (!filters.memberId || row.memberId.toLowerCase().includes(loweredMemberId)) &&
        (!filters.memberName || row.memberName.toLowerCase().includes(loweredMemberName)) &&
        (!filters.transactionId || row.transactionId.includes(filters.transactionId))
      );
    });

    return filteredRows.slice(0, Number(pageSize));
  }, [filters, pageSize]);

  const onFilterChange = (key) => (event) => {
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <div className="pending-deposits-page">
     
      <h2 className="section-title pending-screen-title">Pending Deposits</h2>

      <section className="panel pending-panel">
        <div className="btn-row pending-export-row">
          <button type="button" className="btn-outline pending-export-btn">XLS</button>
          <button type="button" className="btn-outline pending-export-btn">PDF</button>
        </div>

        <div className="pending-filter-row">
          <input type="date" className="text-input pending-filter-input" value={filters.startDate} onChange={onFilterChange('startDate')} />
          <input type="date" className="text-input pending-filter-input" value={filters.endDate} onChange={onFilterChange('endDate')} />
          <input type="text" className="text-input pending-filter-input" placeholder="Member Id" value={filters.memberId} onChange={onFilterChange('memberId')} />
          <input type="text" className="text-input pending-filter-input" placeholder="Member Name" value={filters.memberName} onChange={onFilterChange('memberName')} />
          <input type="text" className="text-input pending-filter-input" placeholder="Transaction ID" value={filters.transactionId} onChange={onFilterChange('transactionId')} />
          <select className="select-input pending-filter-input pending-size-select" value={pageSize} onChange={(event) => setPageSize(event.target.value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button type="button" className="btn-primary pending-search-btn">Search</button>
        </div>

        <div className="table-wrap pending-table-wrap">
          <table className="data-table pending-table">
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
              {visibleRows.map((row) => (
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
                  <td><button type="button" className="pending-slip-btn">VIEW</button></td>
                  <td>{row.status}</td>
                  <td>
                    <div className="pending-action-group">
                      <button type="button" className="pending-action success">✓</button>
                      <button type="button" className="pending-action change">↻</button>
                      <button type="button" className="pending-action reject">✕</button>
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

export default PendingDeposits;
