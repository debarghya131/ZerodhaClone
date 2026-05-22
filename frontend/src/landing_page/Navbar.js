import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Login", to: "/login" },
  { label: "Signup", to: "/signup" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Pricing", to: "/pricing" },
  { label: "Support", to: "/support" },
];

function Navbar() {
  const navigate = useNavigate();

  const handleNavClick = (event, to) => {
    event.preventDefault();
    navigate(to, {
      state: { scrollToTop: Date.now() },
    });
  };

  return (
        <nav
            className="navbar navbar-expand-lg bg-white border-bottom sticky-top site-navbar"
            style={{ zIndex: 1000 }}
        >
            <div className="container py-2">
                <Link className="navbar-brand" to="/" onClick={(event) => handleNavClick(event, "/")}>
                    <img
                        src="/Assets/logo.svg"
                        alt="Zerodha"
                        style={{ width: "130px", height: "auto" }}
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.to}>
                                <NavLink
                                    className="nav-link text-muted"
                                    to={item.to}
                                    onClick={(event) => handleNavClick(event, item.to)}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
