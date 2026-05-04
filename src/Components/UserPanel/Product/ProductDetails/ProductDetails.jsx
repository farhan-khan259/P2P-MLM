import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import fallbackOne from '../../../../Assets/Pictures/ai1.jpeg';
import fallbackTwo from '../../../../Assets/Pictures/ai2.jpeg';
import fallbackThree from '../../../../Assets/Pictures/ai3.jpeg';
import fallbackFour from '../../../../Assets/Pictures/ai6.jpeg';
import fallbackFive from '../../../../Assets/Pictures/ai7.jpeg';

const tabConfig = {
  description: {
    title: 'DESCRIPTION',
    content: [
      'This product is presented in a clean, premium layout that helps the user review the item before purchase.',
      'The section is designed to keep the focus on product information, pricing, and purchase readiness while keeping the same visual theme used throughout the user panel.'
    ]
  },
  specification: {
    title: 'SPECIFICATION',
    content: [
      'Type: Product Listing',
      'Layout: Image gallery with specification table',
      'Theme: User panel responsive card design',
      'Interaction: Card click, tabs, and carousel controls'
    ]
  },
  features: {
    title: 'FEATURES & BENEFITS',
    content: [
      'Responsive layout for desktop, tablet, and mobile screens.',
      'Tabbed content area that updates without changing the page.',
      'Image carousel with arrow controls for fast product preview.',
      'Clean CTA area that keeps the purchase flow simple.'
    ]
  },
  pdf: {
    title: 'DOWNLOAD PDF',
    content: [
      'Use this tab to download the product sheet or brochure in PDF format.',
      'The button below can be connected to your real PDF file later without changing the layout.'
    ]
  }
};

const buildDetails = (product) => {
  const name = product?.name || 'Calcium';
  const category = product?.category || 'Health Care Products';
  const price = product?.price ?? 350;
  const mrp = product?.mrp ?? 375;
  const isElectronics = /electronic|watch|head|laptop|phone|pod/i.test(`${name} ${category}`);

  return [
    { label: 'PRODUCT NAME', value: name },
    { label: 'PRODUCT CODE', value: `PDT-${String(product?.id || 101).padStart(3, '0')}` },
    { label: 'CATEGORY', value: category },
    { label: 'HSN CODE', value: isElectronics ? '8517' : '4440' },
    { label: 'M.R.P PRICE', value: `₹ ${mrp} (Inclusive of all taxes)` },
    { label: 'DP PRICE', value: `₹ ${price} (Inclusive of all taxes)` },
    { label: 'DELIVERY CHARGE', value: 'free' },
    { label: 'LEVEL POINT', value: isElectronics ? '100' : '200' },
    { label: 'B.V POINT', value: isElectronics ? '0' : '0' },
    { label: 'SIZE', value: isElectronics ? 'Standard' : 'XL' },
    { label: 'COLOR', value: isElectronics ? 'Black' : 'Green' },
    { label: 'WEIGHT', value: '500gm' },
    { label: 'DIMENSION', value: '300mm x 200mm x 100mm' }
  ];
};

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [activeTab, setActiveTab] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryImages = useMemo(() => {
    const images = [
      product?.image || fallbackOne,
      fallbackTwo,
      fallbackThree,
      fallbackFour,
      fallbackFive
    ];

    return images.filter(Boolean).slice(0, 5);
  }, [product]);

  const details = useMemo(() => buildDetails(product), [product]);

  const activeTabData = tabConfig[activeTab];

  const handlePrevious = () => {
    setActiveImageIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

  const handleAddToCart = () => {
    navigate('/user/product/my_cart');
  };

  return (
    <div className="product-details-page user-product-page">
      <div className="user-panel product-details-shell">
     
        <h2 className="product-details-page-title">Product Details</h2>

        <div className="product-details-grid">
          <section className="product-preview-card">
            <div className="carousel-frame">
              <button type="button" className="carousel-arrow carousel-arrow-left" onClick={handlePrevious} aria-label="Previous image">
                <span aria-hidden="true">‹</span>
              </button>

              <div className="carousel-image-wrap">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={product?.name || 'Product preview'}
                  className="carousel-image"
                />
              </div>

              <button type="button" className="carousel-arrow carousel-arrow-right" onClick={handleNext} aria-label="Next image">
                <span aria-hidden="true">›</span>
              </button>
            </div>

            <div className="carousel-dots" aria-label="Product image thumbnails">
              {galleryImages.map((image, index) => (
                <button
                  key={image + index}
                  type="button"
                  className={`carousel-dot ${index === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                />
              ))}
            </div>
          </section>

          <section className="product-spec-card">
            <table className="product-spec-table">
              <tbody>
                {details.map((detail) => (
                  <tr key={detail.label}>
                    <th>{detail.label}</th>
                    <td>{detail.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

        <section className="product-tabs-card">
          <div className="product-tabs-nav" role="tablist" aria-label="Product details tabs">
            {Object.entries(tabConfig).map(([key, tab]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeTab === key}
                className={`product-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="product-tab-panel" role="tabpanel">
            {activeTab !== 'pdf' ? (
              <>
                <p className="product-tab-lead">{activeTabData.content[0]}</p>
                {activeTab === 'description' ? (
                  <p className="product-tab-copy">{activeTabData.content[1]}</p>
                ) : (
                  <ul className="product-tab-list">
                    {activeTabData.content.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <div className="product-pdf-panel">
                <p className="product-tab-copy">{activeTabData.content[0]}</p>
                <p className="product-tab-copy">{activeTabData.content[1]}</p>
                <button type="button" className="product-pdf-btn">
                  Download PDF
                </button>
              </div>
            )}
          </div>
        </section>

        <div className="product-details-footer">
          <button type="button" className="product-details-cart-btn" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;