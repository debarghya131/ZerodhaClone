import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const generalContext = useContext(GeneralContext);

  const handleGetStarted = () => {
    generalContext.openBuyWindow("INFY");
  };

  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <button type="button" className="btn" onClick={handleGetStarted}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default Orders;
