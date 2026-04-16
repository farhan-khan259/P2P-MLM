import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EpinFranchiseList.css';

const franchiseRows = [
  {
    id: 'EI45451278',
    name: 'AMRUTA SALUNKE',
    upi: '9822834083@ybl',
    whatsapp: '9822834083',
    city: 'PUNE',
    stock: 500,
    status: 'SHOWING'
  },
  {
    id: 'EI45451279',
    name: 'PUREX WATERTECH',
    upi: '7250444555@ybl',
    whatsapp: '7250444555',
    city: 'SATARA',
    stock: 200,
    status: 'HIDDEN'
  },
  {
    id: 'EI45451574',
    name: 'SONALI SHIRKE',
    upi: '9822895623@paytm',
    whatsapp: '9822895623',
    city: 'THANE',
    stock: 250,
    status: 'SHOWING'
  },
  {
    id: 'EI45451272',
    name: 'SNEHAL SHILIMKAR',
    upi: '8956238956@ybl',
    whatsapp: '8956238956',
    city: 'NAGPUR',
    stock: 100,
    status: 'SHOWING'
  },
  {
    id: 'EI45451273',
    name: 'MEGHA SHIRKE',
    upi: '9822568956@ybl',
    whatsapp: '9822568956',
    city: 'PATANA',
    stock: 500,
    status: 'SHOWING'
  },
  {
    id: 'EI45451274',
    name: 'DHANSHREE KATALE',
    upi: '9823568955@ybl',
    whatsapp: '9823568955',
    city: 'KOLHAPUR',
    stock: 450,
    status: 'SHOWING'
  },
  {
    id: 'EI45451275',
    name: 'RAJANI PATIL',
    upi: '9822658984@ybl',
    whatsapp: '9822658984',
    city: 'SANGALI',
    stock: 200,
    status: 'SHOWING'
  }
];

function AdminEpinFranchiseList() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ franchiseId: '', franchiseName: '', upi: '', whatsapp: '' });
  const rows = useMemo(() => {
    return franchiseRows.filter((row) => {
      return (
        (!filters.franchiseId || row.id.toLowerCase().includes(filters.franchiseId.toLowerCase())) &&
        (!filters.franchiseName || row.name.toLowerCase().includes(filters.franchiseName.toLowerCase())) &&
        (!filters.upi || row.upi.toLowerCase().includes(filters.upi.toLowerCase())) &&
        (!filters.whatsapp || row.whatsapp.toLowerCase().includes(filters.whatsapp.toLowerCase()))
      );
    });
  }, [filters]);

  const handleFilterChange = (key) => (event) => {
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <section className="panel admin-epin-franchise-panel">
      <h2 className="section-title admin-epin-franchise-title">ADD E-PIN FRANCHISE</h2>

      <div className="admin-epin-franchise-controls">
        <div className="admin-epin-franchise-filters">
          <input className="text-input admin-epin-input" placeholder="FRANCHISE ID" value={filters.franchiseId} onChange={handleFilterChange('franchiseId')} />
          <input className="text-input admin-epin-input" placeholder="FRANCHISE NAME" value={filters.franchiseName} onChange={handleFilterChange('franchiseName')} />
          <input className="text-input admin-epin-input" placeholder="UPI ID" value={filters.upi} onChange={handleFilterChange('upi')} />
          <input className="text-input admin-epin-input" placeholder="WATSAPP NO" value={filters.whatsapp} onChange={handleFilterChange('whatsapp')} />
        </div>
        <div className="admin-epin-franchise-actions">
          <button type="button" className="btn-primary admin-epin-franchise-btn" onClick={() => { setFilters({ franchiseId: '', franchiseName: '', upi: '', whatsapp: '' }); }}>
            SEARCH
          </button>
          <button type="button" className="btn-primary admin-epin-franchise-btn" onClick={() => navigate('/epin/epin-franchise/add-epin-franchise')}>
            ADD NEW
          </button>
        </div>
      </div>

      <div className="table-wrap admin-epin-franchise-table-wrap">
        <table className="data-table admin-epin-franchise-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>FRANCHISE ID</th>
              <th>FRANCHISE NAME</th>
              <th>SCANNER IMAGE</th>
              <th>UPI ID</th>
              <th>WATSAPP NO</th>
              <th>CITY</th>
              <th>EPIN STOCK</th>
              <th>ACTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>
                  <span className="admin-epin-scan-placeholder">IMG</span>
                </td>
                <td>{row.upi}</td>
                <td>{row.whatsapp}</td>
                <td>{row.city}</td>
                <td>{row.stock}</td>
                <td>
                  <div className="admin-epin-action-group">
                    <button type="button" className="admin-action-btn show">O</button>
                    <button type="button" className="admin-action-btn edit">E</button>
                    <button type="button" className="admin-action-btn delete">X</button>
                  </div>
                </td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminEpinFranchiseList;
