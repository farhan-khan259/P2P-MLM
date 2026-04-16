import qrCode from '../../../../Assets/Pictures/QR-Code.png';
import './AddEpinFranchise.css';

const franchise = {
  id: 'EL45451278',
  name: 'AMRUTA SALUNKE',
  upi: '9822895623@paytm',
  whatsapp: '9822834083',
  city: 'PUNE',
  stock: 150
};

function AddEpinFranchise() {
  return (
    <div className="admin-add-epin-page">
     
      <section className="panel add-epin-panel">
        <h2 className="section-title add-epin-title">ADD-UPDATE FRANCHISE</h2>

        <div className="add-epin-card">
          <div className="add-epin-grid">
            <div className="add-epin-qr-column">
              <div className="add-epin-qr-box">
                <img src={qrCode} alt="Franchise QR code" className="add-epin-qr-image" />
              </div>
              <div className="add-epin-qr-actions">
                <button type="button" className="btn-secondary add-epin-btn">SELECT</button>
                <button type="button" className="btn-primary add-epin-btn">ADD</button>
              </div>
            </div>

            <div className="add-epin-details-column">
              <table className="details-table">
                <tbody>
                  <tr>
                    <th>FRANCHISE ID</th>
                    <td>{franchise.id}</td>
                  </tr>
                  <tr>
                    <th>FRANCHISE NAME</th>
                    <td>{franchise.name}</td>
                  </tr>
                  <tr>
                    <th>UPI ID</th>
                    <td>{franchise.upi}</td>
                  </tr>
                  <tr>
                    <th>WATSAPP NO</th>
                    <td>{franchise.whatsapp}</td>
                  </tr>
                  <tr>
                    <th>CITY</th>
                    <td>{franchise.city}</td>
                  </tr>
                  <tr>
                    <th>E PIN STOCK</th>
                    <td>{franchise.stock}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="add-epin-actions">
            <button type="button" className="btn-danger add-epin-action-btn">EDIT</button>
            <button type="button" className="btn-primary add-epin-action-btn">UPDATE</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddEpinFranchise;
