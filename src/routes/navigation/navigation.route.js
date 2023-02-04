import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const Navigation = () => {
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
          <Link to="auth" className="nav-link">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
