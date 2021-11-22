import { Link, Outlet } from "react-router-dom";
import style from './websiteStyle.module.css';

export default function LayoutWebsite() {
  return (
    <div>
      <ul className={style.header__list}>
        <li>
          <Link className={style.header__listItem} to="/">Home Page</Link>
        </li>
        <li>
          <Link className={style.header__listItem} to="/product">Product</Link>
        </li>
        <li>
          <Link className={style.header__listItem} to="/category">Danh muc</Link>
        </li>
        <li>
          <Link className={style.header__listItem} to="/login">Login with google</Link>
        </li>
        <li>
          <Link className={style.header__listItem} to="/signin">sign in</Link>
        </li>
        <li>
          <Link className={style.header__listItem} to="/signup">sign up</Link>
        </li>
        <li>
          <Link className={style.header__listItem} to="/admin">Quản trị</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
