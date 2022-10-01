import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { uiActions } from "../../store/ui-slice";
import { ReactComponent as CrossIcon } from "../../assets/icons/Cross.svg";
import emailjs from "emailjs-com";
import { Toast } from "flowbite-react";
import { ReactComponent as CheckIcon } from "../../assets/icons/Check.svg";

const ModalContact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const isDisable = useAppSelector((state) => state.ui.isDisable);
  const showToast = useAppSelector((state) => state.ui.showToast);

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
      <div className="z-auto bg-purple opacity-100 border border-gray p-8 flex flex-col w-4/5 md:w-3/6">
        <div className="justify-end flex">
          <CrossIcon
            className="w-4 cursor-pointer"
            onClick={() => dispatch(uiActions.openModal())}
          />
        </div>
        <div>
          <h1 className="text-gray">Let's talk</h1>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
          <label className="text-gray mt-4">Name</label>
          <input
            className="p-2 focus:outline-none"
            type="text"
            name="user_name"
            placeholder="Insert your name"
            onChange={(e) => setName(e.target.value)}
          />
          {error && name === "" && (
            <span className="text-red">Name input is empty!</span>
          )}
          <label className="text-gray mt-4">Email</label>
          <input
            className="p-2 focus:outline-none"
            type="email"
            name="user_email"
            placeholder="Insert your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && email === "" && (
            <span className="text-red">Email input is empty!</span>
          )}
          <label className="text-gray mt-4">Message</label>
          <textarea
            className="p-2 focus:outline-none"
            name="message"
            placeholder="Insert message"
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && message === "" && (
            <span className="text-red">Message input is empty!</span>
          )}
          <button
            className="border border-gray text-yellow mt-4 p-2"
            type="submit"
            disabled={isDisable}
          >
            Submit
          </button>
        </form>
        {showToast && (
          <div className="w-full flex items-center justify-center mt-4">
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">Message sent!</div>
              <Toast.Toggle />
            </Toast>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalContact;
