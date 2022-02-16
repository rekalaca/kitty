import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Főoldal</Link>
          </li>
          <li>
            <Link to="/Kittys">1. feladat</Link>
          </li>
          <li>
            <Link to="/Nemes">2. feladat</Link>
          </li>
          <li>
            <Link to="/Cars">3. feladat</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;