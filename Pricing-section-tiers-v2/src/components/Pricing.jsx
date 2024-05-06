import React from "react";
import { useBilling } from "../content/Billing";

const Pricing = ({ item }) => {
  const billing = useBilling();
  const { billingFrequency } = billing;

  return (
    <div>
      <p className={`text-base ${item.popular ? "text-indigo-500" : ""}`}>
        <span
          className={`text-5xl font-semibold ${
            item.popular ? "text-indigo-600" : ""
          }`}
        >
          ${item.price}
        </span>{" "}
        / month
      </p>
      <p className="text-base text-neutral-600 mt-2">
        {billingFrequency === "monthly"
          ? "Billed monthly"
          : `Billed annually ($${item.billedPrice})`}
      </p>
    </div>
  );
};

export default Pricing;
