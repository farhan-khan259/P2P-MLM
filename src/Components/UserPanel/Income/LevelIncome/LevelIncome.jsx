import '../../Common/UserLayout.css';
import { levelIncomeReportRows } from '../../Common/userMockData';
import './LevelIncome.css';

function LevelIncome() {
  const totalAmount = levelIncomeReportRows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <div>
      <h1 className="user-page-title">Level Income</h1>
      <div className="user-panel">
        <h3>Total Level Income : {totalAmount.toFixed(2)}</h3>

        <div className="level-income-filters">
          <select aria-label="Level Number">
            <option value="">LEVEL NO</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <input type="text" placeholder="LEVEL ID" aria-label="Level ID" />
          <input type="text" placeholder="FROM MEMBER NAME" aria-label="From Member Name" />
          <input type="text" placeholder="START DATE" aria-label="Start Date" />
          <input type="text" placeholder="END DATE" aria-label="End Date" />
          <select aria-label="Rows per page">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="user-btn-blue" type="button">SEARCH</button>
        </div>

        <div className="table-toolbar">
          <button className="user-btn-outline" type="button">Excel</button>
          <button className="user-btn-outline" type="button">PDF</button>
        </div>

        <div className="table-wrap">
          <table className="user-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>INCOME DATE & TIME</th>
                <th>MEMBER ID</th>
                <th>MEMBER NAME</th>
                <th>LEVEL NO</th>
                <th>LEVEL ID</th>
                <th>FROM MEMBER NAME</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {levelIncomeReportRows.map((row, index) => (
                <tr key={`${row.memberId}-${index}`}>
                  <td>{index + 1}</td>
                  <td>{row.incomeDate}</td>
                  <td>{row.memberId}</td>
                  <td>{row.memberName}</td>
                  <td>{row.levelNo}</td>
                  <td>{row.levelId}</td>
                  <td>{row.fromMemberName}</td>
                  <td>{row.amount.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="level-income-total-row">
                <td colSpan={7}>TOTAL AMOUNT</td>
                <td>{totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="level-income-pagination" aria-label="Pagination">
          <button type="button" className="level-income-page-btn" disabled>
            «
          </button>
          <button type="button" className="level-income-page-btn" disabled>
            ‹
          </button>
          <button type="button" className="level-income-page-btn level-income-page-btn-active">
            1
          </button>
          <button type="button" className="level-income-page-btn">2</button>
          <button type="button" className="level-income-page-btn">3</button>
          <button type="button" className="level-income-page-btn">4</button>
          <button type="button" className="level-income-page-btn">5</button>
          <button type="button" className="level-income-page-btn">6</button>
          <button type="button" className="level-income-page-btn">7</button>
          <button type="button" className="level-income-page-btn">›</button>
          <button type="button" className="level-income-page-btn">»</button>
        </div>
      </div>
    </div>
  );
}

export default LevelIncome;
