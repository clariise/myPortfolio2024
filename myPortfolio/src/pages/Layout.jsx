import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <main className="d-flex flex-column min-vh-100 mt-5 mb-4">
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <Link className="navbar-brand fw-bold flg-1" to="/">
            dev.clrss
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="project">
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="experience">
                  Experience
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="service">
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
      <footer className="bg-light p-3 text-center footer mt-auto">
        <p>dev.clrss@2024.All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Layout;
