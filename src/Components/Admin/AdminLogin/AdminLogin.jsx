import './AdminLogin.css';

function AdminLogin() {
	return (
		<div className="login-root">
			<div className="login-card">
				<h1>IHH Admin Login</h1>
				<input className="text-input" placeholder="Username" />
				<input className="text-input" type="password" placeholder="Password" />
				<button className="btn-primary">Login</button>
			</div>
		</div>
	);
}

export default AdminLogin;

