import { useMemo, useState } from 'react';
import '../../Common/AdminLayout.css';
import '../ProductOrder.css';
import { ordersData } from '../mockData';

function AllOrders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    orderNo: '',
    memberId: '',
    totalPaid: '',
    lvPoint: '',
    bvPoint: '',
    status: '',
    startDate: '',
    endDate: '',
    limit: '10'
  });

  const filteredOrders = useMemo(() => {
    return ordersData.filter((order) => {
      const matchOrderNo = !filters.orderNo || order.orderNo.toLowerCase().includes(filters.orderNo.toLowerCase());
      const matchMemberId = !filters.memberId || order.memberId.toLowerCase().includes(filters.memberId.toLowerCase());
      const matchTotalPaid = !filters.totalPaid || String(order.totalPaid).includes(filters.totalPaid);
      const matchLvPoint = !filters.lvPoint || String(order.lvPoint).includes(filters.lvPoint);
      const matchBvPoint = !filters.bvPoint || String(order.bvPoint).includes(filters.bvPoint);
      const matchStatus = !filters.status || order.orderStatus.toLowerCase() === filters.status.toLowerCase();
      return matchOrderNo && matchMemberId && matchTotalPaid && matchLvPoint && matchBvPoint && matchStatus;
    });
  }, [filters]);

  const limit = Number(filters.limit) || 10;
  const totalFilteredPages = Math.max(1, Math.ceil(filteredOrders.length / limit));
  const safePage = Math.min(currentPage, totalFilteredPages);
  const startIndex = (safePage - 1) * limit;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + limit);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const getStatusClass = (status) => {
    const normalized = status.toLowerCase();
    if (normalized === 'pending') return 'status-pending';
    if (normalized === 'confirm') return 'status-confirm';
    if (normalized === 'processing') return 'status-processing';
    if (normalized === 'dispatch') return 'status-dispatch';
    if (normalized === 'delivered') return 'status-delivered';
    if (normalized === 'returned') return 'status-returned';
    if (normalized === 'cancelled') return 'status-cancelled';
    return 'status-pending';
  };

  return (
    <div className="admin-product-order-container">
      <h2 className="admin-product-order-title">All Orders</h2>

      <section className="admin-product-order-panel">
        <div className="admin-product-order-filter-row">
          <input className="admin-product-order-input admin-product-order-input-order-no" name="orderNo" placeholder="ORDER NO" value={filters.orderNo} onChange={handleFilterChange} />
          <input className="admin-product-order-input admin-product-order-input-member-id" name="memberId" placeholder="MEMBER ID" value={filters.memberId} onChange={handleFilterChange} />
          <input className="admin-product-order-input admin-product-order-input-total-paid" name="totalPaid" placeholder="TOTAL PAID" value={filters.totalPaid} onChange={handleFilterChange} />
          <input className="admin-product-order-input admin-product-order-input-lv-point" name="lvPoint" placeholder="LV POINT" value={filters.lvPoint} onChange={handleFilterChange} />
          <input className="admin-product-order-input admin-product-order-input-bv-point" name="bvPoint" placeholder="BV POINT" value={filters.bvPoint} onChange={handleFilterChange} />
          <select className="admin-product-order-input admin-product-order-input-status" name="status" value={filters.status} onChange={handleFilterChange}>
            <option value="">STATUS</option>
            <option value="Pending">PENDING</option>
            <option value="Confirm">CONFIRM</option>
            <option value="Processing">PROCESSING</option>
            <option value="Dispatch">DISPATCH</option>
            <option value="Delivered">DELIVERED</option>
            <option value="Returned">RETURNED</option>
            <option value="Cancelled">CANCELLED</option>
          </select>
          <input type="date" className="admin-product-order-input admin-product-order-input-date" name="startDate" placeholder="START DATE" value={filters.startDate} onChange={handleFilterChange} />
          <input type="date" className="admin-product-order-input admin-product-order-input-date" name="endDate" placeholder="END DATE" value={filters.endDate} onChange={handleFilterChange} />
          <select className="admin-product-order-input admin-product-order-input-limit" name="limit" value={filters.limit} onChange={handleFilterChange}>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button type="button" className="admin-product-order-search-btn">SEARCH</button>
        </div>

        <div className="admin-product-order-table-wrapper">
          <table className="admin-product-order-table">
            <thead>
              <tr>
                <th>S. No</th>
                <th>Order No</th>
                <th>Member Id</th>
                <th>Order Date</th>
                <th>Items</th>
                <th>Total Paid</th>
                <th>Pay Mode</th>
                <th>Pay Status</th>
                <th>LV Point</th>
                <th>BV Point</th>
                <th>Order Status</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Invoice</th>
                <th>Ship. Label</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order) => (
                <tr key={order.orderNo}>
                  <td className="text-center">{order.sNo}</td>
                  <td>{order.orderNo}</td>
                  <td>{order.memberId}</td>
                  <td>{order.orderDate}</td>
                  <td className="text-center">{order.items}</td>
                  <td className="text-center">₹{order.totalPaid.toFixed(2)}</td>
                  <td>{order.payMode}</td>
                  <td className="text-center">{order.payStatus}</td>
                  <td className="text-center">{order.lvPoint}</td>
                  <td className="text-center">{order.bvPoint}</td>
                  <td><span className={`admin-product-order-status-badge ${getStatusClass(order.orderStatus)}`}>{order.orderStatus}</span></td>
                  <td>{order.startDate}</td>
                  <td>{order.endDate}</td>
                  <td className="admin-product-order-action-cell"><button type="button" className="admin-product-order-action-btn action-btn-invoice">Invoice</button></td>
                  <td className="admin-product-order-action-cell"><button type="button" className="admin-product-order-action-btn action-btn-ship">Ship</button></td>
                  <td className="admin-product-order-action-cell">
                    <button type="button" className="admin-product-order-action-link">Details</button>
                    {order.orderStatus === 'Pending' && (
                      <>
                        <button type="button" className="admin-product-order-action-btn action-btn-confirm">Confirm</button>
                        <button type="button" className="admin-product-order-action-btn action-btn-cancel">Cancel</button>
                      </>
                    )}
                    {order.orderStatus === 'Confirm' && (
                      <>
                        <button type="button" className="admin-product-order-action-btn action-btn-process">Processing</button>
                        <button type="button" className="admin-product-order-action-btn action-btn-cancel">Cancel</button>
                      </>
                    )}
                    {order.orderStatus === 'Processing' && (
                      <>
                        <button type="button" className="admin-product-order-action-btn action-btn-dispatch">Dispatch</button>
                        <button type="button" className="admin-product-order-action-btn action-btn-cancel">Cancel</button>
                      </>
                    )}
                    {order.orderStatus === 'Dispatch' && (
                      <>
                        <button type="button" className="admin-product-order-action-btn action-btn-confirm">Delivered</button>
                        <button type="button" className="admin-product-order-action-btn action-btn-return">Return</button>
                      </>
                    )}
                    {order.orderStatus === 'Delivered' && (
                      <>
                        <button type="button" className="admin-product-order-action-btn action-btn-return">Return</button>
                      </>
                    )}
                    {order.orderStatus === 'Returned' && (
                      <>
                        <button type="button" className="admin-product-order-action-btn action-btn-confirm">Delivered</button>
                        <button type="button" className="admin-product-order-action-btn action-btn-cancel">Cancel</button>
                      </>
                    )}
                    {order.orderStatus === 'Cancelled' && (
                      <button type="button" className="admin-product-order-action-btn action-btn-cancel" disabled>Cancelled</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="admin-product-order-table-footer">
          <div>
            Showing {paginatedOrders.length > 0 ? startIndex + 1 : 0} to {Math.min(startIndex + limit, filteredOrders.length)} of {filteredOrders.length} entries
          </div>
          <div className="admin-product-order-pagination">
            <button type="button" className="admin-product-order-page-btn" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={safePage === 1}>❮</button>
            <button type="button" className="admin-product-order-page-btn" onClick={() => setCurrentPage(1)} disabled={safePage === 1}>⟨⟨</button>
            {Array.from({ length: Math.min(7, totalFilteredPages) }, (_, index) => {
              const page = index + 1;
              return (
                <button
                  type="button"
                  key={page}
                  className={`admin-product-order-page-btn ${safePage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            })}
            <button type="button" className="admin-product-order-page-btn" onClick={() => setCurrentPage(totalFilteredPages)} disabled={safePage === totalFilteredPages}>⟩⟩</button>
            <button type="button" className="admin-product-order-page-btn" onClick={() => setCurrentPage((page) => Math.min(totalFilteredPages, page + 1))} disabled={safePage === totalFilteredPages}>❯</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllOrders;
