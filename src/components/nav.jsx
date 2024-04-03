import style from "./nav.module.css";

export const NavBar = () => {
  return (
    <div className={style.nav}>
      <h2>conduit</h2>
      <button id="home">Home</button>
      <button id="sign-in">Sign In</button>
      <button id="sign-up">Sign Up</button>
    </div>
  );
};
