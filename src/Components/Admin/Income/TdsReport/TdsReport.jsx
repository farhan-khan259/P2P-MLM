import { useMemo, useState } from 'react';
import './TdsReport.css';

const tdsRows = [
  {
    sno: 1,
    memberId: 'MM101010',
    memberName: 'Sonali Shirke',
    mobileNo: '9822505060',
    email: 'htytyyh@gmail.com',
    panNo: 'BHWPS0869P',
    totalTds: '5057.00'
  },
  {
    sno: 2,
    memberId: 'MM101011',
    memberName: 'Ambika Salunke',
    mobileNo: '9822445566',
    email: 'htytyyh@gmail.com',
    panNo: 'HFGYH5789H',
    totalTds: '4095.00'
  },
  {
    sno: 3,
    memberId: 'MM101012',
    memberName: 'Rajkiran Saluke',
    mobileNo: '9822553322',
    email: 'htytyyh@gmail.com',
    panNo: 'HFGYH5789H',
    totalTds: '32190.00'
  },
  {
    sno: 4,
    memberId: 'MM101013',
    memberName: 'Amit Sharma',
    mobileNo: '9822778899',
    email: 'htytyyh@gmail.com',
    panNo: 'HFGYH5789H',
    totalTds: '2228.00'
  },
  {
    sno: 5,
    memberId: 'MM101014',
    memberName: 'Saddam Shaikh',
    mobileNo: '9822564545',
    email: '4htytyyh@gmail.com',
    panNo: 'HFGYH5789H',
    totalTds: '5000.00'
  },
  {
    sno: 6,
    memberId: 'MM101015',
    memberName: 'Thomas Anthony',
    mobileNo: '9822889955',
    email: '5htytyyh@gmail.com',
    panNo: 'HFGYH5789H',
    totalTds: '3000.00'
  },
  {
    sno: 7,
    memberId: 'MM101016',
    memberName: 'Razman Hussain',
    mobileNo: '9822553322',
    email: 'Hfgyh@gmail.com',
    panNo: 'HFGYH5789H',
    totalTds: '2000.00'
  }
];

function TdsReport() {
  const [filters, setFilters] = useState({ memberId: '', panNo: '', startDate: '', endDate: '' });
  const [pageSize, setPageSize] = useState('10');

  const rows = useMemo(() => {
    const memberId = filters.memberId.toLowerCase();
    const panNo = filters.panNo.toLowerCase();

    return tdsRows
      .filter((row) => {
        return (
          (!memberId || row.memberId.toLowerCase().includes(memberId)) &&
          (!panNo || row.panNo.toLowerCase().includes(panNo))
        );
      })
      .slice(0, Number(pageSize));
  }, [filters, pageSize]);

  const onFilterChange = (key) => (event) => {
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <div className="tds-report-page">
    
      <h2 className="section-title tds-screen-title">TDS Report</h2>

      <section className="panel tds-panel">
       

        <div className="tds-filter-row">
          <input type="text" className="text-input tds-filter-input" placeholder="MEMBER ID" value={filters.memberId} onChange={onFilterChange('memberId')} />
          <input type="text" className="text-input tds-filter-input" placeholder="PAN NO" value={filters.panNo} onChange={onFilterChange('panNo')} />
          <input type="date" className="text-input tds-filter-input" value={filters.startDate} onChange={onFilterChange('startDate')} />
          <input type="date" className="text-input tds-filter-input" value={filters.endDate} onChange={onFilterChange('endDate')} />
          <select className="select-input tds-filter-input tds-size-select" value={pageSize} onChange={(event) => setPageSize(event.target.value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button type="button" className="btn-primary tds-search-btn">Search</button>
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
                <th>MEMBER ID</th>
                <th>Member Name</th>
                <th>Mobile No</th>
                <th>E-mail ID.</th>
                <th>PAN NO</th>
                <th>Total TDS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.sno}-${row.memberId}`}>
                  <td>{row.sno}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.mobileNo}</td>
                  <td>{row.email}</td>
                  <td>{row.panNo}</td>
                  <td>{row.totalTds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer" style={{ justifyContent: 'center', marginTop: '12px' }}>
          <div className="pagination">
            <button type="button" className="page-btn">&laquo;</button>
            <button type="button" className="page-btn">&lsaquo;</button>
            <button type="button" className="page-btn active">1</button>
            <button type="button" className="page-btn">2</button>
            <button type="button" className="page-btn">3</button>
            <button type="button" className="page-btn">4</button>
            <button type="button" className="page-btn">5</button>
            <button type="button" className="page-btn">6</button>
            <button type="button" className="page-btn">7</button>
            <button type="button" className="page-btn">&rsaquo;</button>
            <button type="button" className="page-btn">&raquo;</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TdsReport;
