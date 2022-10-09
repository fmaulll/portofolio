import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { uiActions } from "../../store/ui-slice";
import { ReactComponent as CrossIcon } from "../../assets/icons/Cross.svg";
import emailjs from "emailjs-com";
import { ReactComponent as CheckIcon } from "../../assets/icons/Check.svg";

const ModalContact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isDisable = useAppSelector((state) => state.ui.isDisable);
  const showToast = useAppSelector((state) => state.ui.showToast);
  const dark = useAppSelector((state) => state.ui.darkMode);

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setError(true);
    } else {
      setError(false);

      emailjs
        .sendForm(
          "service_wodzj6c",
          "template_xo5rdky",
          form.current,
          "7Li591m3nZhraOkDm"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              dispatch(uiActions.openToast());
              dispatch(uiActions.disable());
              setTimeout(() => {
                dispatch(uiActions.openModal());
                dispatch(uiActions.openToast());
                dispatch(uiActions.disable());
              }, 2000);
            }
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };
  return (
    <div className="w-full h-screen fixed flex items-center justify-center bg-black-invisible top-0 left-0">
      <div className={`z-auto bg-purple opacity-100 ${dark ? "drop-shadow-sm" : "drop-shadow"} flex flex-col-reverse md:flex-row w-full md:w-4/6 h-full md:h-4/6`}>
        <div className="w-full flex-1 px-8 py-6 bg-blue-sky justify-center flex flex-col">
          <h1 className="text-purple font-semibold text-2xl">
            I honestly don't know what to write here hehe
          </h1>
          <p className="text-purple hidden md:flex sm:mt-4 ">
            Just want to say thank you for visiting my website, I really hope we
            can work on a project next time. And here's Lorem Ipsum for you.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
            ut nibh et sollicitudin. Nullam eu arcu eu lorem pulvinar viverra.
            In ut dictum est.
          </p>
        </div>
        <div className={`${!dark && "bg-light"} w-full flex-1 px-8 py-6 justify-center flex flex-col`}>
          <div className="justify-between items-center flex">
            <h1 className={`${dark ? "text-gray":"text-black"} font-semibold text-2xl`}>Let's talk.</h1>
            <CrossIcon
              className="w-4 cursor-pointer"
              onClick={() => dispatch(uiActions.openModal())}
            />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full"
          >
            <label className="text-gray mt-4">Name</label>
            <input
              className={`p-2 focus:outline-none bg-transparent ${dark ? "text-white" : "text-black"} border-2 border-b-gray border-x-0 border-t-0`}
              type="text"
              name="user_name"
              placeholder="Insert your name"
              onChange={(e) => setName(e.target.value)}
            />
            {error && name === "" && (
              <span className="text-red text-sm">
                Name input can't be empty!
              </span>
            )}
            <label className="text-gray mt-4">Email</label>
            <input
              className={`p-2 focus:outline-none bg-transparent ${dark ? "text-white" : "text-black"} border-2 border-b-gray border-x-0 border-t-0`}
              type="email"
              name="user_email"
              placeholder="Insert your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && email === "" && (
              <span className="text-red text-sm">
                Email input can't be empty!
              </span>
            )}
            <label className="text-gray mt-4">Message</label>
            <textarea
              className="p-2 focus:outline-none bg-transparent text-white border-2 border-b-gray border-x-0 border-t-0"
              name="message"
              placeholder="Insert message"
              onChange={(e) => setMessage(e.target.value)}
            />
            {error && message === "" && (
              <span className="text-red text-sm">
                Message input can't be empty!
              </span>
            )}
            <button
              className={`focus:outline-none hover:bg-[#fcc238] bg-yellow rounded-xl px-4 py-2 font-semibold mt-4 text-light drop-shadow transition-all`}
              type="submit"
              disabled={isDisable}
            >
              Submit
            </button>
          </form>
          {showToast && (
            <div className="w-full flex items-center justify-center mt-4">
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">Message sent!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalContact;
