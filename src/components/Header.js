import {LOGO_URL} from "./utils/constants";
const Header = () => {
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact US</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;