import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import Cart from "../../components/cart/cart.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="nav-logo">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link to="auth" className="nav-link">
              Sign In
            </Link>
          )}
          <Cart />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
