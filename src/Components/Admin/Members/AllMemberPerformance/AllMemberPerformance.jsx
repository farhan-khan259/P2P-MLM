import './AllMemberPerformance.css';

const memberPerformanceRows = [
  {
    sNo: 1,
    memberId: 'MM101011',
    memberName: 'AMBIKA SALUNKE',
    mobile: '+91 7020456118',
    joinDate: '05-02-2026',
    status: 'ACTIVE',
    joiningLevel: 2,
    unlockLevel: 2,
    rank: 1,
    activeTeamCount: 100,
    inactiveTeamCount: 40,
    totalTeamCount: 140,
    levelIncome: 2000,
    repurchaseIncome: 2000,
    donationIncome: 300,
    totalIncome: 6000
  },
  {
    sNo: 2,
    memberId: 'MM101012',
    memberName: 'RAJKIRAN SALUKE',
    mobile: '+91 8650114455',
    joinDate: '06-02-2026',
    status: 'ACTIVE',
    joiningLevel: 9,
    unlockLevel: 4,
    rank: 2,
    activeTeamCount: 458,
    inactiveTeamCount: 8,
    totalTeamCount: 466,
    levelIncome: 1000,
    repurchaseIncome: 1000,
    donationIncome: 20000,
    totalIncome: 21000
  },
  {
    sNo: 3,
    memberId: 'MM101013',
    memberName: 'AMIT SHARMA',
    mobile: '+91 7020178456',
    joinDate: '05-02-2026',
    status: 'IN-ACTIVE',
    joiningLevel: 2,
    unlockLevel: 2,
    rank: 2,
    activeTeamCount: 450,
    inactiveTeamCount: 50,
    totalTeamCount: 500,
    levelIncome: 800,
    repurchaseIncome: 800,
    donationIncome: 16000,
    totalIncome: 16800
  },
  {
    sNo: 4,
    memberId: 'MM101014',
    memberName: 'SADDAM SHAIKH',
    mobile: '+91 7020145858',
    joinDate: '05-02-2026',
    status: 'ACTIVE',
    joiningLevel: 1,
    unlockLevel: 1,
    rank: 4,
    activeTeamCount: 50,
    inactiveTeamCount: 0,
    totalTeamCount: 50,
    levelIncome: 4400,
    repurchaseIncome: 4400,
    donationIncome: 128000,
    totalIncome: 132400
  },
  {
    sNo: 5,
    memberId: 'MM101015',
    memberName: 'THOMAS ANTHONY',
    mobile: '+91 9270110118',
    joinDate: '05-02-2026',
    status: 'IN-ACTIVE',
    joiningLevel: 1,
    unlockLevel: 1,
    rank: 1,
    activeTeamCount: 125,
    inactiveTeamCount: 5,
    totalTeamCount: 130,
    levelIncome: 25000,
    repurchaseIncome: 25000,
    donationIncome: 64000,
    totalIncome: 64000
  },
  {
    sNo: 6,
    memberId: 'MM101016',
    memberName: 'RAZMAN HUSSAIN',
    mobile: '+91 9450110118',
    joinDate: '05-02-2026',
    status: 'ACTIVE',
    joiningLevel: 2,
    unlockLevel: 2,
    rank: 2,
    activeTeamCount: 45,
    inactiveTeamCount: 5,
    totalTeamCount: 50,
    levelIncome: 50000,
    repurchaseIncome: 50000,
    donationIncome: 32000,
    totalIncome: 82000
  },
  {
    sNo: 7,
    memberId: 'MM101017',
    memberName: 'SAMEER MIRZA',
    mobile: '+91 7020110785',
    joinDate: '05-01-2026',
    status: 'ACTIVE',
    joiningLevel: 1,
    unlockLevel: 1,
    rank: 1,
    activeTeamCount: 60,
    inactiveTeamCount: 0,
    totalTeamCount: 60,
    levelIncome: 60000,
    repurchaseIncome: 60000,
    donationIncome: 16000,
    totalIncome: 76000
  }
];

const exportColumns = [
  'S.NO',
  'MEMBER ID',
  'MEMBER NAME',
  'MOBILE',
  'JOIN DATE',
  'STATUS',
  'JOINING LEVEL',
  'UNLOCK LEVEL',
  'RANK',
  'ACTIVE TEAM COUNT',
  'IN-ACTIVE TEAM COUNT',
  'TOTAL TEAM COUNT',
  'LEVEL INCOME',
  'REPURCHASE INCOME',
  'DONATION INCOME',
  'TOTAL INCOME'
];

