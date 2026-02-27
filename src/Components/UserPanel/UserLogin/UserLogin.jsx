import { useNavigate } from 'react-router-dom';
import PublicPageHeader from '../../Public/Common/PublicPageHeader';
import './UserLogin.css';

function UserLogin() {
	const navigate = useNavigate();

	return (
		<div>
			<PublicPageHeader title="Login" />
			<section className="public-page">
				<div className="public-container user-login-wrap">
					<div className="user-login-card">
						<label>Your Member ID</label>
						<input placeholder="Enter Your Member ID" />
						<label>Password</label>
						<input type="password" placeholder="Enter Password" />
						<button type="button" onClick={() => navigate('/user/dashboard')}>
							Login Now
						</button>
						<button type="button" onClick={() => navigate('/dashboard')}>
							Login Admin 
						</button>
						<p>
							Not a member? <span onClick={() => navigate('/registration')}>Create a new account</span>
						</p>
						<small>Forgot your Password? Click here</small>
					</div>
				</div>
			</section>
		</div>
	);
}

export default UserLogin;
