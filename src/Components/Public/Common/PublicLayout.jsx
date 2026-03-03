import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './PublicLayout.css';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Helping Process', to: '/helping-process' },
  { label: 'Our Activity', to: '/our-activity' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' }
];

function PublicLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`public-root ${isMenuOpen ? 'public-menu-open' : 'public-menu-closed'}`}>
      <div className="public-top-strip">
        <div className="public-container public-top-inner">
          <span>support@p2pinvestment.com</span>
          <div className="public-socials" aria-hidden="true">
            <span>f</span>
            <span>t</span>
            <span>i</span>
            <span>▶</span>
          </div>
        </div>
      </div>

      <header className="public-header">
        <div className="public-container public-header-inner">
          <NavLink to="/" className="public-logo-wrap">
            <div className="public-logo-mark">IHH</div>
            <div className="public-logo-text">P2P Investment</div>
          </NavLink>

          <button
            type="button"
            className="public-menu-btn"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <nav className="public-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `public-nav-link ${isActive ? 'active' : ''}`}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="public-auth-btns">
            <NavLink to="/user-login" className="public-auth-btn">
              Login
            </NavLink>
            <NavLink to="/registration" className="public-auth-btn">
              Registration
            </NavLink>
          </div>
        </div>
      </header>

      <aside className="public-mobile-sidebar">
        <nav className="public-mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={`mobile-${item.to}`}
              to={item.to}
              className={({ isActive }) => `public-mobile-link ${isActive ? 'active' : ''}`}
              end={item.to === '/'}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="public-mobile-auth">
          <NavLink to="/user-login" className="public-auth-btn" onClick={closeMenu}>
            Login
          </NavLink>
          <NavLink to="/registration" className="public-auth-btn" onClick={closeMenu}>
            Registration
          </NavLink>
        </div>
      </aside>

      <button
        type="button"
        className="public-mobile-overlay"
        aria-label="Close menu overlay"
        onClick={closeMenu}
      />

      <main>
        <Outlet />
      </main>

      <section className="public-cta-band">
        <div className="public-container public-cta-inner">
          <p>Success Is Not Final, Failure Is Not Fatal :</p>
          <h3>It Is The Courage To Continue That Counts.</h3>
          <NavLink to="/registration" className="public-cta-btn">
            Registration
          </NavLink>
        </div>
      </section>

      <footer className="public-footer">
        <div className="public-container public-footer-grid">
          <div>
            <h4>Navigation</h4>
            <p>› Home</p>
            <p>› Contact Us</p>
            <p>› Login</p>
            <p>› Registration</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>E-Mail :</p>
            <p>support@p2pinvestment.com</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="public-footer-socials" aria-hidden="true">
              <span>f</span>
              <span>t</span>
              <span>i</span>
              <span>▶</span>
            </div>
          </div>
        </div>
        <div className="public-copyright">Copyright © 2026 P2P Investment. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default PublicLayout;