function AllMemberPerformance() {
  const formatRowsForExport = (rows) => rows.map((row) => ([
    row.sNo,
    row.memberId,
    row.memberName,
    row.mobile,
    row.joinDate,
    row.status,
    row.joiningLevel,
    row.unlockLevel,
    row.rank,
    row.activeTeamCount,
    row.inactiveTeamCount,
    row.totalTeamCount,
    row.levelIncome,
    row.repurchaseIncome,
    row.donationIncome,
    row.totalIncome
  ]));

  const handleExportExcel = () => {
    const csvRows = [exportColumns, ...formatRowsForExport(memberPerformanceRows)]
      .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csvRows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'all-member-performance.csv');
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExportPdf = () => {
    const tableRows = formatRowsForExport(memberPerformanceRows)
      .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
      .join('');

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>All Member Performance</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 16px; }
            h2 { margin: 0 0 12px 0; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #d6d6d6; padding: 6px; font-size: 11px; text-align: left; }
            th { background: #e8f6fb; }
          </style>
        </head>
        <body>
          <h2>All Member Performance</h2>
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
      <h1 className="page-title" style={{ fontSize: '42px', marginBottom: '14px' }}>All-Member-Performance</h1>

      <div className="panel" style={{ borderRadius: '28px', padding: '24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <input className="text-input" style={{ maxWidth: '120px' }} placeholder="MEMBER ID" />
          <input className="text-input" style={{ maxWidth: '140px' }} placeholder="MEMBER NAME" />
          <select className="select-input" style={{ maxWidth: '98px' }} defaultValue="">
            <option value="">STATUS</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="IN-ACTIVE">IN-ACTIVE</option>
          </select>
          <select className="select-input" style={{ maxWidth: '110px' }} defaultValue="">
            <option value="">JOINING LEVEL</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="9">9</option>
          </select>
          <select className="select-input" style={{ maxWidth: '110px' }} defaultValue="">
            <option value="">UNLOCK LEVEL</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
          </select>
          <input className="text-input" style={{ maxWidth: '90px' }} placeholder="RANK" />
          <input className="text-input" style={{ maxWidth: '120px' }} placeholder="START DATE" />
          <input className="text-input" style={{ maxWidth: '110px' }} placeholder="END DATE" />
          <select className="select-input" style={{ maxWidth: '84px' }} defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary" type="button">Search</button>
        </div>

        <div className="btn-row" style={{ justifyContent: 'flex-end', marginBottom: '14px' }}>
          <button type="button" className="btn-outline" onClick={handleExportPdf}>Export PDF</button>
          <button type="button" className="btn-outline" onClick={handleExportExcel}>Export Excel</button>
        </div>

        <div className="table-wrap">
          <table className="data-table" style={{ minWidth: '1650px' }}>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>MOBILE</th>
                <th>JOIN DATE</th>
                <th>STATUS</th>
                <th>JOINING LEVEL</th>
                <th>UNLOCK LEVEL</th>
                <th>RANK</th>
                <th>ACTIVE TEAM COUNT</th>
                <th>IN-ACTIVE TEAM COUNT</th>
                <th>TOTAL TEAM COUNT</th>
                <th>LEVEL INCOME</th>
                <th>REPURCHASE INCOME</th>
                <th>DONATION INCOME</th>
                <th>TOTAL INCOME</th>
              </tr>
            </thead>
            <tbody>
              {memberPerformanceRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.mobile}</td>
                  <td>{row.joinDate}</td>
                  <td className={row.status === 'IN-ACTIVE' ? 'member-performance-status-inactive' : ''}>{row.status}</td>
                  <td>{row.joiningLevel}</td>
                  <td>{row.unlockLevel}</td>
                  <td>{row.rank}</td>
                  <td>{row.activeTeamCount}</td>
                  <td>{row.inactiveTeamCount}</td>
                  <td>{row.totalTeamCount}</td>
                  <td>{row.levelIncome}</td>
                  <td>{row.repurchaseIncome}</td>
                  <td>{row.donationIncome}</td>
                  <td>{row.totalIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer" style={{ justifyContent: 'center', marginTop: '12px' }}>
          <div className="pagination">
            <button className="page-btn">&laquo;</button>
            <button className="page-btn">&lsaquo;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">5</button>
            <button className="page-btn">6</button>
            <button className="page-btn">7</button>
            <button className="page-btn">&rsaquo;</button>
            <button className="page-btn">&raquo;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMemberPerformance;
