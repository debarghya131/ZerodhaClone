import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5 home-hero">
      <div className="row text-center home-hero__content">
        <img src="Assets/homeHero.png" alt="Zerodha home" className="mb-5 home-hero__image" />

        <h1 className="mt-5 home-hero__title">Invest in everything</h1>
        <p className="mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 home-hero__cta"
        >
          SignUp Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
