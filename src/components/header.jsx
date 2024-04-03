import style from "./header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <h1>conduit</h1>
      <h3>A place to share your knowledge.</h3>
    </div>
  );
};
