import { createContext, useContext, useState } from "react";

export const Billing = createContext();

export const useBilling = () => {
  const billing = useContext(Billing);
  return billing;
};

export const BillingProvider = ({ children }) => {
  const [billingFrequency, setBillingFrequency] = useState("monthly");

  const value = { billingFrequency, setBillingFrequency };

  return <Billing.Provider value={value}>{children}</Billing.Provider>;
};
