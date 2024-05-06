import React from "react";
import { useBilling } from "../content/Billing";
import PricingCard from "./PricingCard";

const PricingCardList = ({ data }) => {
  const billing = useBilling();
  const { billingFrequency } = billing;
  return (
    <div className="col-span-4 grid gap-8 md:col-span-6 xl:col-span-12 xl:grid-cols-12">
      {data[billingFrequency].length > 0
        ? data[billingFrequency].map((item, index) => (
            <PricingCard key={index} item={item} />
          ))
        : "Nothing"}
    </div>
  );
};

export default PricingCardList;
