function Burger() {
  return (
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span>&#8734; MENU</span>
      </label>
      <ul class="menu__box">
        <li>
          <a class="menu__item" href="#">
            HOME
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            ABOUT ME
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
           CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
