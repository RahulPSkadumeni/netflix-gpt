import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(true);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const navigate = useNavigate();
  const setupSignup = () => {
    setSignIn(!signIn);
  };

  const handleButtonClick = () => {
    console.log("clikced");
    console.log(email.current.value);

    console.log("handle button click");
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log("first>>>>", message);
    if (message) return;
    console.log("second");
    //create a  new user /sign up/sing in
    //navigate("/browse");

    if (!signIn) {
      console.log(">>>second");
      //sing up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      console.log("logins start here");
      //signIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          if (user) {
            dispatch(addUser(user));
            navigate("/home");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      console.log("login end here");
    }
  };
  return (
    <div className="">
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="relative  py-6 sm:py-12 flex flex-col w-1/3 bg-black bg-opacity-80 rounded-md  p-5 ">
          {signIn ? (
            <h1 className="text-left  p-2 m-5 text-white text-4xl font-bold">
              Sign In
            </h1>
          ) : (
            <h1 className="text-left  p-2 m-5 text-white text-4xl font-bold">
              Sign Up
            </h1>
          )}
          {errorMessage ? (
            <h1 className="ml-5 font-semibold text-xl text-yellow-600 ">
              Warning : {errorMessage}
            </h1>
          ) : null}
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" flex flex-col "
          >
            {signIn ? (
              <div></div>
            ) : (
              <input
                className="m-5 p-2 rounded-lg h-14 bg-gray-600  text-white text-xl"
                type="text"
                placeholder="User Name"
                ref={userName}
              />
            )}
            <input
              className="m-5 p-2 rounded-lg h-14 bg-gray-600  text-white text-xl"
              type="text"
              placeholder="Email or phone number"
              ref={email}
            />
            <input
              className="m-5 p-2 rounded-lg h-14 bg-gray-600  text-white text-xl"
              type="password"
              placeholder="Password"
              ref={password}
            />
            {signIn ? (
              <button
                className="bg-red-600 text-white m-5 p-2 rounded-lg h-14 font-bold text-xl "
                onClick={handleButtonClick}
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={handleButtonClick}
                className="bg-red-600 text-white m-5 p-2 rounded-lg h-14 font-bold text-xl "
              >
                Sign Up
              </button>
            )}
          </form>
          <p className=" text-white p-2 m-5" onClick={setupSignup}>
            {signIn ? (
              <>
                <span className="opacity-60 text-white"> New to Netflix?</span>
                <span className=" cursor-pointer font-semibold text-lg  p-2 text-white">
                  Sign up now.
                </span>
              </>
            ) : (
              <>
                <span className="opacity-60  p-2 text-white">
                  Already Have account?
                </span>
                <span className=" cursor-pointer font-semibold text-lg text-white">
                  Sign In now.
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
