import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src="../img/logo-with.png" alt="Full logo" className="footer__logo" />
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="/" className="footer__link">Company</a></li>
              <li className="footer__item"><a href="/" className="footer__link">Contact</a></li>
              <li className="footer__item"><a href="/" className="footer__link">Carrers</a></li>
              <li className="footer__item"><a href="/" className="footer__link">Privacy Policy</a></li>
              <li className="footer__item"><a href="/" className="footer__link">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            <a href="/" className="footer__link">Build by 201812087 </a>
            To learn Advance CSS and Sass
            Copyright &copy; Jonas Schnedtmann.
                </p>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
