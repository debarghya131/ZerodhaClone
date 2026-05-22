import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="col-12 col-lg-7 mb-5 mb-lg-0 text-center">
                    <img
                        src={imageURL}
                        alt={productName}
                        className="img-fluid"
                        style={{ width: "100%", maxWidth: "620px" }}
                    />
                </div>

                <div className="col-12 col-lg-5 px-lg-5">
                    <h2 className="fs-2 mb-4">{productName}</h2>
                    <p
                        className="text-muted lh-lg mb-4"
                        style={{ fontSize: "0.98rem" }}
                    >
                        {productDescription}
                    </p>

                    <div className="d-flex flex-wrap gap-4 mb-4">
                        {tryDemo && (
                            <a href={tryDemo} className="text-decoration-none">
                                Try demo →
                            </a>
                        )}
                        {learnMore && (
                            <a href={learnMore} className="text-decoration-none">
                                Learn more →
                            </a>
                        )}
                    </div>

                    {(googlePlay || appStore) && (
                        <div className="d-flex flex-wrap gap-3">
                            {googlePlay && (
                                <a href={googlePlay} aria-label={`${productName} on Google Play`}>
                                    <img
                                        src="/Assets/googlePlayBadge.svg"
                                        alt="Get it on Google Play"
                                        style={{ height: "40px" }}
                                    />
                                </a>
                            )}
                            {appStore && (
                                <a href={appStore} aria-label={`${productName} on App Store`}>
                                    <img
                                        src="/Assets/appstoreBadge.svg"
                                        alt="Download on the App Store"
                                        style={{ height: "40px" }}
                                    />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default LeftSection;
