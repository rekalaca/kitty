import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Négyzetre emel</Link>
          </li>
          <li>
            <Link to="/Beker">Normál Háromszögek</Link>
          </li>
          <li>
            <Link to="/Derharomszog">Derékszögű Háromszög</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;