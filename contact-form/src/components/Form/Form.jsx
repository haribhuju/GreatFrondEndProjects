import { useEffect, useId, useState } from "react";
import QuestionHintSVG from "../../images/question-line-hint.svg";
import QuestionErrorSVG from "../../images/question-line-error.svg";
import useContact from "../../context/Contact";

const MESSAGELIMIT = 500;
const ENDPOINT =
  "https://www.greatfrontend.com/api/projects/challenges/contact";
const Form = () => {
  const contactValue = useContact();
  const { status, setStatus, setResponse } = contactValue;
  console.log(status);
  const id = useId();
  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageLength, setMessageLength] = useState(0);

  const [isNameHint, setIsNameHint] = useState(false);
  const [isEmailHint, setIsEmailHint] = useState(false);

  useEffect(() => {
    setMessageLength(formData.message.length);
  }, [formData.message]);

  function handleChange(e) {
    const { name, value } = e.target;
    let error = "";
    if (name === "message" && value.length >= 500) {
      error = "Message should not be more than 500 characters";
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";

    if (messageLength >= 500)
      newErrors.message = "Message should not be more than 500 characters";

    return newErrors;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Loading");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
    } else {
      try {
        const response = await fetch(ENDPOINT, {
          method: "POST",
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log();
        if (response.status) {
          setStatus("success");
          setResponse(result.message);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          console.log(result.message);
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    }
  }

  return (
    <>
      <form action="#" className="grid grid-cols-6 gap-6 ">
        <div className="flex flex-col gap-1.5 col-span-6 md:col-span-3">
          <label
            htmlFor={nameId}
            className="text-sm text-neutral-700 font-medium leading-5 "
          >
            Name
          </label>
          <div className="flex items-center gap-2 relative">
            <input
              type="text"
              name="name"
              id={nameId}
              placeholder="Your name"
              className={`text-sm text-neutral-500 font-medium border rounded py-2.5 px-3.5 flex-1 ${
                errors.name
                  ? "border-red-500 focus:outline-none"
                  : "border-neutral-200"
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            <img
              src={errors.name ? QuestionErrorSVG : QuestionHintSVG}
              alt="question hint svg"
              className="w-4 h-4 absolute right-3"
              onClick={() => setIsNameHint(!isNameHint)}
            />
          </div>
          {errors.name && (
            <p className="text-sm leading-5 text-red-500">{errors.name}</p>
          )}
          <p className="text-sm leading-5 text-neutral-500">
            {isNameHint ? "Enter your real name" : " "}
          </p>
        </div>
        <div className="flex flex-col gap-1.5 col-span-6 md:col-span-3  md:ml-2">
          <label
            htmlFor={emailId}
            className="text-sm text-neutral-700 font-medium leading-5 "
          >
            Email
          </label>

          <div className="flex items-center gap-2 relative">
            <input
              type="email"
              name="email"
              id={emailId}
              placeholder="example@example.com"
              className={`text-sm text-neutral-500 font-medium border rounded py-2.5 px-3.5 flex-1 ${
                errors.email
                  ? "border-red-500 focus:outline-none"
                  : "border-neutral-200"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            <img
              src={errors.email ? QuestionErrorSVG : QuestionHintSVG}
              alt="question hint svg"
              className="w-4 h-4 absolute right-3"
              onClick={() => setIsEmailHint(!isEmailHint)}
            />
          </div>
          {errors.email && (
            <p className="text-sm leading-5 text-red-500">{errors.email}</p>
          )}
          <p className="text-sm leading-5 text-neutral-500">
            {isEmailHint ? "Enter your real email address" : " "}
          </p>
        </div>
        <div className="flex flex-col gap-1.5 col-span-6 ">
          <label
            htmlFor={messageId}
            className="text-sm text-neutral-700 font-medium leading-5 "
          >
            Message
          </label>
          <textarea
            name="message"
            id={messageId}
            cols="30"
            rows="10"
            placeholder="Write your message..."
            className={`text-sm text-neutral-500 font-medium border rounded py-2.5 px-3.5 flex-1 ${
              errors.message || messageLength >= 500
                ? "border-red-500 focus:outline-none"
                : "border-neutral-200"
            }`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-sm leading-5 text-red-500">{errors.message}</p>
          )}

          <div className="flex justify-between">
            <span className=" text-sm text-neutral-500 leading-5 ml-auto">
              {messageLength}/{MESSAGELIMIT}
            </span>
          </div>
        </div>
        <button
          className="bg-indigo-700 text-white font-medium leading-6 shadow rounded py-2.5 px-3.5 col-span-6 hover:bg-[#3730A3] focus:ring-4 focus:#6366F1 disabled:bg-[#F5F5F5] disabled:text-[#A3A3A3]"
          onClick={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Form;
