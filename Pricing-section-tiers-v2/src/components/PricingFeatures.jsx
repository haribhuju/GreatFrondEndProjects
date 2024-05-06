import "boxicons";
import React from "react";

const PricingFeatures = ({ feature }) => {
  const iconStyle = {
    backgroundColor: "#e0e7ff",
    borderRadius: "100%",
    flexShrink: 0,
  };
  return (
    <ul className="flex flex-col gap-5">
      {feature.map((item) => (
        <li className="flex gap-3 items-center text-base text-neutral-600">
          <box-icon name="check" color="#4338ca" style={iconStyle}></box-icon>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default PricingFeatures;
