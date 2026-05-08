import '../../../Common/AdminLayout.css';
import './AddShoppingProducts.css';

function AddShoppingProducts() {
  const contentFieldStyle = {
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '110px',
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid #d6dbe5',
    font: 'inherit',
    resize: 'vertical',
    background: '#fff'
  };

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '14px',
    marginTop: '14px'
  };

  const imageUploadGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '12px',
    width: '100%'
  };

  const imageUploadFieldStyle = {
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <section className="panel admin-add-product-panel">
      <h2 className="section-title admin-add-product-title">ADD SHOPPING PRODUCTS</h2>

      <div className="admin-add-product-card">
        <div className="admin-add-product-grid">
          <div className="admin-add-product-left">
            <div className="admin-add-product-table" role="group" aria-label="basic-product-details">
              <label className="admin-add-product-row">
                <span>Category</span>
                <select defaultValue="Electronics">
                  <option value="Healthcare">Healthcare</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Mens Fashion">Mens Fashion</option>
                  <option value="Electronics Appliances">Electronics Appliances</option>
                </select>
              </label>
              <label className="admin-add-product-row">
                <span>Product Name</span>
                <input type="text" defaultValue="Foce Watch" />
              </label>
              <label className="admin-add-product-row">
                <span>Product Code</span>
                <input type="text" defaultValue="PDT-201" />
              </label>
              <label className="admin-add-product-row">
                <span>HSN Code</span>
                <input type="text" defaultValue="8517" />
              </label>
              <label className="admin-add-product-row">
                <span>Stock</span>
                <select defaultValue="In Stock">
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </label>
              <div className="admin-add-product-row" style={{ alignItems: 'flex-start' }}>
                <span>Product Images</span>
                <div style={imageUploadGridStyle}>
                  <label className="admin-add-product-row">
                    <span>Image 1</span>
                    <input type="file" accept="image/*" style={imageUploadFieldStyle} />
                  </label>
                  <label className="admin-add-product-row">
                    <span>Image 2</span>
                    <input type="file" accept="image/*" style={imageUploadFieldStyle} />
                  </label>
                  <label className="admin-add-product-row">
                    <span>Image 3</span>
                    <input type="file" accept="image/*" style={imageUploadFieldStyle} />
                  </label>
                  <label className="admin-add-product-row">
                    <span>Image 4</span>
                    <input type="file" accept="image/*" style={imageUploadFieldStyle} />
                  </label>
                  <label className="admin-add-product-row">
                    <span>Image 5</span>
                    <input type="file" accept="image/*" style={imageUploadFieldStyle} />
                  </label>
                </div>
              </div>
              <div style={contentGridStyle}>
                <label className="admin-add-product-row">
                  <span>Description</span>
                  <textarea
                    rows="5"
                    defaultValue="Shopping product details and description."
                    style={contentFieldStyle}
                  />
                </label>
                <label className="admin-add-product-row">
                  <span>Specifications</span>
                  <textarea
                    rows="5"
                    defaultValue="Type: Product Listing\nLayout: Image gallery with specification table\nTheme: User panel responsive card design\nInteraction: Card click, tabs, and carousel controls"
                    style={contentFieldStyle}
                  />
                </label>
                <label className="admin-add-product-row">
                  <span>Features &amp; Benefits</span>
                  <textarea
                    rows="5"
                    defaultValue="Responsive layout for desktop, tablet, and mobile screens.\nTabbed content area that updates without changing the page.\nImage carousel with arrow controls for fast product preview.\nClean CTA area that keeps the purchase flow simple."
                    style={contentFieldStyle}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="admin-add-product-right">
            <div className="admin-add-product-table" role="group" aria-label="pricing-product-details">
              <label className="admin-add-product-row">
                <span>M.R.P Price</span>
                <input type="text" defaultValue="950" />
              </label>
              <label className="admin-add-product-row">
                <span>DP Price</span>
                <input type="number" defaultValue="900" />
              </label>
              <label className="admin-add-product-row">
                <span>Delivery Charge</span>
                <input type="text" defaultValue="free" />
              </label>
              <label className="admin-add-product-row">
                <span>Level Point</span>
                <input type="number" defaultValue="100" />
              </label>
              <label className="admin-add-product-row">
                <span>B.V Point</span>
                <input type="number" defaultValue="0" />
              </label>
              <label className="admin-add-product-row">
                <span>Size</span>
                <input type="text" defaultValue="Standard" />
              </label>
              <label className="admin-add-product-row">
                <span>Color</span>
                <input type="text" defaultValue="Black" />
              </label>
              <label className="admin-add-product-row">
                <span>Weight</span>
                <input type="text" defaultValue="500gm" />
              </label>
              <label className="admin-add-product-row">
                <span>Dimension</span>
                <input type="text" defaultValue="300mm x 200mm x 100mm" />
              </label>
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

export default AddShoppingProducts;
