import { useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './AdminLayout.css';

const menuItems = [
  { key: 'dashboard', label: 'Dashboard', to: '/dashboard' },
  {
    key: 'members',
    label: 'Members',
    children: [
      { label: 'Member View', to: '/members/member-view' },
      { label: 'Edit Profile', to: '/members/edit-profile' },
      { label: 'Member Password', to: '/members/member-password' },
      { label: 'Member Block List', to: '/members/member-block-list' },
      { label: 'Member Alert List', to: '/members/member-alert-list' }
    ]
  },
  {
    key: 'tree',
    label: 'Tree',
    children: [
      { label: 'Team View', to: '/tree/team-view' },
      { label: 'My Direct Referral', to: '/tree/my-direct-referral' },
      { label: 'MY TREE', to: '/tree/my-tree' },
      { label: 'Team Level', to: '/tree/team-level' },
      { label: 'My Level', to: '/tree/my-level' }
    ]
  },
  {
    key: 'payment',
    label: 'Payment',
    children: [{ label: 'Payment Request', to: '/payment/payment-request' }]
  },
  {
    key: 'income',
    label: 'Income',
    children: [{ label: 'Level Income', to: '/income/level-income' }]
  },
  {
    key: 'support',
    label: 'Support Ticket',
    children: [{ label: 'Ticket History', to: '/support-ticket/ticket-history' }]
  },
  {
    key: 'other',
    label: 'Other',
    children: [{ label: 'Block And Un Block Member Id', to: '/other/block-unblock' }]
  },
  { key: 'signout', label: 'Sign Out', to: '/admin-login' }
];

function toTitleCase(text) {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function buildBreadcrumb(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) {
    return ['Dashboard'];
  }

  return segments.map((segment) => toTitleCase(segment));
}

function AdminLayout() {
  const location = useLocation();
  const breadcrumb = useMemo(() => buildBreadcrumb(location.pathname), [location.pathname]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [openSections, setOpenSections] = useState({
    members: true,
    tree: true,
    payment: true,
    income: true,
    support: true,
    other: true
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`admin-root ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <aside className="sidebar">
        <div className="sidebar-brand">IHH</div>
        <div className="sidebar-user">
          <div className="sidebar-avatar">👤</div>
          <span>Administrator</span>
        </div>
        <div className="sidebar-section-title">MAIN NAVIGATION</div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            if (item.children) {
              const isOpen = openSections[item.key];

              return (
                <div key={item.key} className="sidebar-group">
                  <button
                    type="button"
                    className="sidebar-link sidebar-toggle"
                    onClick={() => toggleSection(item.key)}
                  >
                    <span>{item.label}</span>
                    <span>{isOpen ? '⌄' : '›'}</span>
                  </button>

                  {isOpen && (
                    <div className="sidebar-submenu">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `sidebar-sublink ${isActive ? 'sidebar-active' : ''}`
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
                className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-active' : ''}`}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      <main className="admin-main">
        <header className="topbar">
          <button
            type="button"
            className="topbar-menu"
            aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Open sidebar'}
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <div className="topbar-avatar">👨‍💼</div>
        </header>

        <section className="page-container">
          <div className="page-breadcrumb-row">
            <span className="crumb-home">Home</span>
            <span className="crumb-divider">/</span>
            <span>{breadcrumb[breadcrumb.length - 1]}</span>
          </div>
          <Outlet />
        </section>

        <footer className="page-footer">Copyright © 2026 P2P Investment</footer>
      </main>
    </div>
  );
}

export default AdminLayout;