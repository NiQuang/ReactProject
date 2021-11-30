import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import '../layout/assets/css/main.css';
export default function LayoutAdmin() {

  // const { Header, Content, Footer } = Layout;

  return (
    <Row className="admin__content">
      <Col span={6}>
          <ul className="admin__categories">
            <li >
              <Link to="/"  className="admin__categories-item">go home</Link>
            </li>
            <li >
              <Link  className="admin__categories-item" to="/admin">Dashboard</Link>
            </li>
            <li >
              <Link  className="admin__categories-item" to="product">Product Manager</Link>
            </li>
            <li >
              <Link  className="admin__categories-item" to="product/add">Add product</Link>
            </li>
          </ul>
      </Col>
      <Col span={18}>
        <Outlet />
      </Col>
    </Row>
  );
}
