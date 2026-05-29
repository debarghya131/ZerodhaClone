import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const teamMembers = [
    {
        name: "Nikhil Kamath",
        role: "Co-founder & CFO",
        image: "/Assets/co-founder.webp",
    },
    {
        name: "Kailash Nadh",
        role: "CTO",
        image: "/Assets/CTO.webp",
    },
    {
        name: "Venu Madhav",
        role: "COO",
        image: "/Assets/COO.webp",
    },
    {
        name: "Hanan Delvi",
        role: "Chief of Education",
        image: "/Assets/Chief_of_Education.webp",
    },
    {
        name: "Seema Patil",
        role: "Director",
        image: "/Assets/Director.webp",
    },
    {
        name: "Karthik Rangappa",
        role: "Chief of Strategy",
        image: "/Assets/Director_Strategy.webp",
    },
];

const friendLinks = [
    {
        label: "LinkedIn Profile",
        href: "https://www.linkedin.com/in/debarghya-bandyopadhyay-953b02400?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        icon: LinkedInIcon,
    },
    {
        label: "X",
        href: "https://x.com/debarghya131",
        icon: XIcon,
    },
    {
        label: "GitHub",
        href: "https://github.com/debarghya131",
        icon: GitHubIcon,
    },
    {
        label: "Portfolio",
        href: "https://portfolio.debarghya.org",
        icon: LanguageIcon,
    },
    {
        label: "Email",
        href: "mailto:debarghyabandyopadhyay191@gmail.com",
        displayText: "debarghyabandyopadhyay191@gmail.com",
        icon: EmailIcon,
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
                        src="/Assets/FounderCEO.webp"
                        alt="Nithin Kamath"
                        className="img-fluid rounded-circle mb-4 about-team__lead-image"
                        width="290"
                        height="290"
                        loading="lazy"
                        decoding="async"
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

                    <div className="about-team__friend-card">
                        <h3 className="about-team__friend-title">Be My Friend</h3>
                        <p className="text-muted about-team__friend-copy">
                            I always like to make new friends. Follow me on
                        </p>
                        <div className="about-team__friend-links">
                            {friendLinks.map((link) => {
                                const Icon = link.icon;
                                const isEmailLink = link.href.startsWith("mailto:");
                                const linkTarget = isEmailLink ? undefined : "_blank";
                                const linkRel = isEmailLink ? undefined : "noreferrer";

                                return (
                                    <a
                                        href={link.href}
                                        className="about-team__friend-icon"
                                        target={linkTarget}
                                        rel={linkRel}
                                        aria-label={link.label}
                                        title={link.label}
                                        key={link.label}
                                    >
                                        <Icon fontSize="small" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
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
                                width="180"
                                height="180"
                                loading="lazy"
                                decoding="async"
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
