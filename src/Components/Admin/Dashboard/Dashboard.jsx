import './Dashboard.css';
import { membersRows } from '../Common/mockData';

function Dashboard() {
	return (
		<div>
			<h1 className="page-title">Dashboard</h1>

			<div className="cards-row">
				<div className="stat-card">
					<div className="stat-head">Total Members</div>
					<div className="stat-body">230</div>
				</div>
				<div className="stat-card">
					<div className="stat-head">Today Members</div>
					<div className="stat-body">0</div>
				</div>
				<div className="stat-card">
					<div className="stat-head">Block Id</div>
					<div className="stat-body">136</div>
				</div>
			</div>

			<div className="panel">
				<h2 className="section-title">Members</h2>

				<div className="table-wrap">
					<table className="data-table">
						<thead>
							<tr>
								<th>Sr. No.</th>
								<th>MemberID</th>
								<th>Member Name</th>
								<th>Joining Date</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{membersRows.map((row) => (
								<tr key={row[0]}>
									{row.map((cell) => (
										<td key={`${row[0]}-${cell}`}>{cell}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
