import '../../../Common/AdminLayout.css';
import './AddJoiningPackage.css';

const specRows = [
  { label: 'Frequency Range', value: '10-20000Hz' },
  { label: 'Impedence', value: '32 ohms' },
  { label: 'Sensitivity', value: '56.2+- db' },
  { label: 'Weight', value: '260 g' },
  { label: 'Dimension', value: '250 x 88 x 74mm' }
];

function AddJoiningPackage() {
  return (
    <section className="panel admin-add-product-panel">
      <h2 className="section-title admin-add-product-title">ADD JOINING PACKAGE</h2>

      <div className="admin-add-product-card">
        <div className="admin-add-product-grid">
          <div className="admin-add-product-left">
            <div className="admin-add-product-table" role="group" aria-label="basic-product-details">
              <label className="admin-add-product-row">
                <span>Category</span>
                <select defaultValue="Select">
                  <option value="Select">Select</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Personal Care">Personal Care</option>
                </select>
              </label>
              <label className="admin-add-product-row">
                <span>Product Name</span>
                <input type="text" defaultValue="Sanitory Pad" />
              </label>
              <label className="admin-add-product-row">
                <span>HSN/Product Code</span>
                <input type="text" defaultValue="4440" />
              </label>
              <label className="admin-add-product-row">
                <span>Quantity</span>
                <input type="number" defaultValue="500" />
              </label>
              <label className="admin-add-product-row">
                <span>Size</span>
                <input type="text" defaultValue="XL" />
              </label>
              <label className="admin-add-product-row">
                <span>Color</span>
                <input type="text" defaultValue="-" />
              </label>
              <label className="admin-add-product-row">
                <span>Main Photo</span>
                <input type="file" />
              </label>
            </div>

            <textarea
              className="admin-add-product-description"
              rows="10"
              placeholder="Product description..."
              defaultValue=""
            />
          </div>

          <div className="admin-add-product-right">
            <div className="admin-add-product-table" role="group" aria-label="pricing-product-details">
              <label className="admin-add-product-row">
                <span>Price (MRP)</span>
                <input type="text" defaultValue="0045" />
              </label>
              <label className="admin-add-product-row">
                <span>DP Price</span>
                <input type="number" defaultValue="350" />
              </label>
              <label className="admin-add-product-row">
                <span>Discount</span>
                <input type="number" defaultValue="300" />
              </label>
              <label className="admin-add-product-row">
                <span>Shipping Charge</span>
                <input type="number" defaultValue="0" />
              </label>
              <label className="admin-add-product-row">
                <span>GST</span>
                <input type="number" defaultValue="0" />
              </label>
              <label className="admin-add-product-row">
                <span>Level Plan</span>
                <input type="number" defaultValue="200" />
              </label>
              <div className="admin-add-product-row admin-add-product-row-radio">
                <span>Show Online</span>
                <div>
                  <label>
                    <input type="radio" name="joining-show-online" defaultChecked /> Yes
                  </label>
                  <label>
                    <input type="radio" name="joining-show-online" /> No
                  </label>
                </div>
              </div>
            </div>

            <h3 className="admin-add-product-spec-title">Product Specifications</h3>
            <div className="admin-add-product-spec-list">
              {specRows.map((spec) => (
                <div key={spec.label} className="admin-add-product-spec-row">
                  <span>{spec.label}</span>
                  <input type="text" defaultValue={spec.value} />
                  <button type="button" className="admin-add-product-delete" aria-label={`Delete ${spec.label}`}>
                    X
                  </button>
                </div>
              ))}
              <div className="admin-add-product-spec-add-row">
                <button type="button" className="admin-add-product-spec-add" aria-label="Add specification">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-add-product-actions">
          <button type="button" className="btn-danger admin-add-product-btn-reset">
            Reset
          </button>
          <button type="button" className="btn-primary admin-add-product-btn-submit">
            Add
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddJoiningPackage;
