import { Link, Outlet } from "react-router-dom";

export default function LayoutWebsite() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/category">Danh muc</Link>
        </li>
        <li>
          <Link to="/admin">Quản trị</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
