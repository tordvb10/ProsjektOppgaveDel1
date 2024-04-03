import style from "./nav.module.css";

export const NavBar = () => {
  return (
    <div className={style.nav}>
      <div className="Navbar">
        <h2>conduit</h2>
        <button id="home">Home</button>
        <button id="sign-in">Sign In</button>
        <button id="sign-up">Sign Up</button>
      </div>
      <div className={style.nav - header}>
        <h1>conduit</h1>
        <h3>A place to share your knowledge.</h3>
      </div>
    </div>
  );
};
