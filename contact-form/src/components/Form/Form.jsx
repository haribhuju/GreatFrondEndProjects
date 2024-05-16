import React from "react";
import QuestionHintSVG from "../../images/question-line-hint.svg";

const Form = () => {
  return (
    <>
      <form action="#" className="grid grid-cols-6 gap-6 ">
        <div className="flex flex-col gap-1.5 col-span-6 md:col-span-3">
          <label
            htmlFor="name"
            className="text-sm text-neutral-700 font-medium leading-5 "
          >
            Name
          </label>
          <div className="flex items-center gap-2 relative">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className=" text-sm text-neutral-500 font-medium border border-neutral-200 rounded py-2.5 px-3.5 flex-1"
            />
            <img
              src={QuestionHintSVG}
              alt="question hint svg"
              className="w-4 h-4 absolute right-3"
            />
          </div>
          <p className="text-sm leading-5 text-neutral-500">
            This is an hint text
          </p>
        </div>
        <div className="flex flex-col gap-1.5 col-span-6 md:col-span-3  md:ml-2">
          <label
            htmlFor="email"
            className="text-sm text-neutral-700 font-medium leading-5 "
          >
            Email
          </label>

          <div className="flex items-center gap-2 relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              className=" text-sm text-neutral-500 font-medium border border-neutral-200 rounded py-2.5 px-3.5 flex-1"
            />
            <img
              src={QuestionHintSVG}
              alt="question hint svg"
              className="w-4 h-4 absolute right-3"
            />
          </div>
          <p className="text-sm leading-5 text-neutral-500">
            This is an hint text
          </p>
        </div>
        <div className="flex flex-col gap-1.5 col-span-6 ">
          <label
            htmlFor="message"
            className="text-sm text-neutral-700 font-medium leading-5 "
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write your message..."
            className=" text-sm text-neutral-500 font-medium border border-neutral-200 rounded py-2.5 px-3.5"
          ></textarea>
          <div className="flex justify-between">
            <p className="text-sm leading-5 ">This is an hint text</p>
            <span className=" text-sm text-neutral-500 leading-5 ml-auto">
              0/500
            </span>
          </div>
        </div>
        <button className="bg-indigo-700 text-white font-medium leading-6 shadow rounded py-2.5 px-3.5 col-span-6 hover:bg-[#3730A3] focus:ring-4 focus:#6366F1 disabled:bg-[#F5F5F5] disabled:text-[#A3A3A3]">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
