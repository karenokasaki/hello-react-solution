import logoSmall from "../images/ironhack-logo-xs.png";
import menuTop from "../images/menu-top-xs.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logoSmall} alt="logo" />
        <img src={menuTop} alt="logo" />
      </div>
    </>
  );
}

export default Navbar;
