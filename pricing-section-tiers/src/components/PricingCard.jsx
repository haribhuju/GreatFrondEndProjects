import PricingFeatures from "./PricingFeatures";
import PricingPrice from "./PricingPrice";

const PricingCard = ({ plan, option }) => {
  return (
    <div
      className={`border p-3 flex flex-col gap-8 rounded-lg  md:p-8 xl:col-span-4  ${
        plan.popular ? "border-indigo-700 shadow-2xl" : ""
      }`}
    >
      <span
        className={`${
          plan.popular
            ? "block text-center text-xl text-indigo-600 font-bold bg-indigo-100 p-4 m-[-12px] md:m-[-32px] md:mb-1  rounded-t-lg"
            : "hidden"
        }`}
      >
        Most Popular
      </span>
      <div>
        <h2 className="text-2xl font-semibold text-neutral-900">
          {plan.plan[0].toUpperCase() + plan.plan.slice(1)} Plan
        </h2>
        <p className="text-base text-neutral-600 mt-2">{plan.des}</p>
      </div>
      <PricingPrice plan={plan} option={option} />
      <PricingFeatures feature={plan.feature} />
      <button
        className={`border px-5 py-3 rounded-lg xl:mt-auto ${
          plan.popular
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
