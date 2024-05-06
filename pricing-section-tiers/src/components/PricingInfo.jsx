import React, { useContext } from "react";
import { PricingContext } from "./PricingProvider";

const PricingInfo = () => {
  const { billingFrequency, handleFrequencyChange } =
    useContext(PricingContext);

  return (
    <div className="col-span-4 text-center md:col-span-6 xl:col-span-12">
      <span className="text-base text-indigo-700 font-semibold">
        Pricing Tiers
      </span>
      <h1 className="text-3xl text-neutral-900 font-semibold mt-3 md:text-5xl md:mt-4">
        Fit for all your needs
      </h1>
      <p className="text-lg text-neutral-600 mt-5 md:text-xl">
        Pick the plan that suits you today and step up as your demands grow -
        our flexible options have your journey mapped out.
      </p>
      <div className="flex gap-4 mt-10 justify-center md:gap-8 ">
        <button
          className={`px-4 py-[10px] grow md:grow-0 md:px-9 ${
            billingFrequency === "monthly" ? "border border-[0.5] shadow" : ""
          }`}
          onClick={() => handleFrequencyChange("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-[10px] grow md:grow-0 md:px-9 ${
            billingFrequency === "annually" ? "border border-[0.5] shadow" : ""
          }`}
          onClick={() => handleFrequencyChange("annually")}
        >
          Annually
        </button>
      </div>
    </div>
  );
};

export default PricingInfo;
