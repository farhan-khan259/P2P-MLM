import { useMemo, useState } from 'react';
import './DonationReport.css';

const donationRows = [
  {
    srNo: '1', donorMemberId: 'MM101010', donorMemberName: 'SONALI SHIRKE', receiverMemberId: 'MM101011',
    receiverMemberName: 'AMBIKA SALUNKE', amount: '300', rank: '1', paymentProof: 'VIEW',
    transactionId: '123456789012', requestDate: '23-11-2024 12:57:37PM', approveDate: '23-11-2024 12:57:37PM', status: 'PENDING'
  },
  {
    srNo: '2', donorMemberId: 'MM101011', donorMemberName: 'AMBIKA SALUNKE', receiverMemberId: 'MM101012',
    receiverMemberName: 'RAJKIRAN SALUKE', amount: '1000', rank: '2', paymentProof: 'VIEW',
    transactionId: '123456789012', requestDate: '23-11-2024 12:57:37PM', approveDate: '23-11-2024 12:57:37PM', status: 'PENDING'
  },
  {
    srNo: '3', donorMemberId: 'MM101012', donorMemberName: 'RAJKIRAN SALUKE', receiverMemberId: 'MM101013',
    receiverMemberName: 'AMIT SHARMA', amount: '2000', rank: '3', paymentProof: '',
    transactionId: '123456789012', requestDate: '23-11-2024 12:57:37PM', approveDate: '23-11-2024 12:57:37PM', status: 'SUCCESS'
  },
  {
    srNo: '4', donorMemberId: 'MM101013', donorMemberName: 'AMIT SHARMA', receiverMemberId: 'MM101014',
    receiverMemberName: 'SADDAM SHAIKH', amount: '4000', rank: '4', paymentProof: '',
    transactionId: '123456789012', requestDate: '23-11-2024 12:57:37PM', approveDate: '23-11-2024 12:57:37PM', status: 'SUCCESS'
  },
  {
    srNo: '5', donorMemberId: 'MM101014', donorMemberName: 'SADDAM SHAIKH', receiverMemberId: 'MM101015',
    receiverMemberName: 'THOMAS ANTHONY', amount: '16000', rank: '6', paymentProof: '',
    transactionId: '123456789012', requestDate: '23-11-2024 12:57:37PM', approveDate: '23-11-2024 12:57:37PM', status: 'SUCCESS'
  },
  {
    srNo: '6', donorMemberId: 'MM101015', donorMemberName: 'THOMAS ANTHONY', receiverMemberId: 'MM101016',
    receiverMemberName: 'RAZMAN HUSSAIN', amount: '2000', rank: '3', paymentProof: '',
    transactionId: '123456789012', requestDate: '23-11-2024 12:57:37PM', approveDate: '23-11-2024 12:57:37PM', status: 'SUCCESS'
  },
  {
    srNo: '7', donorMemberId: 'MM101016', donorMemberName: 'RAZMAN HUSSAIN', receiverMemberId: 'MM101017',
    receiverMemberName: 'SAMEER MIRZA', amount: '4000', rank: '4', paymentProof: '',
    transactionId: '123456789012', requestDate: '23-11-2024 12:57:37PM', approveDate: '23-11-2024 12:57:37PM', status: 'SUCCESS'
  }
];

const exportColumns = [
  'S.No', 'Donor Member ID', 'Donor Member Name', 'Receiver Member ID', 'Receiver Member Name', 'D. Amount',
  'Rank', 'Request Date', 'Approve Date', 'Transaction ID', 'Slip', 'Status'
];

const rankLabels = {
  '1': 'Starter',
  '2': 'Achiever',
  '3': 'Performer',
  '4': 'Leader',
  '5': 'Silver Leader',
  '6': 'Gold Leader',
  '7': 'Platinum Leader',
  '8': 'Diamond Leader',
  '9': 'Crown Leader',
  '10': 'Royal Crown'
};

function parseDate(value) {
  const datePart = value.split(' ')[0];
  const [day, month, year] = datePart.split('-');
  return `${year}-${month}-${day}`;
}

