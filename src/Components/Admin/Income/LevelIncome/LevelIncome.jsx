import './LevelIncome.css';

const levelIncomeRows = [
  {
    sNo: 1,
    incomeDate: '05-02-2026',
    memberId: 'MM101010',
    memberName: 'AMBIKA SALUNKE',
    unlockLevel: 1,
    fromMemberId: 'MM101011',
    fromMemberName: 'SONALI SHIRKE',
    levelNo: 1,
    amount: 20,
    tdsPercent: '5%',
    tdsAmount: 1,
    netAmount: 19
  },
  {
    sNo: 2,
    incomeDate: '06-02-2026',
    memberId: 'MM101011',
    memberName: 'RAJKIRAN SALUKE',
    unlockLevel: 9,
    fromMemberId: 'MM101012',
    fromMemberName: 'AMBIKA SALUNKE',
    levelNo: 9,
    amount: 20,
    tdsPercent: '5%',
    tdsAmount: 1,
    netAmount: 19
  },
  {
    sNo: 3,
    incomeDate: '05-02-2026',
    memberId: 'MM101012',
    memberName: 'AMIT SHARMA',
    unlockLevel: 2,
    fromMemberId: 'MM101013',
    fromMemberName: 'RAJKIRAN SALUKE',
    levelNo: 2,
    amount: 20,
    tdsPercent: '5%',
    tdsAmount: 1,
    netAmount: 19
  },
  {
    sNo: 4,
    incomeDate: '05-02-2026',
    memberId: 'MM101013',
    memberName: 'SADDAM SHAIKH',
    unlockLevel: 1,
    fromMemberId: 'MM101014',
    fromMemberName: 'AMIT SHARMA',
    levelNo: 1,
    amount: 20,
    tdsPercent: '5%',
    tdsAmount: 1,
    netAmount: 19
  },
  {
    sNo: 5,
    incomeDate: '05-02-2026',
    memberId: 'MM101014',
    memberName: 'THOMAS ANTHONY',
    unlockLevel: 1,
    fromMemberId: 'MM101015',
    fromMemberName: 'SADDAM SHAIKH',
    levelNo: 1,
    amount: 20,
    tdsPercent: '5%',
    tdsAmount: 1,
    netAmount: 19
  },
  {
    sNo: 6,
    incomeDate: '05-02-2026',
    memberId: 'MM101015',
    memberName: 'RAZMAN HUSSAIN',
    unlockLevel: 2,
    fromMemberId: 'MM101016',
    fromMemberName: 'THOMAS ANTHONY',
    levelNo: 1,
    amount: 20,
    tdsPercent: '5%',
    tdsAmount: 1,
    netAmount: 19
  },
  {
    sNo: 7,
    incomeDate: '05-01-2026',
    memberId: 'MM101016',
    memberName: 'SAMEER MIRZA',
    unlockLevel: 1,
    fromMemberId: 'MM101017',
    fromMemberName: 'RAZMAN HUSSAIN',
    levelNo: 1,
    amount: 20,
    tdsPercent: '5%',
    tdsAmount: 1,
    netAmount: 19
  }
];

const totalAmount = levelIncomeRows.reduce((sum, row) => sum + row.amount, 0);
const totalNetAmount = levelIncomeRows.reduce((sum, row) => sum + row.netAmount, 0);

function LevelIncome() {
  return (
    <div>
      <h1 className="page-title" style={{ fontSize: '42px', marginBottom: '14px' }}>Level Income Reports</h1>

      <div className="panel" style={{ borderRadius: '28px', padding: '24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <input className="text-input" style={{ maxWidth: '120px' }} placeholder="INCOME DATE" />
          <input className="text-input" style={{ maxWidth: '120px' }} placeholder="MEMBER ID" />
          <input className="text-input" style={{ maxWidth: '140px' }} placeholder="MEMBER NAME" />
          <input className="text-input" style={{ maxWidth: '110px' }} placeholder="UNLOCK LEVEL" />
          <input className="text-input" style={{ maxWidth: '130px' }} placeholder="FROM MEMBER ID" />
          <input className="text-input" style={{ maxWidth: '150px' }} placeholder="FROM MEMBER NAME" />
          <input className="text-input" style={{ maxWidth: '90px' }} placeholder="LEVEL NO" />
          <input className="text-input" style={{ maxWidth: '120px' }} placeholder="START DATE" />
          <input className="text-input" style={{ maxWidth: '110px' }} placeholder="END DATE" />
          <select className="select-input" style={{ maxWidth: '84px' }} defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary" type="button">Search</button>
        </div>

        <div className="table-wrap">
          <table className="data-table" style={{ minWidth: '1260px' }}>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>INCOME DATE</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>UNLOCK LEVEL</th>
                <th>FROM MEMBER ID</th>
                <th>FROM MEMBER NAME</th>
                <th>LEVEL NO</th>
                <th>AMOUNT</th>
                <th>TDS%</th>
                <th>TDS AMOUNT</th>
                <th>NET AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {levelIncomeRows.map((row) => (
                <tr key={row.sNo}>
                  <td>{row.sNo}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.unlockLevel}</td>
                  <td>{row.fromMemberId}</td>
                  <td>{row.fromMemberName}</td>
                  <td>{row.levelNo}</td>
                  <td>{row.amount}</td>
                  <td>{row.tdsPercent}</td>
                  <td>{row.tdsAmount}</td>
                  <td>{row.netAmount}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="8" style={{ fontWeight: 700, textAlign: 'right' }}>TOTAL AMOUNT</td>
                <td>{totalAmount}</td>
                <td colSpan="2" style={{ fontWeight: 700, textAlign: 'right' }}>TOTAL NET AMOUNT</td>
                <td>{totalNetAmount}</td>
              </tr>
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

export default LevelIncome;
