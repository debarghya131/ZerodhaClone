import React from "react";

function Education() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
                    <img
                        src="/Assets/education.svg"
                        alt="Zerodha Varsity education"
                        className="img-fluid"
                        style={{ width: "100%", maxWidth: "500px" }}
                    />
                </div>

                <div className="col-12 col-lg-6 px-lg-5">
                    <h1 className="fs-2 mb-4">Free and open market education</h1>
                    <p
                        className="text-muted lh-lg mb-4"
                        style={{ fontSize: "0.95rem" }}
                    >
                        Varsity, the largest online stock market education book in
                        the world covering everything from the basics to advanced
                        trading.
                    </p>
                    <span style={{ fontSize: "1rem", color: "#387ed1" }}>Varsity →</span>

                    <p
                        className="text-muted lh-lg mt-4 mb-4"
                        style={{ fontSize: "0.95rem" }}
                    >
                        TradingQ&amp;A, the most active trading and investment
                        community in India for all your market related queries.
                    </p>
                    <span style={{ fontSize: "1rem", color: "#387ed1" }}>
                        TradingQ&amp;A →
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Education;
