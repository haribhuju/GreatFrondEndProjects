const PricingPrice = ({ plan, option }) => {
  return (
    <div>
      <p className={`text-base ${plan.popular ? "text-indigo-500" : ""}`}>
        <span
          className={`text-5xl font-semibold ${
            plan.popular ? "text-indigo-600" : ""
          }`}
        >
          ${plan.price}
        </span>{" "}
        / month
      </p>
      <p className="text-base text-neutral-600 mt-2">
        {option === "monthly"
          ? "Billed monthly"
          : `Billed annually ($${plan.billedPrice})`}
      </p>
    </div>
  );
};

export default PricingPrice;
