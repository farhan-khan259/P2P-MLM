import React from 'react';
import './MyCart.css';
import omega from '../../../../Assets/Pictures/omega3.jpeg';
import watch from '../../../../Assets/Pictures/watch.jpeg';
import calcium from '../../../../Assets/Pictures/calcium.jpeg';
import slimfit from '../../../../Assets/Pictures/slimfit.jpeg';

const DeleteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h18" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 6v12c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V6" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 11v6" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 11v6" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const CartItem = ({img, title, price, qty}) => (
  <div className="mc-item">
    <div className="mc-item-left">
      <img src={img} alt="product" />
    </div>
    <div className="mc-item-mid">
      <div className="mc-title">{title}</div>
      <div className="mc-bv">B.V. Point : 100</div>
      <div className="mc-qty">
        <button className="qty-btn">-</button>
        <span className="qty-val">{qty}</span>
        <button className="qty-btn">+</button>
      </div>
    </div>
    <div className="mc-item-right">
      <div className="mc-price">₹{price}x{qty}= </div>
      <div className="mc-total"> ₹{price * qty}</div>
      <button className="mc-delete" aria-label="Delete item"><DeleteIcon/></button>
    </div>
  </div>
)

export default function MyCart(){
  return (
    <div className="mycart-page container">
     
      <div className="mc-top-row">
        <h3 className="mc-header">My Cart</h3>
        <button className="mc-clear">X Clear Cart</button>
      </div>

      <div className="mc-box">
        <CartItem img={omega} title="Elcon Omega - 3" price={550} qty={1} />
        <CartItem img={watch} title="Elcon Foce Watch" price={1200} qty={1} />
        <CartItem img={calcium} title="Elcon Calcium" price={600} qty={2} />
        <CartItem img={slimfit} title="Elcon Slim Fit" price={575} qty={2} />
      </div>

      <div className="mc-summary">
        <h4>Order Summery</h4>
        <div className="mc-row"><span>Total B.V Point =</span><strong>400</strong></div>

        <div className="mc-coupon-row">
          <input className="mc-coupon-input" placeholder="Apply Coupon Code" />
          <button className="mc-coupon-apply">Apply</button>
        </div>

        <div className="mc-row"><span>Sub Total</span><strong>₹ 4100.00</strong></div>
        <div className="mc-row"><span>Shipping Charge</span><strong>₹ 0.00</strong></div>
        <div className="mc-row coupon"><span>Coupon Discount</span><strong>- ₹ 00.00</strong></div>
        <div className="mc-total-row"><span>Total Amount</span><strong>₹ 4100.00</strong></div>

        <div className="mc-address">
          <div className="mc-address-head">Product Delivery Address
            <button className="mc-address-edit" aria-label="Edit address">⋯</button>
          </div>
          <div className="mc-address-body">
            <div className="mc-deliver">Deliver to : Sonali Shirke</div>
            <div>Flat no A-201, Oxford Paradise, Vidya Valley School Road Susgaon</div>
            <div>Maharashtra Pune - 411021</div>
          </div>
        </div>

        <div className="mc-actions">
          <button className="btn-order">Order Now</button>
         
        </div>
      </div>
    </div>
  )
}
