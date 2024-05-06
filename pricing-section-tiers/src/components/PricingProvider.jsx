import React, { createContext, useState } from "react";

const PricingContext = createContext();

function PricingProvider({ children }) {
  const [billingFrequency, setBillingFrequency] = useState("monthly"); // Initial state

  const handleFrequencyChange = (newFrequency) => {
    setBillingFrequency(newFrequency);
  };

  const value = { billingFrequency, handleFrequencyChange }; // Expose state and function

  return (
    <PricingContext.Provider value={value}>{children}</PricingContext.Provider>
  );
}

export { PricingContext, PricingProvider };