function DonationReport() {
  const [filters, setFilters] = useState({
    donorMemberId: '',
    receiverMemberId: '',
    amount: '',
    rank: '',
    status: '',
    startDate: '',
    endDate: ''
  });
  const [pageSize, setPageSize] = useState('10');

  const filteredRows = useMemo(() => {
    return donationRows.filter((row) => {
      const byDonorId = !filters.donorMemberId || row.donorMemberId.toLowerCase().includes(filters.donorMemberId.toLowerCase());
      const byReceiverId = !filters.receiverMemberId || row.receiverMemberId.toLowerCase().includes(filters.receiverMemberId.toLowerCase());
      const byAmount = !filters.amount || row.amount.includes(filters.amount);
      const byRank = !filters.rank || row.rank === filters.rank;
      const byStatus = !filters.status || row.status === filters.status;

      const rowDate = parseDate(row.requestDate);
      const byStartDate = !filters.startDate || rowDate >= filters.startDate;
      const byEndDate = !filters.endDate || rowDate <= filters.endDate;

      return byDonorId && byReceiverId && byAmount && byRank && byStatus && byStartDate && byEndDate;
    });
  }, [filters]);

  const visibleRows = filteredRows.slice(0, Number(pageSize));

  const handleFilterChange = (key) => (event) => {
    setFilters((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const formatRowsForExport = (rows) => rows.map((row) => ([
    row.srNo,
    row.donorMemberId,
    row.donorMemberName,
    row.receiverMemberId,
    row.receiverMemberName,
    row.amount,
    row.rank,
    row.requestDate,
    row.approveDate,
    row.transactionId,
    row.paymentProof,
    row.status
  ]));

  const handleExportExcel = () => {
    const csvRows = [exportColumns, ...formatRowsForExport(filteredRows)]
      .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csvRows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'donation-report.csv');
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExportPdf = () => {
    const tableRows = formatRowsForExport(filteredRows)
      .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
      .join('');

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Donation Report</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 16px; }
            h2 { margin: 0 0 12px 0; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #d6d6d6; padding: 6px; font-size: 11px; text-align: left; }
            th { background: #e8f6fb; }
          </style>
        </head>
        <body>
          <h2>Donation Report</h2>
          <table>
            <thead>
              <tr>${exportColumns.map((column) => `<th>${column}</th>`).join('')}</tr>
            </thead>
            <tbody>${tableRows}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div>
      <h2 className="section-title tds-screen-title">Donation Report</h2>

      <div className="panel" style={{ borderRadius: '28px', padding: '24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <input className="text-input" style={{ maxWidth: '150px' }} placeholder="DONAR MEMBER ID" value={filters.donorMemberId} onChange={handleFilterChange('donorMemberId')} />
          <input className="text-input" style={{ maxWidth: '160px' }} placeholder="RECEIVER MEMBER ID" value={filters.receiverMemberId} onChange={handleFilterChange('receiverMemberId')} />
          <input className="text-input" style={{ maxWidth: '110px' }} placeholder="D. AMOUNT" value={filters.amount} onChange={handleFilterChange('amount')} />
          <select className="select-input" style={{ maxWidth: '98px' }} value={filters.rank} onChange={handleFilterChange('rank')}>
            <option value="">RANK</option>
            {Object.keys(rankLabels).map((rankKey) => (
              <option key={rankKey} value={rankKey}>{rankKey}</option>
            ))}
          </select>
          <select className="select-input" style={{ maxWidth: '98px' }} value={filters.status} onChange={handleFilterChange('status')}>
            <option value="">STATUS</option>
            <option value="PENDING">PENDING</option>
            <option value="SUCCESS">SUCCESS</option>
          </select>
          <input className="text-input" type="date" style={{ maxWidth: '130px' }} value={filters.startDate} onChange={handleFilterChange('startDate')} />
          <input className="text-input" type="date" style={{ maxWidth: '120px' }} value={filters.endDate} onChange={handleFilterChange('endDate')} />
          <select className="select-input" style={{ maxWidth: '92px' }} value={pageSize} onChange={(event) => setPageSize(event.target.value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button className="btn-primary" type="button">Search</button>
        </div>

        <div className="btn-row" style={{ justifyContent: 'flex-end', marginBottom: '14px' }}>
          <button className="btn-outline" type="button" onClick={handleExportPdf}>Export PDF</button>
          <button className="btn-outline" type="button" onClick={handleExportExcel}>Export Excel</button>
        </div>

        <div className="table-wrap">
          <table className="data-table" style={{ minWidth: '1680px' }}>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>DONAR MID</th>
                <th>DONAR MEMBER NAME</th>
                <th>RECEIVER MID</th>
                <th>RECEIVER MEMBER NAME</th>
                <th>D. AMOUNT</th>
                <th>RANK</th>
                <th>REQUEST DATE</th>
                <th>APPROVE DATE</th>
                <th>TRANSACTION ID</th>
                <th>SLIP</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr key={row.srNo}>
                  <td>{row.srNo}</td>
                  <td>{row.donorMemberId}</td>
                  <td>{row.donorMemberName}</td>
                  <td>{row.receiverMemberId}</td>
                  <td>{row.receiverMemberName}</td>
                  <td>{row.amount}</td>
                  <td>{row.rank}</td>
                  <td>{row.requestDate}</td>
                  <td>{row.approveDate}</td>
                  <td>{row.transactionId}</td>
                  <td>
                    {row.paymentProof ? (
                      <button className="btn-primary" type="button" style={{ padding: '5px 10px', fontSize: '11px' }}>
                        {row.paymentProof}
                      </button>
                    ) : (
                      '-'
                    )}
                  </td>
                  <td>{row.status}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                      <button className="action-btn accept-btn" type="button" title="Accept" style={{ background: '#e8f8f5', color: '#27ae60', border: '1px solid #27ae60' }}>
                        ✓
                      </button>
                      <button className="action-btn reject-btn" type="button" title="Reject" style={{ background: '#fadbd8', color: '#e74c3c', border: '1px solid #e74c3c' }}>
                        ✕
                      </button>
                      <button className="action-btn return-btn" type="button" title="Return" style={{ background: '#ebf5fb', color: '#3498db', border: '1px solid #3498db' }}>
                        ↻
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer" style={{ justifyContent: 'center', marginTop: '12px' }}>
          <div className="pagination">
            <button className="page-btn">&lt;&lt;</button>
            <button className="page-btn">&lt;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">6</button>
            <button className="page-btn">7</button>
            <button className="page-btn">&gt;</button>
            <button className="page-btn">&gt;&gt;</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DonationReport;
