import '../../Common/UserLayout.css';
import './ShoppingProducts.css';
import watch from '../../../../Assets/Pictures/watch.jpeg';
import handfree from '../../../../Assets/Pictures/handfree.jpeg';
import watchultra from '../../../../Assets/Pictures/watchultra.jpeg';
import laptop from '../../../../Assets/Pictures/laptop.jpeg';

const shoppingProducts = [
  {
    id: 1,
    name: 'Foce Watch',
    price: 900,
    image: watch
  },
  {
    id: 2,
    name: 'Head Phones',
    price: 1500,
    image: handfree
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 2300,
    image: watchultra
  },
  {
    id: 4,
    name: 'Ear Pods',
    price: 1200,
    image: handfree
  },
  {
    id: 5,
    name: 'Bose Earphones',
    price: 1300,
    image: handfree
  },
  {
    id: 6,
    name: 'Acer Laptop',
    price: 57000,
    image: laptop
  },
  {
    id: 7,
    name: 'Hp Laptop',
    price: 63500,
    image: laptop
  },
  {
    id: 8,
    name: 'Foce Watch',
    price: 900,
    image: watch
  }
];

function ShoppingProducts() {
  return (
    <div className="user-product-page">
      <div className="user-panel user-product-panel">
        <h2 className="user-product-heading">SHOPPING PRODUCTS</h2>

        <div className="user-product-grid">
          {shoppingProducts.map((product) => (
            <article className="user-product-card" key={product.id}>
              <div className="user-product-image-wrap">
                <img src={product.image} alt={product.name} className="user-product-image" loading="lazy" />
              </div>

              <div className="user-product-footer">
                <div className="user-product-meta">
                  <h3>{product.name}</h3>
                  <span>₹ {product.price}</span>
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
