import { useMemo, useState } from 'react';
import './AllDeposits.css';

const allDepositRows = [
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
    status: 'Succeed',
    remark: '20 pins'
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
    remark: 'W wallet'
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
    remark: 'e wallet'
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
    status: 'Rejected',
    remark: 'wrong slip'
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
    status: 'Rejected',
    remark: 'wrong slip'
  }
];

function AllDeposits() {
  const [filters, setFilters] = useState({ memberId: '', memberName: '', transactionId: '' });
  const [pageSize, setPageSize] = useState('10');

  const rows = useMemo(() => {
    const memberId = filters.memberId.toLowerCase();
    const memberName = filters.memberName.toLowerCase();

    return allDepositRows
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
    <div className="all-deposits-page">
      
      <h2 className="section-title all-screen-title">All Deposits</h2>

      <section className="panel all-panel">
        <div className="btn-row all-export-row">
          <button type="button" className="btn-outline all-export-btn">XLS</button>
          <button type="button" className="btn-outline all-export-btn">PDF</button>
        </div>

        <div className="all-filter-row">
          <input type="date" className="text-input all-filter-input" />
          <input type="date" className="text-input all-filter-input" />
          <input type="text" className="text-input all-filter-input" placeholder="Member Id" value={filters.memberId} onChange={onFilterChange('memberId')} />
          <input type="text" className="text-input all-filter-input" placeholder="Member Name" value={filters.memberName} onChange={onFilterChange('memberName')} />
          <input type="text" className="text-input all-filter-input" placeholder="Transaction ID" value={filters.transactionId} onChange={onFilterChange('transactionId')} />
          <select className="select-input all-filter-input all-size-select" value={pageSize} onChange={(event) => setPageSize(event.target.value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button type="button" className="btn-primary all-search-btn">Search</button>
        </div>

        <div className="table-wrap all-table-wrap">
          <table className="data-table all-table">
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
                  <td><button type="button" className="all-slip-btn">VIEW</button></td>
                  <td>{row.status}</td>
                  <td>
                    <div className="all-action-group">
                      <button type="button" className="all-action success">✓</button>
                      <button type="button" className="all-action change">↻</button>
                      <button type="button" className="all-action reject">✕</button>
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

export default AllDeposits;
