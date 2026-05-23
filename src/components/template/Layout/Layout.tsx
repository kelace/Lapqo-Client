import { NavLink, Outlet } from "react-router-dom";
import { routes } from "@shared/config/routes";

export function Layout() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <nav className="nav" style={{ display: "flex", gap: "10px" }}>
            <NavLink to={routes.home}>Home</NavLink>
            <NavLink to={routes.users.base}>Users</NavLink>
            {/* <NavLink to={routes.about}>About</NavLink> */}
          </nav>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__container">footer</div>
      </footer>
    </>
  );
}
