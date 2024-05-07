import React from "react";

const Metric = ({ value }) => {
  function fixString(item) {
    const capitalized = item[0].toUpperCase() + item.slice(1);
    const withSpaces = capitalized.replace(/_/g, " ");
    return withSpaces;
  }
  return (
    <div className="border border-neutral-200 rounded-lg py-6 flex flex-col justify-center items-center gap-4">
      <p className="text-4xl font-bold text-indigo-700 leading-10 md:text-5xl">
        {value.value}
      </p>
      <p className="text-xl text-neutral-600 leading-7">
        {fixString(value.metric)}
      </p>
    </div>
  );
};

export default Metric;
