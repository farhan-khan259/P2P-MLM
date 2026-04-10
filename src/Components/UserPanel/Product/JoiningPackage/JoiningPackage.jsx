import '../../Common/UserLayout.css';
import './JoiningPackage.css';
import saliconpads from '../../../../Assets/Pictures/saliconpads.jpeg';
import elconanionpads from '../../../../Assets/Pictures/elconanionpads.jpeg';
import calciiumdietry from '../../../../Assets/Pictures/calciiumdietry.jpeg';
import calciumdietry from '../../../../Assets/Pictures/calciumdietry.jpeg';
import diabecare from '../../../../Assets/Pictures/diabecare.jpeg';
import omega3 from '../../../../Assets/Pictures/omega3.jpeg';
import watchultra from '../../../../Assets/Pictures/watchultra.jpeg';

const joiningProducts = [
  {
    id: 1,
    name: 'Sanitary Pads - 6',
    price: 300,
    image: saliconpads
  },
  {
    id: 2,
    name: 'Sanitary Pads - 32',
    price: 900,
    image: elconanionpads
  },
  {
    id: 3,
    name: 'Protein Powder',
    price: 2500,
    image: calciiumdietry
  },
  {
    id: 4,
    name: 'Bone Fit',
    price: 1500,
    image: calciumdietry
  },
  {
    id: 5,
    name: 'Diabe Care',
    price: 500,
    image: diabecare
  },
  {
    id: 6,
    name: 'Calcium',
    price: 300,
    image: calciumdietry
  },
  {
    id: 7,
    name: 'Omega - 3',
    price: 300,
    image: omega3
  },
  {
    id: 8,
    name: 'Slim Fit',
    price: 900,
    image: watchultra
  }
];

function JoiningPackage() {
  return (
    <div className="user-product-page">
      <div className="user-panel user-product-panel">
        <h2 className="user-product-heading">JOINING PACKAGE</h2>

        <div className="user-product-grid">
          {joiningProducts.map((product) => (
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

export default JoiningPackage;
