import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const setupSignup = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="">
      <Header />
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
          <form className=" flex flex-col ">
            {signIn ? (
              <div></div>
            ) : (
              <input
                className="m-5 p-2 rounded-lg h-14 bg-gray-600  text-white text-xl"
                type="text"
                placeholder="User Name"
              />
            )}
            <input
              className="m-5 p-2 rounded-lg h-14 bg-gray-600  text-white text-xl"
              type="text"
              placeholder="Email or phone number"
            />
            <input
              className="m-5 p-2 rounded-lg h-14 bg-gray-600  text-white text-xl"
              type="password"
              placeholder="Password"
            />
            {signIn ? (
              <button className="bg-red-600 text-white m-5 p-2 rounded-lg h-14 font-bold text-xl ">
                Sign In
              </button>
            ) : (
              <button className="bg-red-600 text-white m-5 p-2 rounded-lg h-14 font-bold text-xl ">
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
