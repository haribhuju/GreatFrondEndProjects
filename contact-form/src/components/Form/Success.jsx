import React from "react";
import SuccessCheckSVG from "../../images/check-fill.svg";
import useContact from "../../context/Contact";

const Success = () => {
  const { response } = useContact();
  return (
    <>
      <section className="px-4 py-[59px] flex flex-col items-center gap-16 ">
        <div className="flex flex-col items-center gap-6 max-w-80">
          <img
            src={SuccessCheckSVG}
            alt="success check svg"
            className="border border-t-white rounded-full p-3 shadow "
          />
          <p className="text-center text-xl leading-7 text-neutral-900">
            {response}
          </p>
        </div>
        <button className="border border-neutral-200 rounded px-4 py-2.5 shadow text-neutral-900">
          Send another message
        </button>
      </section>
    </>
  );
};

export default Success;
