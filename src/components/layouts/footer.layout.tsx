import "@/common/styles/style.css";

export default function FooterScreen() {
  return (
    <footer id="footer" className="footer-2">
      <div className="site-footer">
        <div className="container">
          <div className="footer-top d-flex">
            <div className="d-flex flex-column gap-3" style={{ width: "20%" }}>
              <img
                src="https://markets.coin98.com/_next/static/media/logo.e0041453.svg"
                alt="Logo"
                title="Logo"
                style={{ width: "50%" }}
              />
              <img
                src="https://markets.coin98.com/_next/static/media/logoAppStoreDark.8cd61e7f.svg"
                alt="Logo"
                title="Logo"
                style={{ width: "50%" }}
              />
              <img
                src="https://markets.coin98.com/_next/static/media/logoGooglePlayDark.9c1db23e.svg"
                alt="Logo"
                title="Logo"
                style={{ width: "50%" }}
              />
            </div>
            <div className="row" style={{ width: "80%" }}>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Ecosystem</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Coin98 Finance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Coin98 Labs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Coin98 Ventures
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Coin98 Network
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Coin98 Token
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Coin98 Dollar
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Product</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Wallet
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Audit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Connect
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">About Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Communities
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none text-white">
                      Branding
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                <h4 className="h4">Contact Us</h4>
                <ul className="addressFooter list-unstyled">
                  <li>
                    <i className="icon anm anm-map-marker-al"></i>
                    <a href="#" className="text-decoration-none text-white">
                      Beginner's Guide
                    </a>
                  </li>
                  <li>
                    <i className="icon anm anm-map-marker-al"></i>
                    <a href="#" className="text-decoration-none text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="phone">
                    <i className="icon anm anm-phone-s"></i>
                    <a href="#" className="text-decoration-none text-white">
                      Email Us
                    </a>
                  </li>
                  <li className="email">
                    <i className="icon anm anm-envelope-l"></i>
                    <a href="#" className="text-decoration-none text-white">
                      Livechat Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-center">
              <span></span>{" "}
              <a href="templateshub.net">
                2022 Coin98 Labs. All Rights Reserved
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
