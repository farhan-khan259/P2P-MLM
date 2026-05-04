import { useNavigate } from 'react-router-dom';
import '../../Common/UserLayout.css';
import './ShoppingProducts.css';
import watch from '../../../../Assets/Pictures/watch.jpeg';
import handfree from '../../../../Assets/Pictures/headphones.jpeg';
import goldhandfree from '../../../../Assets/Pictures/goldheadphones.jpeg';
import watchultra from '../../../../Assets/Pictures/smartwatch.jpeg';
import laptop from '../../../../Assets/Pictures/laptop.jpeg';
import airpods from '../../../../Assets/Pictures/airpods.jpeg';


const shoppingProducts = [
  {
    id: 1,
    name: 'Foce Watch',
    category: 'Mens Fashion',
    stock: 'Out of Stock',
    mrp: 950,
    price: 900,
    image: watch
  },
  {
    id: 2,
    name: 'Head Phones',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 1650,
    price: 1500,
    image: handfree
  },
  {
    id: 3,
    name: 'Smart Watch',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 2500,
    price: 2300,
    image: watchultra
  },
  {
    id: 4,
    name: 'Ear Pods',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 1350,
    price: 1200,
    image: airpods
  },
  {
    id: 5,
    name: 'Bose Earphones',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 1450,
    price: 1300,
    image: airpods
  },
  {
    id: 6,
    name: 'Acer Laptop',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 59000,
    price: 57000,
    image: laptop
  },
  {
    id: 7,
    name: 'Hp Laptop',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 65500,
    price: 63500,
    image: laptop
  },
  {
    id: 8,
    name: 'Gold Head Phone',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 375,
    price: 300,
    image: goldhandfree
  },
  {
    id: 9,
    name: 'Foce Watch',
    category: 'Mens Fashion',
    stock: 'In Stock',
    mrp: 950,
    price: 900,
    image: watch
  },
  {
    id: 10,
    name: 'HP Laptop - 2026',
    category: 'Electronics',
    stock: 'In Stock',
    mrp: 65500,
    price: 63500,
    image: laptop
  }
];

function ShoppingProducts() {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate('/user/product/product_details', { state: { product } });
  };

  return (
    <div className="user-product-page">
      <div className="user-panel user-product-panel">
        <h2 className="user-product-heading">Shopping Products</h2>

        <div className="user-product-grid">
          {shoppingProducts.map((product) => (
            <article
              className="user-product-card"
              key={product.id}
              role="button"
              tabIndex={0}
              onClick={() => handleProductClick(product)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleProductClick(product);
                }
              }}
            >
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

export default ShoppingProducts;
