import React from "react";
import Pricing from "./Pricing";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ item }) => {
  return (
    <div
      className={`border p-3 flex flex-col gap-8 rounded-lg md:p-8 xl:col-span-4  ${
        item.popular ? "border-indigo-700 shadow-2xl" : ""
      }`}
    >
      <span
        className={`${
          item.popular
            ? "block text-center text-xl text-indigo-600 font-bold bg-indigo-100 p-4 m-[-12px] md:m-[-32px] md:mb-1  rounded-t-lg"
            : "hidden"
        }`}
      >
        Most Popular
      </span>
      <div>
        <h2 className="text-2xl font-semibold text-neutral-900">
          {item.plan[0].toUpperCase() + item.plan.slice(1)} Plan
        </h2>
        <p className="text-base text-neutral-600 mt-2">{item.des}</p>
      </div>
      <Pricing item={item} />
      <PricingFeatures feature={item.feature} />
      <button
        className={`border px-5 py-3 rounded-lg md:mt-auto ${
          item.popular
            ? "bg-indigo-700 text-white hover:bg-indigo-900 border-none"
            : "hover:bg-neutral-200"
        }`}
      >
        Buy Now
      </button>
    </div>
  );
};

export default PricingCard;
