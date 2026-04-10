import '../../Common/AdminLayout.css';
import './JoiningPackageAdmin.css';
import { useNavigate } from 'react-router-dom';

const joiningPackageRows = [
  {
    id: 1,
    productName: 'SANITORY PADS - 6',
    category: 'HEALTHCARE',
    hsnCode: '1001',
    mrp: 950,
    dpPrice: 300,
    discount: 0,
    gst: 0,
    shipping: 0,
    levelPlan: 200,
    quantity: 500,
    status: 'SHOWING'
  },
  {
    id: 2,
    productName: 'SANITORY PADS - 32',
    category: 'MENSWARE',
    hsnCode: '0102',
    mrp: 1000,
    dpPrice: 750,
    discount: 0,
    gst: 0,
    shipping: 0,
    levelPlan: 200,
    quantity: 200,
    status: 'HIDEN'
  },
  {
    id: 3,
    productName: 'PROTEIN POWDER',
    category: 'HEALTHCARE',
    hsnCode: '1003',
    mrp: 1050,
    dpPrice: 1000,
    discount: 0,
    gst: 0,
    shipping: 0,
    levelPlan: 200,
    quantity: 250,
    status: 'SHOWING'
  },
  {
    id: 4,
    productName: 'BONE FIT',
    category: 'ELECTRONICS',
    hsnCode: '1004',
    mrp: 1050,
    dpPrice: 1000,
    discount: 0,
    gst: 0,
    shipping: 0,
    levelPlan: 200,
    quantity: 1000,
    status: 'SHOWING'
  },
  {
    id: 5,
    productName: 'DIABE CARE',
    category: 'ELECTRONICS',
    hsnCode: '2075',
    mrp: 3500,
    dpPrice: 3500,
    discount: 0,
    gst: 0,
    shipping: 0,
    levelPlan: 200,
    quantity: 500,
    status: 'SHOWING'
  },
  {
    id: 6,
    productName: 'CALCIUM',
    category: 'ELECTRONICS',
    hsnCode: '4445',
    mrp: '',
    dpPrice: '',
    discount: '',
    gst: '',
    shipping: '',
    levelPlan: '',
    quantity: '',
    status: ''
  }
];

function JoiningPackageAdmin() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="panel admin-products-panel">
        <h2 className="section-title admin-products-section-title">JOINING PACKAGE</h2>

        <div className="admin-products-filter-row">
          <input className="text-input admin-products-input admin-products-input-name" placeholder="PRODUCT NAME" />
          <input className="text-input admin-products-input admin-products-input-category" placeholder="CATEGORY" />
          <input className="text-input admin-products-input admin-products-input-hsn" placeholder="HSN/CODE" />
          <select className="select-input admin-products-input admin-products-input-status" defaultValue="status">
            <option value="status">STATUS</option>
            <option value="showing">SHOWING</option>
            <option value="hiden">HIDEN</option>
          </select>
          <select className="select-input admin-products-input admin-products-input-limit" defaultValue="100">
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
          </select>
          <div className="admin-products-filter-actions">
            <button type="button" className="btn-primary admin-products-search-btn">
              Search
            </button>
            <button
              type="button"
              className="btn-primary admin-products-search-btn"
              onClick={() => navigate('/products-package/Joining-Package/add-new')}
            >
              Add New
            </button>
          </div>
          <div className="admin-products-export-icons" aria-label="export-controls">
            <button type="button" title="Export Excel">
              XLS
            </button>
            <button type="button" title="Export PDF">
              PDF
            </button>
          </div>
        </div>

        <div className="table-wrap admin-products-table-wrap">
          <table className="data-table admin-products-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>JOINING PACKAGE</th>
                <th>IMAGE</th>
                <th>CATEGORY</th>
                <th>HSN/CODE</th>
                <th>M.R.P</th>
                <th>DP PRICE</th>
                <th>DIS(%)</th>
                <th>GST(%)</th>
                <th>SHIPPING</th>
                <th>LEVEL PLAN</th>
                <th>QUANTITY</th>
                <th>ACTION</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {joiningPackageRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.productName}</td>
                  <td>
                    <span className="admin-products-image-placeholder">IMG</span>
                  </td>
                  <td>{row.category}</td>
                  <td>{row.hsnCode}</td>
                  <td>{row.mrp}</td>
                  <td>{row.dpPrice}</td>
                  <td>{row.discount}</td>
                  <td>{row.gst}</td>
                  <td>{row.shipping}</td>
                  <td>{row.levelPlan}</td>
                  <td>{row.quantity}</td>
                  <td>
                    <div className="admin-products-action-group">
                      <button type="button" className="admin-products-action-btn show" title="View">
                        O
                      </button>
                      <button type="button" className="admin-products-action-btn edit" title="Edit">
                        E
                      </button>
                      <button type="button" className="admin-products-action-btn delete" title="Delete">
                        X
                      </button>
                    </div>
                  </td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer admin-products-table-footer">
          <div className="pagination">
            <button className="page-btn">&laquo;</button>
            <button className="page-btn">&lsaquo;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">&rsaquo;</button>
            <button className="page-btn">&raquo;</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoiningPackageAdmin;
