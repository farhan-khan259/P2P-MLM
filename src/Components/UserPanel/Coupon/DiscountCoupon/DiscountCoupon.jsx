import './DiscountCoupon.css';

const couponCards = [
  {
    id: 'CPN1001',
    type: 'ACTIVE',
    themeClass: 'coupon-card-active',
    amount: '₹100',
    badge: 'ACTIVE',
    validText: 'Valid on Shopping Products Only',
    dateText: 'Valid Till 30 May 2026',
    buttonText: 'Use Now'
  },
  {
    id: 'CPN1002',
    type: 'USED',
    themeClass: 'coupon-card-used',
    amount: '₹100',
    badge: 'USED',
    validText: 'Valid on Shopping Products Only',
    dateText: 'Used on 15 May 2026',
    buttonText: 'View Details'
  },
  {
    id: 'CPN1003',
    type: 'EXPIRED',
    themeClass: 'coupon-card-expired',
    amount: '₹100',
    badge: 'EXPIRED',
    validText: 'Valid on Shopping Products Only',
    dateText: 'Expired on 10 May 2026',
    buttonText: 'Expired'
  }
];

const couponHistory = [
  { id: 'CPN1008', amount: '₹100.00', createdDate: '03-04-2026', expiryDate: '02-05-2026', usedDate: '-', usedInOrder: '-', status: 'ACTIVE' },
  { id: 'CPN1007', amount: '₹100.00', createdDate: '02-03-2026', expiryDate: '02-04-2026', usedDate: '₹5000.00', usedInOrder: 'ORD1010', status: 'USED' },
  { id: 'CPN1006', amount: '₹100.00', createdDate: '02-02-2026', expiryDate: '01-03-2026', usedDate: '₹5000.00', usedInOrder: 'ORD1004', status: 'USED' },
  { id: 'CPN1005', amount: '₹100.00', createdDate: '30-01-2026', expiryDate: '01-02-2026', usedDate: '-', usedInOrder: '-', status: 'EXPIRED' },
  { id: 'CPN1004', amount: '₹100.00', createdDate: '01-12-2025', expiryDate: '30-12-2025', usedDate: '₹5000.00', usedInOrder: '₹5000.00', status: 'USED' }
];

const statusClass = {
  ACTIVE: 'history-status history-status-active',
  USED: 'history-status history-status-used',
  EXPIRED: 'history-status history-status-expired'
};

function DiscountCoupon() {
  return (
    <div className="discount-coupon-page user-product-page">
      <div className="user-panel discount-coupon-shell">
        

        <section className="discount-coupon-card-section">
          <h2 className="discount-coupon-heading">DISCOUNT COUPON</h2>
          <div className="discount-coupon-cards">
            {couponCards.map((coupon) => (
              <article key={coupon.id} className={`coupon-card ${coupon.themeClass}`}>
                <div className="coupon-card-left">
                  <div className="coupon-icon">🛍</div>
                  <div className="coupon-left-label">DISCOUNT COUPON</div>
                </div>

                <div className="coupon-card-right">
                  <div className="coupon-top-row">
                    <div>
                      <div className="coupon-code-label">COUPON CODE</div>
                      <div className="coupon-code">{coupon.id}</div>
                    </div>
                    <button type="button" className="coupon-menu-btn" aria-label="Coupon actions">⋮</button>
                  </div>

                  <div className="coupon-offer-row">
                    <span className="coupon-amount">{coupon.amount}</span>
                    <span className="coupon-off-text">OFF</span>
                  </div>
                  <p className="coupon-on-shopping">ON SHOPPING</p>

                  <div className="coupon-info-row">🛒 <span>{coupon.validText}</span></div>
                  <div className="coupon-info-row">📅 <span>{coupon.dateText}</span></div>

                  <button type="button" className={`coupon-action-btn ${coupon.themeClass}`}>{coupon.buttonText}</button>
                </div>

                <div className="coupon-status-tag">{coupon.badge}</div>
              </article>
            ))}
          </div>

          <div className="coupon-caption-row">
            <span className="coupon-caption coupon-caption-active">Active Coupon</span>
            <span className="coupon-caption coupon-caption-used">Used Coupon</span>
            <span className="coupon-caption coupon-caption-expired">Expired Coupon</span>
          </div>
        </section>

        <section className="discount-coupon-history-section">
          <h2 className="discount-coupon-history-heading">DISCOUNT COUPON HISTORY</h2>

          <div className="table-wrap coupon-history-wrap">
            <table className="user-table coupon-history-table">
              <thead>
                <tr>
                  <th>COUPON ID</th>
                  <th>AMOUNT</th>
                  <th>CREATED DATE</th>
                  <th>EXPIRY DATE</th>
                  <th>USED DATE</th>
                  <th>USED IN ORDER</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {couponHistory.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.amount}</td>
                    <td>{row.createdDate}</td>
                    <td>{row.expiryDate}</td>
                    <td>{row.usedDate}</td>
                    <td>{row.usedInOrder}</td>
                    <td><span className={statusClass[row.status]}>{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DiscountCoupon;