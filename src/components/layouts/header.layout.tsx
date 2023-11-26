import "@/common/styles/style.css";

const HeaderScreen = () => {
  return (
    <div className="pageWrapper">

        <div className="header-wrap d-flex align-items-center justify-content-between h-100 px-5" style={{ minHeight: "60px", background: '#11100f' }}>
            <div className="row align-items-center mx-5">
              <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                <a href="index.html">
                  <img
                    src="https://markets.coin98.com/_next/static/media/logo.e0041453.svg"
                    alt="Logo"
                    title="Logo"
                    style={{ width: "50%" }}
                  />
                </a>
              </div>
              <div className="col-2 col-sm-3 col-md-3 col-lg-8">
                <div className="d-block d-lg-none">
                  <button
                    type="button"
                    className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
                  >
                    <i className="icon anm anm-times-l"></i>
                    <i className="anm anm-bars-r"></i>
                  </button>
                </div>
                <nav className="grid__item">
                  <ul className="list-unstyled d-flex gap-3">
                    <li className="lvl1 parent megamenu">
                      <a
                        href="/"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Coin 89
                      </a>
                    </li>
                    <li className="lvl1 parent dropdown">
                      <a
                        href="#"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Products
                      </a>
                    </li>
                    <li className="lvl1 parent dropdown">
                      <a
                        href="/collection"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Trade
                      </a>
                    </li>
                    <li className="lvl1">
                      <a
                        href="/about"
                        className="text-white fw-normal text-decoration-none"
                      >
                       Wallet
                      </a>
                    </li>
                    <li className="lvl1">
                      <a
                        href="/contact"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Markets
                      </a>
                    </li>
                    <li className="lvl1 parent megamenu">
                      <a
                        href="/faqs"
                        className="text-white fw-normal text-decoration-none"
                      >
                        Campain
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
    </div>
  );
};

export default HeaderScreen;
