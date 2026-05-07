import { useEffect, useState } from 'react';
import './Dashboard.css';
import dashboard1 from '../../../Assets/Pictures/dashbaord1.jpeg';
import dashboard2 from '../../../Assets/Pictures/dashbaord2.jpeg';
import dashboard3 from '../../../Assets/Pictures/dashbaord3.jpeg';
import dashboard4 from '../../../Assets/Pictures/dashbaord4.jpeg';
import dashboard5 from '../../../Assets/Pictures/dashbaord5.jpeg';

const bannerSlides = [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5];

const adminStats = [
	{ label: 'Total Joining Turnover', value: '₹ 525000' },
	{ label: 'Profit on Joining', value: '₹ 125000' },
	{ label: 'Total Donation Amount', value: '₹ 267550' },
	{ label: "Yesterday's Donation Amount", value: '₹ 189585' },
	{ label: 'Total Level Income', value: '₹ 300000' },
	{ label: "Yesterday's Level Income", value: '₹ 22500' },
	{ label: 'Total Repurchase Income', value: '₹ 100000' },
	{ label: "Yesterday's Repurchase Income", value: '₹ 18500' },
	{ label: 'Generated Total Income', value: '₹ 400000' },
	{ label: 'Total Deducted Charges', value: '₹ 40000' },
	{ label: 'Total Payout Amount', value: '₹ 360000' },
	{ label: 'Succeed Payout', value: '₹ 200000' },
	{ label: 'Awaiting Payout Request', value: '₹ 100000' },
	{ label: 'Pending Payout', value: '₹ 60000' },
	{ label: 'TDS Deducted 5%', value: '₹ 20000' },
	{ label: 'Deducted Admin Charge 5%', value: '₹ 20000' },
	{ label: 'Total Joining Members', value: ' 2000' },
	{ label: "Today's Joining Members", value: '50' },
	{ label: 'Active Members', value: '1500' },
	{ label: 'In-Active Members', value: '500' },
	{ label: 'Total Generated ePins', value: '2500' },
	{ label: 'Pending ePin Request', value: '100' },
	{ label: 'Used ePins', value: '1500' },
	{ label: 'Unused ePins', value: '1000' },
	{ label: 'Alloted ePins', value: '600' },
	{ label: 'Unallotted ePins', value: '400' },
	{ label: 'Total sales Packages', value: '1500' },
	{ label: 'Delivered Package', value: '1200' },
	{ label: 'Awaiting Package Request', value: '200' },
	{ label: 'Pending Package Orders', value: '100' },
	{ label: 'Development Fund', value: '₹ 30000' },
	{ label: 'Product Fund', value: '₹ 225000' },
	{ label: 'Total Coupons', value: '5000' },
	{ label: 'Used Coupons', value: '4000' },
	{ label: 'Active Coupons', value: ' 2000' },
	{ label: 'Expired Coupons', value: ' 1000' }
];

function Dashboard() {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setActiveSlide((current) => (current + 1) % bannerSlides.length);
		}, 3500);

		return () => window.clearInterval(timer);
	}, []);

	const goToPreviousSlide = () => {
		setActiveSlide((current) => (current - 1 + bannerSlides.length) % bannerSlides.length);
	};

	const goToNextSlide = () => {
		setActiveSlide((current) => (current + 1) % bannerSlides.length);
	};

	return (
		<div className="admin-dashboard-shell">
			<div className="admin-dashboard-root">
				

				<section className="admin-dashboard-carousel-card" aria-label="Dashboard banner carousel">
					<div className="admin-dashboard-carousel-stage">
						<button type="button" className="admin-dashboard-carousel-nav admin-dashboard-carousel-nav-left" onClick={goToPreviousSlide} aria-label="Previous banner">
							‹
						</button>
						<img src={bannerSlides[activeSlide]} alt={`Dashboard banner ${activeSlide + 1}`} className="admin-dashboard-carousel-image" />
						<button type="button" className="admin-dashboard-carousel-nav admin-dashboard-carousel-nav-right" onClick={goToNextSlide} aria-label="Next banner">
							›
						</button>
					</div>
					<div className="admin-dashboard-carousel-dots" aria-label="Banner navigation dots">
						{bannerSlides.map((slide, index) => (
							<button
								key={slide}
								type="button"
								className={`admin-dashboard-carousel-dot ${index === activeSlide ? 'is-active' : ''}`}
								onClick={() => setActiveSlide(index)}
								aria-label={`Show banner ${index + 1}`}
							/>
						))}
					</div>
				</section>

				<div className="admin-dashboard-news-bar" role="status" aria-live="polite">
					<span className="admin-dashboard-news-label"> NEWS</span>
					<div className="admin-dashboard-news-track">
						<div className="admin-dashboard-news-marquee">KYC is mandatory! Complete your KYC to receive payouts.</div>
					</div>
				</div>

				<section className="admin-dashboard-profile-header">
					<h1 className="admin-dashboard-profile-title">ELCON NETWORK</h1>
					<p className="admin-dashboard-profile-meta">Last Login Date : 23.06.2021 12:30:37PM | Admin Login</p>
				</section>

				<section className="admin-dashboard-stats-grid" aria-label="Admin dashboard metrics">
					{adminStats.map((stat) => (
						<article className="admin-dashboard-stat-card" key={stat.label}>
							<div className="admin-dashboard-stat-label">{stat.label}</div>
							<div className="admin-dashboard-stat-value">{stat.value}</div>
						</article>
					))}
				</section>

				<div className="admin-dashboard-bottom-band" />
			</div>
		</div>
	);
}

export default Dashboard;
