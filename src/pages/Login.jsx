import { useState } from "react";
import loginImg from "../assets/Login.png";

function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* container */}
      <div className="flex h-full w-full">
        {/* form side */}
        <div className="flex w-full sm:w-1/2 items-center justify-center">
          <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800">
            <div className="w-full mb-4">
              <h3 className="h3 text-[36px]">{currentState}</h3>
            </div>
            {currentState === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="name" className="font-medium text-[15px]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full px-3 py-2 ring-slate-900/10 rounded-lg mt-1 bg-gray-100/90"
                  required
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="font-medium text-[15px]">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 ring-slate-900/10 rounded-lg mt-1 bg-gray-100/90"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="font-medium text-[15px]">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 ring-slate-900/10 rounded-lg mt-1 bg-gray-100/90"
                required
              />
            </div>
            <button className="cursor-pointer w-full font-medium text-[15px] bg-gray-800 text-white mt-5 px-7 py-[9px] rounded-lg">
              {currentState === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div className="w-full flex flex-col gap-y-3">
              <div className="underline font-medium text-[15px]">
                Forgot password ?
              </div>
              {currentState === "Login" ? (
                <div className="font-medium text-[15px]">
                  Don't have an account?
                  <span
                    onClick={() => setCurrentState("Sign Up")}
                    className="cursor-pointer underline" 
                  >
                    {" "}
                    Create account
                  </span>
                </div>
              ) : (
                <div className="font-medium text-[15px]">
                  Already have an account?
                  <span
                    onClick={() => setCurrentState("Login")}
                    className="cursor-pointer underline"
                  >
                    {" "}
                    Login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
        {/* Img side */}
        <div className="w-1/2 hidden sm:block">
          <img src={loginImg} alt="" className="object-cover h-full w-full" />
        </div>
      </div>
    </section>
  );
}

export default Login;
