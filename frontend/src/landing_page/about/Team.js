import React from "react";

const teamMembers = [
    {
        name: "Nikhil Kamath",
        role: "Co-founder & CFO",
        image: "/Assets/co-founder.png",
    },
    {
        name: "Kailash Nadh",
        role: "CTO",
        image: "/Assets/CTO.png",
    },
    {
        name: "Venu Madhav",
        role: "COO",
        image: "/Assets/COO.png",
    },
    {
        name: "Hanan Delvi",
        role: "Chief of Education",
        image: "/Assets/Chief_of_Education.png",
    },
    {
        name: "Seema Patil",
        role: "Director",
        image: "/Assets/Director.png",
    },
    {
        name: "Karthik Rangappa",
        role: "Chief of Strategy",
        image: "/Assets/Director_Strategy.png",
    },
];

function Team() {
    return (
        <section className="container py-5 about-team">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-12">
                    <h1 className="fs-2">People</h1>
                </div>
            </div>

            <div className="row align-items-center mb-5 pb-4">
                <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
                    <img
                        src="/Assets/FounderCEO.png"
                        alt="Nithin Kamath"
                        className="img-fluid rounded-circle mb-4 about-team__lead-image"
                        style={{
                            width: "290px",
                            height: "290px",
                            objectFit: "cover",
                        }}
                    />
                    <h2 className="fs-4 mb-1">Debarghya Bandyopadhyay</h2>
                    <p className="text-muted mb-0">Founder, CEO</p>
                </div>

                <div className="col-12 col-lg-7 px-lg-5 about-team__lead-copy">
                    <p className="text-muted lh-lg about-team__lead-copy-text" style={{ fontSize: "0.98rem" }}>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome
                        the hurdles he faced during his decade long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking
                        industry.
                    </p>
                    <p className="text-muted lh-lg about-team__lead-copy-text" style={{ fontSize: "0.98rem" }}>
                        He is a member of the SEBI Secondary Market Advisory
                        Committee and the Market Data Advisory Committee.
                    </p>
                    <p className="text-muted lh-lg mb-0 about-team__lead-copy-text" style={{ fontSize: "0.98rem" }}>
                        Playing basketball is his zen. He also loves fitness and
                        reading.
                    </p>
                </div>
            </div>

            <div className="row g-4 about-team__grid">
                {teamMembers.map((member) => (
                    <div className="col-6 col-md-4 about-team__member-col" key={member.name}>
                        <div className="text-center about-team__member-card">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="img-fluid rounded-circle mb-3 about-team__member-image"
                                style={{
                                    width: "180px",
                                    height: "180px",
                                    objectFit: "cover",
                                }}
                            />
                            <h3 className="fs-5 mb-1">{member.name}</h3>
                            <p className="text-muted mb-0">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
