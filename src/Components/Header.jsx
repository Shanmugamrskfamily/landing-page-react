import React from "react";

function Header() {
  const logoStyle = {
    width: "100px",
    height: "auto",
  };

  return (
    <><nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <a>
    <img src="./images/logo.ico" alt="Brand Logo" style={logoStyle} />
  </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse ml-2 navbar-collapse justify-content-end"
      id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <h3><a className="nav-link">Home</a></h3>
        </li>
        <li className="nav-item">
          <h3><a className="nav-link">About</a></h3>
        </li>
        <li className="nav-item">
          <h3><a className="nav-link">Tours</a></h3>
        </li>
      </ul>
    </div>
  </nav>
  </>
  );
}
export default Header;
