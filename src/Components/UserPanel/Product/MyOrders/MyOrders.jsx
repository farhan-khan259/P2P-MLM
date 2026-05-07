import { useNavigate } from 'react-router-dom';
import '../../Common/UserLayout.css';
import './MyOrders.css';

const orders = [
  {
    sNo: 1,
    orderNo: 'ORD1001',
    orderDate: '21-01-2026',
    items: '2 ITEMS',
    totalPaid: 1550,
    payMode: 'E-WALLET',
    payStatus: 'PAID',
    orderStatus: 'PENDING'
  },
  {
    sNo: 2,
    orderNo: 'ORD1002',
    orderDate: '20-01-2026',
    items: '2 ITEMS',
    totalPaid: 1400,
    payMode: 'E-WALLET',
    payStatus: 'PAID',
    orderStatus: 'CONFIRMED'
  },
  {
    sNo: 3,
    orderNo: 'ORD1003',
    orderDate: '19-01-2026',
    items: '1 ITEMS',
    totalPaid: 1660,
    payMode: 'E-WALLET',
    payStatus: 'PAID',
    orderStatus: 'PROCESSING'
  },
  {
    sNo: 4,
    orderNo: 'ORD1004',
    orderDate: '18-01-2026',
    items: '5 ITEMS',
    totalPaid: 1500,
    payMode: 'R-WALLET',
    payStatus: 'PAID',
    orderStatus: 'DISPATCHED'
  },
  {
    sNo: 5,
    orderNo: 'ORD1005',
    orderDate: '17-01-2026',
    items: '1 ITEMS',
    totalPaid: 1250,
    payMode: 'R-WALLET',
    payStatus: 'PAID',
    orderStatus: 'DELIVERED'
  },
  {
    sNo: 6,
    orderNo: 'ORD1006',
    orderDate: '16-01-2026',
    items: '1 ITEMS',
    totalPaid: 2200,
    payMode: 'E-WALLET',
    payStatus: 'PAID',
    orderStatus: 'RETURNED'
  },
  {
    sNo: 7,
    orderNo: 'ORD1007',
    orderDate: '15-01-2026',
    items: '2 ITEMS',
    totalPaid: 1900,
    payMode: 'E-WALLET',
    payStatus: 'PAID',
    orderStatus: 'CANCELLED'
  }
];

function DetailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 13h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function getStatusClass(status) {
  switch (status) {
    case 'PENDING':
      return 'order-status order-status--pending';
    case 'CONFIRMED':
      return 'order-status order-status--confirmed';
    case 'PROCESSING':
      return 'order-status order-status--processing';
    case 'DISPATCHED':
      return 'order-status order-status--dispatched';
    case 'DELIVERED':
      return 'order-status order-status--delivered';
    case 'RETURNED':
      return 'order-status order-status--returned';
    case 'CANCELLED':
      return 'order-status order-status--cancelled';
    default:
      return 'order-status';
  }
}

function MyOrders() {
  const navigate = useNavigate();

  const openOrderDetails = (orderNo) => {
    navigate(`/user/product/my-orders/details/${orderNo}`);
  };

  return (
    <div className="user-orders-page">
      <div className="user-orders-shell">
      

        <section className="user-orders-card">
          <h1 className="user-orders-title">My Orders</h1>

          <div className="table-wrap user-orders-table-wrap">
            <table className="user-table user-orders-table">
              <thead>
                <tr>
                  <th>S. NO</th>
                  <th>ORDER NO</th>
                  <th>ORDER DATE</th>
                  <th>ITEMS</th>
                  <th>TOTAL PAID</th>
                  <th>PAY MODE</th>
                  <th>PAY STATUS</th>
                  <th>ORDER STATUS</th>
                  <th>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderNo}>
                    <td data-label="S. NO">{order.sNo}</td>
                    <td data-label="ORDER NO">{order.orderNo}</td>
                    <td data-label="ORDER DATE">{order.orderDate}</td>
                    <td data-label="ITEMS">{order.items}</td>
                    <td data-label="TOTAL PAID">{order.totalPaid.toFixed(2)}</td>
                    <td data-label="PAY MODE">{order.payMode}</td>
                    <td data-label="PAY STATUS">{order.payStatus}</td>
                    <td data-label="ORDER STATUS" className={getStatusClass(order.orderStatus)}>
                      {order.orderStatus}
                    </td>
                    <td data-label="DETAILS" className="user-order-detail-cell">
                      <button
                        type="button"
                        className="user-order-detail-btn"
                        onClick={() => openOrderDetails(order.orderNo)}
                        aria-label={`View details for ${order.orderNo}`}
                      >
                        <DetailIcon />
                      </button>
                    </td>
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

export default MyOrders;
