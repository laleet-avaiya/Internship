import React, { Fragments } from 'react';



function Header() {
  return (
    <div>
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" className="navigation__button"></label>
        <div className="navigation__background"> &nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="/" className="navigation__link">About us</a></li>
            <li className="navigation__item"><a href="/" className="navigation__link">Your benefits us</a></li>
            <li className="navigation__item"><a href="/" className="navigation__link">Popular</a></li>
            <li className="navigation__item"><a href="/" className="navigation__link">Stories</a></li>
            <li className="navigation__item"><a href="/" className="navigation__link">Book now</a></li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box">
          <img className="header__logo" src="../img/logo-with.png" alt="Logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="/" className="btn btn--white btn--animated">Discover our tours</a>
        </div>
      </header>
    </div>
  )
}

export default Header;
