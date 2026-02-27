import { useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './UserLayout.css';

const menuItems = [
  { key: 'dashboard', label: 'Dashboard', to: '/user/dashboard' },
  {
    key: 'profile',
    label: 'Profile',
    children: [
      { label: 'My Profile', to: '/user/profile/my-profile' },
      { label: 'Update Profile', to: '/user/profile/update-profile' },
      { label: 'Update Bank Details', to: '/user/profile/update-bank-details' },
      { label: 'Change Password', to: '/user/profile/change-password' }
    ]
  },
  {
    key: 'team',
    label: 'Team Details',
    children: [
      { label: 'Direct List', to: '/user/team/direct-list' },
      { label: 'My Tree', to: '/user/team/my-tree' },
      { label: 'My Team', to: '/user/team/my-team' },
      { label: 'Team Level', to: '/user/team/team-level' },
      { label: 'My Level', to: '/user/team/my-level' }
    ]
  },
  {
    key: 'payment',
    label: 'Payment History',
    children: [
      { label: 'Self Payment History', to: '/user/payment/self-payment-history' },
      { label: 'Payment Request History', to: '/user/payment/payment-request-history' }
    ]
  },
  {
    key: 'income',
    label: 'Income',
    children: [
      { label: 'Total Level Income', to: '/user/income/total-level-income' },
      { label: 'Level Income', to: '/user/income/level-income' }
    ]
  },
  {
    key: 'support',
    label: 'Support Ticket',
    children: [{ label: 'Support Ticket', to: '/user/support/create-ticket' }]
  },
  { key: 'signout', label: 'Sign Out', to: '/user/sign-out' }
];

function toTitleCase(text) {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function buildBreadcrumb(pathname) {
  const path = pathname.replace('/user/', '');
  const segments = path.split('/').filter(Boolean);
  if (!segments.length) {
    return 'Dashboard';
  }

  return toTitleCase(segments[segments.length - 1]);
}

function UserLayout() {
  const location = useLocation();
  const breadcrumb = useMemo(() => buildBreadcrumb(location.pathname), [location.pathname]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSections, setOpenSections] = useState({
    profile: true,
    team: true,
    payment: true,
    income: true,
    support: true
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`user-root ${isSidebarOpen ? 'user-sidebar-open' : 'user-sidebar-collapsed'}`}>
      <aside className="user-sidebar">
        <div className="user-brand">IHH</div>
        <div className="user-member-card">
          <div className="user-member-avatar">👤</div>
          <div>
            <div className="member-label">Member ID</div>
            <div className="member-value">IHH192108</div>
          </div>
        </div>
        <div className="user-nav-title">MAIN NAVIGATION</div>

        <nav className="user-nav">
          {menuItems.map((item) => {
            if (item.children) {
              const isOpen = openSections[item.key];

              return (
                <div key={item.key} className="user-nav-group">
                  <button
                    type="button"
                    className="user-nav-link user-nav-toggle"
                    onClick={() => toggleSection(item.key)}
                  >
                    <span>{item.label}</span>
                    <span>{isOpen ? '⌄' : '›'}</span>
                  </button>
                  {isOpen && (
                    <div className="user-submenu">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `user-submenu-link ${isActive ? 'user-nav-active' : ''}`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.key}
                to={item.to}
                className={({ isActive }) => `user-nav-link ${isActive ? 'user-nav-active' : ''}`}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      <main className="user-main">
        <header className="user-topbar">
          <div className="user-topbar-left">
          <button
            type="button"
            className="user-menu-btn"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
            <span className="user-top-title">Dashboard</span>
          </div>
          <div className="user-top-avatar">👤</div>
        </header>

        <section className="user-page-wrap">
          <div className="user-breadcrumb-row user-breadcrumb-right">
            <span className="user-breadcrumb-home">Home</span>
            <span>/</span>
            <span>{breadcrumb}</span>
          </div>
          <Outlet />
        </section>

        <footer className="user-footer">Copyright © 2026 P2P Investment</footer>
      </main>
    </div>
  );
}

export default UserLayout;
