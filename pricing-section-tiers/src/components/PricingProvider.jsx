import React, { createContext, useState } from "react";

const PricingContext = createContext();

function PricingProvider({ children }) {
  const [billingFrequency, setBillingFrequency] = useState("monthly");

  const handleFrequencyChange = (newFrequency) => {
    setBillingFrequency(newFrequency);
  };

  const value = { billingFrequency, handleFrequencyChange };

  return (
    <PricingContext.Provider value={value}>{children}</PricingContext.Provider>
  );
}

export { PricingContext, PricingProvider };
