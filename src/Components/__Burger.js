function Burger() {
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span>&#8734; MENU</span>
      </label>
      <ul className="menu__box">
        <li>
          <a className="menu__item" href="#">
            HOME
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            ABOUT ME
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
           CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
