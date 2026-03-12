import '../Common/UserLayout.css';
import './UserDashboard.css';

const receiveRows = [
  ['IHH914239', 'Aaqa', 50, 'Pending'],
  ['IHH8960797', 'Mayur', 50, 'Pending'],
  ['IHH3218232', 'Hemant Kub', 50, 'Pending'],
  ['IHH332629', 'Gopal Paliwal', 50, 'Pending'],
  ['IHH178314', 'Shake Khan', 50, 'Pending'],
  ['IHH957429', 'Vikash Singh', 50, 'Pending'],
  ['IHH506896', 'Om Prakash', 50, 'Pending'],
  ['IHH709000', 'Himanshu Beral', 50, 'Pending']
];

const levelRows = [
  [1, 'Rs. 220', 'Rs. 300'],
  [2, 'Rs. 800', 'Rs. 450'],
  [3, 'Rs. 3200', 'Rs. 550'],
  [4, 'Rs. 12800', 'Rs. 350'],
  [5, 'Rs. 51200', 'Rs. 350'],
  [6, 'Rs. 204800', 'Rs. 300'],
  [7, 'Rs. 819200', 'Rs. 350'],
  [8, 'Rs. 3276800', 'Rs. 400'],
  [9, 'Rs. 13107200', 'Rs. 450'],
  [10, 'Rs. 52428800', 'Rs. 500']
];

function UserDashboard() {
	return (
		<div className="user-dashboard-root">
			<div className="user-panel user-link-copy">
				https://testingserverinc.com/p2pinvestment/registration.php?spid=IHH192108
				<button type="button" className="user-btn-blue">
					Copy Link
				</button>
			</div>

			<div className="user-dashboard-top">
				<div className="user-profile-card user-panel">
					<div className="user-profile-image" />
					<h4>ANAMIKA SAXENA (IHH192108)</h4>
					<p>Register Date : 23 06 2021</p>
					<p>Level : 0</p>
					<p>Status : ACTIVE</p>
					<p>Active Upline : 0</p>
				</div>

				<div className="user-action-area">
					<div className="user-action-grid">
						{['Profile', 'Password', 'Direct', 'Team', 'Ticket', 'Level Income', 'Logout', 'My Direct'].map(
							(item, index) => (
								<button
									type="button"
									key={item}
									className={`user-action-box ${index === 7 ? 'user-action-orange' : ''}`}
								>
									{item}
								</button>
							)
						)}
					</div>
					<div className="user-income-row">
						<div className="user-income-box">Rs.15250 My Income</div>
						<div className="user-income-box">Rs.8750 Pending Income</div>
					</div>
					<div className="user-condition-box">Condition not cleared</div>
				</div>
			</div>

			<div className="user-panel">
				<h2 className="user-section-title">Help</h2>
			</div>

			<div className="user-panel">
				<h2 className="user-section-title">Recieve</h2>
				<div className="table-wrap">
					<table className="user-table">
						<thead>
							<tr>
								<th>Sr. No.</th>
								<th>Member ID</th>
								<th>Member Name</th>
								<th>Amount</th>
								<th>Action</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{receiveRows.map((row, index) => (
								<tr key={row[0]}>
									<td>{index + 1}</td>
									<td>{row[0]}</td>
									<td>{row[1]}</td>
									<td>{row[2]}</td>
									<td>
										<div className="user-action-btns">
											<button className="user-mini-btn user-accept" type="button">
												Accept
											</button>
											<button className="user-mini-btn user-reject" type="button">
												Reject
											</button>
										</div>
									</td>
									<td>{row[3]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="user-panel user-level-table-wrap">
				<table className="user-table">
					<thead>
						<tr>
							<th>LEVEL</th>
							<th>STANDARD INCOME</th>
							<th>AMOUNT (rs.)</th>
						</tr>
					</thead>
					<tbody>
						{levelRows.map((row) => (
							<tr key={row[0]}>
								<td>{row[0]}</td>
								<td>{row[1]}</td>
								<td>{row[2]}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default UserDashboard;
