import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../Common/UserLayout.css';
import './OrderDetails.css';
import firstItemImage from '../../../../Assets/Pictures/fourpads.jpeg';
import secondItemImage from '../../../../Assets/Pictures/slimfit.jpeg';

const orderDetailsById = {
  ORD1001: {
    orderNo: 'ORD1001',
    orderDate: '23-04-2026 04.36 PM',
    paymentMode: 'E-wallet',
    orderItems: 2,
    orderStatus: 'Pending',
    paymentStatus: 'Paid',
    totalPrice: 1600.0,
    shippingCharge: 50.0,
    discountCoupon: 100.0,
    finalTotal: 1550.0,
    shippingInformation: [
      { label: 'Name', value: 'Nishikant Kailas Shirke' },
      { label: 'Contact No', value: '+917020110380' },
      { label: 'Address', value: 'B-901, Oxford Paradise,' },
      { label: 'Area', value: 'Vidya Valley School Road Susgaon' },
      { label: 'State,City', value: 'Maharashtra , Pune' },
      { label: 'Pin Code', value: '411021' }
    ],
    items: [
      {
        name: 'Elcon Anion Sanitary Pad - 40',
        price: 1000,
        quantity: 1,
        totalPrice: 1000,
        image: firstItemImage
      },
      {
        name: 'Slim Fit',
        price: 300,
        quantity: 2,
        totalPrice: 600,
        image: secondItemImage
      }
    ]
  }
};

const fallbackOrder = {
  orderNo: 'ORD1001',
  orderDate: '23-04-2026 04.36 PM',
  paymentMode: 'E-wallet',
  orderItems: 2,
  orderStatus: 'Pending',
  paymentStatus: 'Paid',
  totalPrice: 1600.0,
  shippingCharge: 50.0,
  discountCoupon: 100.0,
  finalTotal: 1550.0,
  shippingInformation: [
    { label: 'Name', value: 'Nishikant Kailas Shirke' },
    { label: 'Contact No', value: '+917020110380' },
    { label: 'Address', value: 'B-901, Oxford Paradise,' },
    { label: 'Area', value: 'Vidya Valley School Road Susgaon' },
    { label: 'State,City', value: 'Maharashtra , Pune' },
    { label: 'Pin Code', value: '411021' }
  ],
  items: [
    {
      name: 'Elcon Anion Sanitary Pad - 40',
      price: 1000,
      quantity: 1,
      totalPrice: 1000,
      image: firstItemImage
    },
    {
      name: 'Slim Fit',
      price: 300,
      quantity: 2,
      totalPrice: 600,
      image: secondItemImage
    }
  ]
};

function PrinterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 9V4h10v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7 17h10v3H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <path d="M6 9h12a2 2 0 0 1 2 2v4h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="5" y="11" width="4" height="3" rx="0.8" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

function getFieldLabel(label) {
  return label;
}

function OrderDetails() {
  const { orderNo } = useParams();
  const navigate = useNavigate();
  const order = useMemo(() => orderDetailsById[orderNo] ?? fallbackOrder, [orderNo]);

  const handlePrintInvoice = () => {
    window.print();
  };

  const handleBackToOrders = () => {
    navigate('/user/product/my-orders');
  };

  return (
    <div className="user-order-details-page">
      <div className="user-order-details-shell">
      

        <div className="order-details-toolbar">
          <h1 className="order-details-title">Order Details - {order.orderNo}</h1>

          <button type="button" className="order-print-btn" onClick={handlePrintInvoice}>
            <PrinterIcon />
            <span>Print Invoice</span>
          </button>
        </div>

        <section className="order-info-grid">
          <article className="order-info-card">
            <div className="order-info-card__header">Order Overview</div>
            <div className="order-info-list">
              <div className="order-info-row">
                <span className="order-info-label">Order No</span>
                <span className="order-info-value">{order.orderNo}</span>
              </div>
              <div className="order-info-row">
                <span className="order-info-label">Order Date</span>
                <span className="order-info-value">{order.orderDate}</span>
              </div>
              <div className="order-info-row">
                <span className="order-info-label">Payment Mode</span>
                <span className="order-info-value">{order.paymentMode}</span>
              </div>
              <div className="order-info-row">
                <span className="order-info-label">Order Items</span>
                <span className="order-info-value">{order.orderItems}</span>
              </div>
              <div className="order-info-row">
                <span className="order-info-label">Order Status</span>
                <span className="order-info-value">{order.orderStatus}</span>
              </div>
              <div className="order-info-row">
                <span className="order-info-label">Order Payment Status</span>
                <span className="order-info-value">{order.paymentStatus}</span>
              </div>
            </div>
          </article>

          <article className="order-info-card">
            <div className="order-info-card__header">Order Summary</div>
            <div className="order-info-list">
              <div className="order-info-row">
                <span className="order-info-label">Total Price</span>
                <span className="order-info-value">{order.totalPrice.toFixed(2)}</span>
              </div>
              <div className="order-info-row">
                <span className="order-info-label">+ Shipping Charge</span>
                <span className="order-info-value">+{order.shippingCharge.toFixed(2)}</span>
              </div>
              <div className="order-info-row">
                <span className="order-info-label">- Discount Coupon</span>
                <span className="order-info-value">{order.discountCoupon.toFixed(2)}</span>
              </div>
              <div className="order-info-row order-info-row--total">
                <span className="order-info-label">Total</span>
                <span className="order-info-value">{order.finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </article>

          <article className="order-info-card">
            <div className="order-info-card__header">Shipping Information</div>
            <div className="order-info-list">
              {order.shippingInformation.map((field) => (
                <div className="order-info-row" key={field.label}>
                  <span className="order-info-label">{getFieldLabel(field.label)}</span>
                  <span className="order-info-value">{field.value}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="order-items-card">
          <div className="table-wrap order-items-table-wrap">
            <table className="user-table order-items-table">
              <thead>
                <tr>
                  <th>Item / Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.name}>
                    <td data-label="Item / Product Name">
                      <div className="order-item-product">
                        <img className="order-item-thumb" src={item.image} alt={item.name} />
                        <span className="order-item-name">{item.name}</span>
                      </div>
                    </td>
                    <td data-label="Price">{item.price.toFixed(2)}</td>
                    <td data-label="Quantity">{item.quantity}</td>
                    <td data-label="Total Price">{item.totalPrice.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="order-details-footer">
          <button type="button" className="order-back-btn" onClick={handleBackToOrders}>
            Back to Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
