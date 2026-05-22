import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <section className="container py-5">
            <div className="row align-items-center flex-lg-row-reverse">
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

                    {learnMore && (
                        <a href={learnMore} className="text-decoration-none">
                            Learn more →
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

export default RightSection;
