import React from "react";
import "./AllMembersList.css";

const membersData = [
  { sNo: 1, sponsorId: "MM101010", memberId: "MM101011", name: "AMBIKA SALUNKE", mobile: "+91 7020456118", joinDate: "05-02-2026", jLevel: 21, city: "PUNE", status: "ACTIVE", password: "123456", transPassword: "ABC@123", wallet: "0.00" },
  { sNo: 2, sponsorId: "MM101011", memberId: "MM101012", name: "RAJKIRAN SALUKE", mobile: "+91 8650114455", joinDate: "06-02-2026", jLevel: 9, city: "PCMC", status: "ACTIVE", password: "123456", transPassword: "123456", wallet: "0.00" },
  { sNo: 3, sponsorId: "MM101012", memberId: "MM101013", name: "AMIT SHARMA", mobile: "+91 7020178456", joinDate: "05-02-2026", jLevel: 2, city: "PUNE", status: "IN-ACTIVE", password: "123456", transPassword: "123456", wallet: "0.00" },
  { sNo: 4, sponsorId: "MM101013", memberId: "MM101014", name: "SADDAM SHAIKH", mobile: "+91 7020145858", joinDate: "05-02-2026", jLevel: 1, city: "PATANA", status: "ACTIVE", password: "ABCDEF", transPassword: "ABCDEF", wallet: "0.00" },
  { sNo: 5, sponsorId: "MM101014", memberId: "MM101015", name: "THOMAS ANTHONY", mobile: "+91 9271011018", joinDate: "05-02-2026", jLevel: 1, city: "THANE", status: "IN-ACTIVE", password: "123456", transPassword: "123456", wallet: "0.00" },
  { sNo: 6, sponsorId: "MM101015", memberId: "MM101016", name: "RAZMAN HUSSAIN", mobile: "+91 9450110118", joinDate: "05-02-2026", jLevel: 2, city: "NAGAR", status: "ACTIVE", password: "123456", transPassword: "123456", wallet: "0.00" },
  { sNo: 7, sponsorId: "MM101016", memberId: "MM101017", name: "SAMEER MIRZA", mobile: "+917020110785", joinDate: "05-01-2026", jLevel: 1, city: "SATARA", status: "ACTIVE", password: "123456", transPassword: "123466", wallet: "0.00" },
];

const AllMembersList = () => {
  return (
    <div>
      <h1 className="page-title" style={{ fontSize: '42px', marginBottom: '14px' }}>All-Members-List</h1>

      <div className="panel" style={{ borderRadius: '28px', padding: '24px' }}>
        <h2 className="section-title" style={{ fontSize: '34px', marginBottom: '14px' }}>ALL MEMBERS LIST</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
          <input className="text-input" style={{ maxWidth: '120px' }} placeholder="SPONSOR ID" />
          <input className="text-input" style={{ maxWidth: '120px' }} placeholder="MEMBER ID" />
          <input className="text-input" style={{ maxWidth: '140px' }} placeholder="NAME" />
          <input className="text-input" style={{ maxWidth: '130px' }} placeholder="MOBILE" />
          <input className="text-input" style={{ maxWidth: '110px' }} placeholder="CITY" />
          <input className="text-input" style={{ maxWidth: '80px' }} placeholder="LEVEL" />
          <select className="select-input" style={{ maxWidth: '98px' }} defaultValue="">
            <option value="">STATUS</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="IN-ACTIVE">IN-ACTIVE</option>
          </select>
          <input className="text-input" style={{ maxWidth: '120px' }} placeholder="START DATE" type="date" />
          <input className="text-input" style={{ maxWidth: '110px' }} placeholder="END DATE" type="date" />
          <select className="select-input" style={{ maxWidth: '84px' }} defaultValue="10">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="btn-primary" type="button">SEARCH</button>
        </div>

        <div className="table-wrap">
          <table className="data-table" style={{ minWidth: '1400px' }}>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>SPONSOR ID</th>
                <th>MEMBER ID</th>
                <th>NAME</th>
                <th>MOBILE</th>
                <th>JOIN DATE</th>
                <th>J.LEVEL</th>
                <th>CITY</th>
                <th>STATUS</th>
                <th>PASSWORD</th>
                <th>TRAS.PASSWORD</th>
                <th>WALLET</th>
                <th>ACTION</th>
                <th>LOGIN</th>
              </tr>
            </thead>
            <tbody>
              {membersData.map((member) => (
                <tr key={member.sNo}>
                  <td>{member.sNo}</td>
                  <td>{member.sponsorId}</td>
                  <td>{member.memberId}</td>
                  <td>{member.name}</td>
                  <td>{member.mobile}</td>
                  <td>{member.joinDate}</td>
                  <td>{member.jLevel}</td>
                  <td>{member.city}</td>
                  <td>
                    <span className={member.status === 'IN-ACTIVE' ? 'member-status-inactive' : 'member-status-active'}>
                      {member.status}
                    </span>
                  </td>
                  <td>{member.password}</td>
                  <td>{member.transPassword}</td>
                  <td>{member.wallet}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                      <button className="action-icon-btn edit" title="Edit Profile" style={{ backgroundColor: '#4ec3e0', border: 'none', color: '#fff' }}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25z" fill="#fff"/><path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#fff"/></svg>
                      </button>
                      <button className="action-icon-btn status" title="Active/Inactive" style={{ backgroundColor: '#4caf50', border: 'none', color: '#fff' }}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polyline points="20 6 9.5 17 4 11.5" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                      <button className="action-icon-btn wallet" title="Credit/Debit Wallet" style={{ backgroundColor: '#00bcd4', border: 'none', color: '#fff' }}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="9" y="4" width="6" height="16" rx="3" fill="#fff"/><rect x="4" y="9" width="16" height="6" rx="3" fill="#fff"/></svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    <button className="login-btn">LOGIN</button>
                  </td>
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
};

export default AllMembersList;