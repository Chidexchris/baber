import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-area header-transparent pt-20">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-1 col-6">
                <div className="logo">
                  <a href="/"><img src="assets/img/logo/logo.png" alt="Logo" /></a>
                </div>
              </div>

              {/* Hamburger button */}
              <div className="col-6 d-lg-none text-end">
                <button
                  className="mobile-menu-toggle"
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    marginLeft: '95%',
                    color: '#d19f68'
                  }}
                >
                  ☰
                </button>
              </div>

              <div className="col-xl-10 col-lg-10 col-md-10 d-none d-lg-block">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  <div className="main-menu f-right">
                    <nav>
                      <ul id="navigation">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="portfolio">Portfolio</a></li>
                        <li><a href="contact">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-btn f-right ml-30">
                    <a href="from.html" className="btn header-btn">Book Now</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="mobile-menu d-lg-none mt-3">
                <nav>
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="portfolio">Portfolio</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="https://forms.gle/K5WZfXrnGiWEn4DN8" className="btn header-btn">Book Now</a></li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
