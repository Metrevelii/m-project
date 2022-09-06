import { Fragment } from "react";
import classes from "./Header.module.css";
import headerImage from "../../assets/cover-img.jpg";
import HeaderLoginButton from "./HeaderLoginButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMovies</h1>
        <HeaderLoginButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Cover for Movies" />
      </div>
    </Fragment>
  );
};

export default Header;
