import '../../Common/UserLayout.css';
import './RepurchaseProducts.css';
import calciumdietry from '../../../../Assets/Pictures/ai1.jpeg';
import diabecare from '../../../../Assets/Pictures/ai2.jpeg';
import omega3 from '../../../../Assets/Pictures/ai3.jpeg';
import saliconpads from '../../../../Assets/Pictures/ai4.jpeg';
import elconanionpads from '../../../../Assets/Pictures/ai5.jpeg';
import watch from '../../../../Assets/Pictures/ai6.jpeg';
import watchultra from '../../../../Assets/Pictures/ai7.jpeg';
import handfree from '../../../../Assets/Pictures/ai8.jpeg';
import headphones from '../../../../Assets/Pictures/ai9.jpeg';
import laptop from '../../../../Assets/Pictures/ai10.jpeg';

const repurchaseProducts = [
  {
    id: 1,
    name: 'Elcon Calcium - 60 Tab',
    category: 'Healthcare',
    stock: 'In Stock',
    mrp: 350,
    price: 300,
    image: calciumdietry
  },
  {
    id: 2,
    name: 'Elcon Omega 3 - 60 Tab',
    category: 'Healthcare',
    stock: 'Out of Stock',
    mrp: 350,
    price: 300,
    image: omega3
  },
  {
    id: 3,
    name: 'Elcon Diabe Care - 60 Tab',
    category: 'Healthcare',
    stock: 'In Stock',
    mrp: 350,
    price: 300,
    image: diabecare
  },
  {
    id: 4,
    name: 'Elcon Anion Sanitary Pads - 32',
    category: 'Healthcare',
    stock: 'Out of Stock',
    mrp: 350,
    price: 300,
    image: elconanionpads
  },
  {
    id: 5,
    name: 'Elcon Anion Sanitary Pads - 8',
    category: 'Healthcare',
    stock: 'In Stock',
    mrp: 350,
    price: 300,
    image: saliconpads
  },
  {
    id: 6,
    name: 'Gold Head Phone',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 350,
    price: 300,
    image: handfree
  },
  {
    id: 7,
    name: 'Bose Head Phone',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 350,
    price: 300,
    image: headphones
  },
  {
    id: 8,
    name: 'Foce Watch',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 350,
    price: 300,
    image: watch
  },
  {
    id: 9,
    name: 'HP Laptop - 2026',
    category: 'Electronics',
    stock: 'Out of Stock',
    mrp: 350,
    price: 300,
    image: laptop
  },
  {
    id: 10,
    name: 'Smart Watch',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 375,
    price: 325,
    image: watchultra
  }
];

function RepurchaseProducts() {
  return (
    <div className="user-product-page">
      <div className="user-panel user-product-panel">
        <h2 className="user-product-heading">Repurchase Products</h2>

        <div className="user-product-grid">
          {repurchaseProducts.map((product) => (
            <article className="user-product-card" key={product.id}>
              <div className="user-product-image-wrap">
                <img src={product.image} alt={product.name} className="user-product-image" loading="lazy" />
              </div>

              <div className="user-product-footer">
                <div className="user-product-meta">
                  <h3>{product.name}</h3>
                  <div className="user-product-meta-row">
                    <span className={`user-product-stock ${product.stock === 'In Stock' ? 'in-stock' : 'out-stock'}`}>
                      {product.stock}
                    </span>
                    <span className="user-product-category">Category : {product.category}</span>
                  </div>
                </div>

                <div className="user-product-price-row">
                  <span className="user-product-mrp">
                    M.R.P <del>{product.mrp}</del>
                  </span>
                  <span className="user-product-price">₹ {product.price}</span>
                </div>

                <button type="button" className="user-product-btn">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RepurchaseProducts;
