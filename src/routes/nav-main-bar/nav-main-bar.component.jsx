import "./nav-main-bar.style.scss";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/card-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

 
  return (
    <Fragment>
      <div className="topNav">
        <div>
          <Link className="logo-container" to="/">
            <CrwnLogo className="logo" />
          </Link>
        </div>
        <div className="nav-link-container">
          <Link className="nav-link" to="/Shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/Credentials">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
