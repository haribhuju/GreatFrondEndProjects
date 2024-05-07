import React, { useEffect, useState } from "react";
import imgUrl from "../assets/white-blocks.png";
import Metric from "./Metric";

const URL =
  "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics?latest=true";

const Statistics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((item) => setData(item.data));
  }, []);

  return (
    <>
      <header className="col-span-4 text-center md:col-span-6 xl:col-span-12">
        <span className="text-base text-indigo-700 font-semibold leading-6">
          Statistics
        </span>
        <h1 className="text-3xl text-neutral-900 font-semibold leading-8 mt-3 md:text-5xl md:leading-12">
          More than premium abstract imagery
        </h1>
        <p className="text-xl text-neutral-600 leading-7 mt-5">
          Our platform is more than just as a service to us – it is a catalyst
          for enriching lives through premium abstract imagery.
        </p>
      </header>
      <section className="col-span-4 flex flex-col gap-12 md:col-span-6 xl:col-span-12 xl:flex-row xl:gap-8">
        <section>
          <figure>
            <img src={imgUrl} alt="white block" className="w-full" />
          </figure>
        </section>
        <section className="flex flex-col gap-6 md:gap-8 grow">
          <h2 className="text-lg text-neutral-600 leading-7">
            Our mission, in numbers
          </h2>
          {data === null
            ? "Loading..."
            : data.map((item, index) => <Metric key={index} value={item} />)}
        </section>
      </section>
    </>
  );
};

export default Statistics;
