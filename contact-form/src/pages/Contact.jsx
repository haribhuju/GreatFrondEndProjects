import React, { useEffect, useState } from "react";
import { ContactProvider } from "../context/Contact";
import BuildingSVG from "../images/building-line.svg";
import PhoneLineSVG from "../images/phone-line.svg";
import mailSVG from "../images/mail-line.svg";
import Form from "../components/Form/Form";
import Success from "../components/Form/Success";
import Error from "../components/Form/Error";

const Contact = () => {
  //idle | Loading | Success | error
  const [status, setStatus] = useState("idle");
  const [response, setResponse] = useState("null");

  const value = {
    status,
    setStatus,
    response,
    setResponse,
  };

  return (
    <ContactProvider value={value}>
      <section className="p-4 bg-[#D2D6DB] ">
        <div className="bg-white px-3 py-12 grid grid-cols-4 gap-12 rounded-lg shadow relative  md:px-4 md:py-16 md:grid-cols-6 md:gap-16 xl:grid-cols-12 xl:gap-8 xl:p-[96px] xl:items-center">
          <div className="col-span-4 md:col-span-6 xl:mt-[73px]">
            <h1 className="text-4xl text-neutral-900 font-semibold leading-10 md:text-5xl md:leading-12 xl:text-6xl xl:leading-[60px]">
              Talk to our team
            </h1>
            <p className="mt-5 text-lg leading-7 text-neutral-600 md:text-xl ">
              We're committed to delivering the support you require to make your
              experience as smooth as possible.
            </p>
            <div className="mt-10 flex flex-col gap-6 text-neutral-600 md:mt-12">
              <div className="flex gap-3 items-center">
                <img
                  src={BuildingSVG}
                  alt="building svg"
                  className="border border-t-white rounded-full p-3 shadow "
                />
                <p className="leading-6">
                  123 Maple Street,
                  <span className="block md:inline">Springfield, IL, USA</span>
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src={PhoneLineSVG}
                  alt="phone line svg"
                  className="border border-t-white rounded-full p-3 shadow"
                />
                <p className="leading-6">+1 (650) 555-0198</p>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src={mailSVG}
                  alt="mail line svg"
                  className="border border-t-white rounded-full p-3 shadow"
                />
                <p className="leading-6">hello@abstractly.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 p-4 border border-neutral-200 rounded-lg shadow-lg md:col-span-6 md:p-8 xl:mt-[73px]">
            {status === "success" ? <Success /> : <Form />}
          </div>
          {status === "error" && <Error />}
        </div>
      </section>
    </ContactProvider>
  );
};

export default Contact;
