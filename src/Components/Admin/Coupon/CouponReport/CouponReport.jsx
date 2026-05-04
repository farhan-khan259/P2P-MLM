import { useMemo, useState } from 'react';
import './CouponReport.css';

const couponRows = [
  { sno: 1, couponId: 'CPN1007', memberId: 'MM101016', memberName: 'Sonali Shirke', amount: '100.00', usedInOrder: '-', usedDate: '-', expiryDate: '02-03-2024', status: 'ACTIVE' },
  { sno: 2, couponId: 'CPN1006', memberId: 'MM101015', memberName: 'Ambika Salunke', amount: '100.00', usedInOrder: 'ORD1006', usedDate: '15-02-2024', expiryDate: '25-02-2024', status: 'USED' },
  { sno: 3, couponId: 'CPN1005', memberId: 'MM101014', memberName: 'Rajkiran Saluke', amount: '100.00', usedInOrder: '-', usedDate: '-', expiryDate: '25-02-2024', status: 'EXPIRED' },
  { sno: 4, couponId: 'CPN1004', memberId: 'MM101013', memberName: 'Amit Sharma', amount: '100.00', usedInOrder: 'ORD1004', usedDate: '10-02-2024', expiryDate: '16-02-2024', status: 'USED' },
  { sno: 5, couponId: 'CPN1003', memberId: 'MM101012', memberName: 'Saddam Shaikh', amount: '100.00', usedInOrder: 'ORD1003', usedDate: '09-02-2024', expiryDate: '10-02-2024', status: 'USED' },
  { sno: 6, couponId: 'CPN1002', memberId: 'MM101011', memberName: 'Thomas Anthony', amount: '100.00', usedInOrder: 'ORD1002', usedDate: '07-02-2024', expiryDate: '07-02-2024', status: 'USED' },
  { sno: 7, couponId: 'CPN1001', memberId: 'MM101010', memberName: 'Razman Hussain', amount: '100.00', usedInOrder: 'ORD1001', usedDate: '05-02-2024', expiryDate: '05-02-2024', status: 'USED' }
];

const statusClass = {
  ACTIVE: 'status-pill status-pill-active',
  USED: 'status-pill status-pill-used',
  EXPIRED: 'status-pill status-pill-expired'
};

function CouponReport() {
  const [filters, setFilters] = useState({ couponId: '', memberId: '', memberName: '', usedInOrder: '', usedDate: '', status: '' });

  const rows = useMemo(() => {
    return couponRows.filter((row) => {
      const values = [row.couponId, row.memberId, row.memberName, row.usedInOrder, row.usedDate, row.status].join(' ').toLowerCase();
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return values.includes(value.toLowerCase()) || String(row[key] || '').toLowerCase().includes(value.toLowerCase());
      });
    });
  }, [filters]);

  const updateFilter = (key) => (event) => setFilters((previous) => ({ ...previous, [key]: event.target.value }));

  return (
    <div className="coupon-report-page">
    

      <section className="coupon-report-panel">
        <h2 className="coupon-report-heading">DISCOUNT COUPON</h2>

        <div className="coupon-report-toolbar">
          <div className="coupon-filter-row">
            <input className="coupon-filter-input" placeholder="COUPON ID" value={filters.couponId} onChange={updateFilter('couponId')} />
            <input className="coupon-filter-input" placeholder="MEMBER ID" value={filters.memberId} onChange={updateFilter('memberId')} />
            <input className="coupon-filter-input" placeholder="MEMBER NAME" value={filters.memberName} onChange={updateFilter('memberName')} />
            <input className="coupon-filter-input" placeholder="USED IN ORDER" value={filters.usedInOrder} onChange={updateFilter('usedInOrder')} />
            <input className="coupon-filter-input" placeholder="USED DATE" value={filters.usedDate} onChange={updateFilter('usedDate')} />
            <select className="coupon-filter-input coupon-status-select" value={filters.status} onChange={updateFilter('status')}>
              <option value="">STATUS</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="USED">USED</option>
              <option value="EXPIRED">EXPIRED</option>
            </select>
            <button type="button" className="btn-primary coupon-search-btn">SERCH</button>
          </div>

          
        </div>

        <div className="btn-row tds-export-row" aria-label="Export options">
          <button type="button" className="btn-outline tds-export-btn" aria-label="Export Excel">XLS</button>
          <button type="button" className="btn-outline tds-export-btn" aria-label="Export PDF">PDF</button>
        </div>

        <div className="table-wrap coupon-table-wrap">
          <table className="data-table coupon-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>COUPON ID</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>AMOUNT</th>
                <th>USED IN ORDER</th>
                <th>USED DATE</th>
                <th>EXPIRY DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.couponId}>
                  <td>{row.sno}</td>
                  <td>{row.couponId}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.amount}</td>
                  <td>{row.usedInOrder}</td>
                  <td>{row.usedDate}</td>
                  <td>{row.expiryDate}</td>
                  <td><span className={statusClass[row.status]}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer coupon-pagination-wrap">
          <div className="pagination">
            <button type="button" className="page-btn">«</button>
            <button type="button" className="page-btn">‹</button>
            <button type="button" className="page-btn active">1</button>
            <button type="button" className="page-btn">2</button>
            <button type="button" className="page-btn">3</button>
            <button type="button" className="page-btn">4</button>
            <button type="button" className="page-btn">5</button>
            <button type="button" className="page-btn">6</button>
            <button type="button" className="page-btn">7</button>
            <button type="button" className="page-btn">›</button>
            <button type="button" className="page-btn">»</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CouponReport;