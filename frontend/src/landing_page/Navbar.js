import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
        <nav
            className="navbar navbar-expand-lg bg-white border-bottom sticky-top"
            style={{ zIndex: 1000 }}
        >
            <div className="container py-2">
                <Link className="navbar-brand" to="/">
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
                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="/signup">
                                Signup
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="/pricing">
                                Pricing
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-muted" to="/support">
                                Support
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
