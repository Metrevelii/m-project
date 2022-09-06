import { Fragment } from "react";
import classes from "./HeaderLoginButton.module.css";

const HeaderLoginButton = () => {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <button className={`${classes.btn} ${classes.login}`}>Login</button>
        <button className={`${classes.btn} ${classes.signUp}`}>Sign Up</button>
      </div>
    </Fragment>
  );
};

export default HeaderLoginButton;
