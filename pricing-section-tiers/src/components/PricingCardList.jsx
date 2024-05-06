import React, { useContext } from "react";
import PricingCard from "./PricingCard";
import { PricingContext } from "./PricingProvider";

const PricingCardList = ({ value }) => {
  const { billingFrequency } = useContext(PricingContext);
  return (
    <div className="col-span-4 grid gap-8 md:col-span-6 xl:col-span-12 xl:grid-cols-12">
      {value[billingFrequency].length > 0
        ? value[billingFrequency].map((plan) => (
            <PricingCard plan={plan} option={billingFrequency} />
          ))
        : "Nothing"}
    </div>
  );
};

export default PricingCardList;
