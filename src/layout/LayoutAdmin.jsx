import { Link, Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="product">Product Manager</Link>
        </li>
        <li>
          <Link to="product/add">Add product</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
