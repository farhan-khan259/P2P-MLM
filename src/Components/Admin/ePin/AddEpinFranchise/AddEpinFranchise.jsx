import qrCode from '../../../../Assets/Pictures/QR-Code.png';
import { useEffect, useState } from 'react';
import { getEpinFranchises, upsertEpinFranchise } from '../../../../api/managementService';
import './AddEpinFranchise.css';

function AddEpinFranchise() {
  const [franchise, setFranchise] = useState({ franchiseId: '', franchiseName: '', upiId: '', whatsappNo: '', city: '', stock: '0' });

  useEffect(() => {
    (async () => {
      try {
        const response = await getEpinFranchises();
        const first = response.franchises?.[0];
        if (first) {
          setFranchise({
            franchiseId: first.franchiseId || '',
            franchiseName: first.name || '',
            upiId: first.upi || '',
            whatsappNo: first.whatsapp || '',
            city: first.city || '',
            stock: String(first.stock || 0),
          });
        }
      } catch (error) {
        setFranchise((prev) => prev);
      }
    })();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await upsertEpinFranchise(franchise);
  };

  return (
    <div className="admin-add-epin-page">
     
      <section className="panel add-epin-panel">
        <h2 className="section-title add-epin-title">ADD-UPDATE FRANCHISE</h2>

        <form className="add-epin-card" onSubmit={handleSubmit}>
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
                    <td>{franchise.franchiseId}</td>
                  </tr>
                  <tr>
                    <th>FRANCHISE NAME</th>
                    <td>{franchise.franchiseName}</td>
                  </tr>
                  <tr>
                    <th>UPI ID</th>
                    <td>{franchise.upiId}</td>
                  </tr>
                  <tr>
                    <th>WATSAPP NO</th>
                    <td>{franchise.whatsappNo}</td>
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
            <button type="submit" className="btn-primary add-epin-action-btn">UPDATE</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddEpinFranchise;
