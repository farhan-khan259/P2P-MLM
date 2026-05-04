import './LevelIncome.css';

const levelIncomeRows = [
  {
    sNo: 1,
    incomeDate: '05-02-2026',
    memberId: 'MM101010',
    memberName: 'AMBIKA SALUNKE',
    unlockLevel: 1,
    levelId: 'MM101011',
    fromMemberName: 'SONALI SHIRKE',
    levelNo: 1,
    amount: 20,
   
  },
  {
    sNo: 2,
    incomeDate: '06-02-2026',
    memberId: 'MM101011',
    memberName: 'RAJKIRAN SALUKE',
    unlockLevel: 9,
    levelId: 'MM101012',
    fromMemberName: 'AMBIKA SALUNKE',
    levelNo: 9,
    amount: 20,
 
  },
  {
    sNo: 3,
    incomeDate: '05-02-2026',
    memberId: 'MM101012',
    memberName: 'AMIT SHARMA',
    unlockLevel: 2,
    levelId: 'MM101013',
    fromMemberName: 'RAJKIRAN SALUKE',
    levelNo: 2,
    amount: 20,
   
  },
  {
    sNo: 4,
    incomeDate: '05-02-2026',
    memberId: 'MM101013',
    memberName: 'SADDAM SHAIKH',
    unlockLevel: 1,
    levelId: 'MM101014',
    fromMemberName: 'AMIT SHARMA',
    levelNo: 1,
    amount: 20,
  
  },
  {
    sNo: 5,
    incomeDate: '05-02-2026',
    memberId: 'MM101014',
    memberName: 'THOMAS ANTHONY',
    unlockLevel: 1,
    levelId: 'MM101015',
    fromMemberName: 'SADDAM SHAIKH',
    levelNo: 1,
    amount: 20,
   
  },
  {
    sNo: 6,
    incomeDate: '05-02-2026',
    memberId: 'MM101015',
    memberName: 'RAZMAN HUSSAIN',
    unlockLevel: 2,
    levelId: 'MM101016',
    fromMemberName: 'THOMAS ANTHONY',
    levelNo: 1,
    amount: 20,
    
  },
  {
    sNo: 7,
    incomeDate: '05-01-2026',
    memberId: 'MM101016',
    memberName: 'SAMEER MIRZA',
    unlockLevel: 1,
    levelId: 'MM101017',
    fromMemberName: 'RAZMAN HUSSAIN',
    levelNo: 1,
    amount: 20,
  
  }
];

function LevelIncome() {
  return (
    <div className="tds-report-page">
      <h2 className="section-title tds-screen-title">Level Income Reports</h2>

      <section className="panel tds-panel">
       

        <div className="tds-filter-row">
          
          <input className="text-input tds-filter-input" placeholder="MEMBER ID" />
          <input className="text-input tds-filter-input" placeholder="MEMBER NAME" />
          <input className="text-input tds-filter-input" placeholder="LEVEL NO" />
            <input className="text-input tds-filter-input" placeholder="LEVEL ID" />
          <input className="text-input tds-filter-input" placeholder="START DATE" />
          <input className="text-input tds-filter-input" placeholder="END DATE" />
          <select className="select-input tds-filter-input tds-size-select" defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary tds-search-btn" type="button">Search</button>
        </div>


         <div className="btn-row tds-export-row">
          <button type="button" className="btn-outline tds-export-btn">XLS</button>
          <button type="button" className="btn-outline tds-export-btn">PDF</button>
        </div>

        <div className="table-wrap tds-table-wrap">
          <table className="data-table tds-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>INCOME DATE</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>UNLOCK LEVEL</th>
               <th>LEVEL NO</th>
                <th>LEVEL ID</th>
                <th>FROM MEMBER NAME</th>
                <th>AMOUNT</th>
                
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
                  <td>{row.levelNo}</td>
                  <td>{row.levelId}</td>
                  <td>{row.fromMemberName}</td>
                 
                  <td>{row.amount}</td>
                 
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
      </section>
    </div>
  );
}

export default LevelIncome;
