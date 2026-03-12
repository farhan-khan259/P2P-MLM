import '../../Common/UserLayout.css';
import { levelIncomeRows } from '../../Common/userMockData';
import './TotalLevelIncome.css';

function TotalLevelIncome() {
  return (
    <div>
      <h1 className="user-page-title">Total Level Income</h1>
      <div className="user-panel">
        <h3>Total Level Income : 15250</h3>
        <div className="table-toolbar"><button className="user-btn-outline">Excel</button></div>
        <div className="table-wrap">
          <table className="user-table">
            <thead>
              <tr>
                <th>SR. NO.</th>
                <th>LEVEL</th>
                <th>TOTAL AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {levelIncomeRows.map((item, index) => (
                <tr key={item.level}>
                  <td>{index + 1}</td>
                  <td>{item.level}</td>
                  <td>Rs. {item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TotalLevelIncome;
