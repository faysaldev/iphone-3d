import AppLogo from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";
import CartIcon from "../assets/store.svg";
function Nav() {
  return (
    <header>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul className="list-styled">
            <li>
              <img src={AppLogo} alt="logo" />
            </li>
            <li>
              <a className="link-styled">Store</a>
            </li>

            <li>
              <a className="link-styled">Mac</a>
            </li>
            <li>
              <a className="link-styled">iPad</a>
            </li>
            <li>
              <a className="link-styled">iPhone</a>
            </li>

            <li>
              <a className="link-styled">Watch</a>
            </li>
            <li>
              <a className="link-styled">Vision</a>
            </li>
            <li>
              <a className="link-styled">Airpods</a>
            </li>
            <li>
              <a className="link-styled">TV & Home</a>
            </li>
            <li>
              <a className="link-styled">Entertainment</a>
            </li>
            <li>
              <a className="link-styled">Accessories</a>
            </li>
            <li>
              <a className="link-styled">Support</a>
            </li>
            <li>
              <img src={SearchIcon} alt="searchIcon" />
            </li>
            <li>
              <img src={CartIcon} alt="CartIcon" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
