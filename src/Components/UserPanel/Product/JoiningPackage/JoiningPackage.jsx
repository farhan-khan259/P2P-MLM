import '../../Common/UserLayout.css';
import './JoiningPackage.css';
import saliconpads from '../../../../Assets/Pictures/pads.jpeg';
import elconanionpads from '../../../../Assets/Pictures/fourpads.jpeg';
import calciumdietry from '../../../../Assets/Pictures/calcium.jpeg';
import diabecare from '../../../../Assets/Pictures/diabecare.jpeg';
import omega3 from '../../../../Assets/Pictures/omega3.jpeg';
import watchultra from '../../../../Assets/Pictures/smartwatch.jpeg';
import watch from '../../../../Assets/Pictures/watch.jpeg';
import handfree from '../../../../Assets/Pictures/goldheadphones.jpeg';
import headphones from '../../../../Assets/Pictures/headphones.jpeg';
import laptop from '../../../../Assets/Pictures/laptop.jpeg';

const joiningProducts = [
  {
    id: 1,
    name: 'Elcon Anion Sanitary Pads - 8',
    category: 'Healthcare',
    mrp: 350,
    price: 300,
    image: saliconpads
  },
  {
    id: 2,
    name: 'Elcon Anion Sanitary Pads - 32',
    category: 'Healthcare',
    mrp: 350,
    price: 300,
    image: elconanionpads
  },
  {
    id: 3,
    name: 'Elcon Diabe Care - 8',
    category: 'Healthcare',
    mrp: 350,
    price: 300,
    image: diabecare
  },
  {
    id: 4,
    name: 'Elcon Omega -3',
    category: 'Healthcare',
    mrp: 350,
    price: 300,
    image: omega3
  },
  {
    id: 5,
    name: 'Elcon Calcium',
    category: 'Healthcare',
    mrp: 350,
    price: 300,
    image: calciumdietry
  },
  {
    id: 6,
    name: 'Elcon Smart Watch',
    category: 'Healthcare',
    mrp: 350,
    price: 300,
    image: watchultra
  },
  {
    id: 7,
    name: 'Foce Watch',
    category: 'Healthcare',
    mrp: 350,
    price: 300,
    image: watch
  },
  {
    id: 8,
    name: 'Gold Head Phone',
    category: 'Electronics Appliances',
    mrp: 350,
    price: 300,
    image: handfree
  },
  {
    id: 9,
    name: 'Bose Head Phonos',
    category: 'Electronics Appliances',
    mrp: 350,
    price: 300,
    image: headphones
  },
  {
    id: 10,
    name: 'HP LAPTOP',
    category: 'Healthcare',
    mrp: 350,
    price: 300,
    image: laptop
  }
];

function JoiningPackage() {
  return (
    <div className="user-product-page">
      <div className="user-panel user-product-panel">
        <h2 className="user-product-heading">Joining Package</h2>

        <div className="user-product-grid">
          {joiningProducts.map((product) => (
            <article className="user-product-card" key={product.id}>
              <div className="user-product-image-wrap">
                <img src={product.image} alt={product.name} className="user-product-image" loading="lazy" />
              </div>

              <div className="user-product-footer">
                <div className="user-product-meta">
                  <h3>{product.name}</h3>
                  <p>Category : {product.category}</p>
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

export default JoiningPackage;
