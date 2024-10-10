import React, { useState } from "react";
import Input from "../../Components/Input/Large/Input";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import WhiteButton from "../../Components/Buttons/WhiteButton";
import GoogleIcon from "../../Images/Icons/11 Social/01 Google.svg";
import FacebookIcon from "../../Images/Icons/11 Social/02 Facebook.svg";

function Login({ actions }) {
  const [state, setstate] = useState(true);
  const [auth, setauth] = useState({
    Email: "some@email.com",
    password: 124578,
  });


  return (
    <div className="flex flex-col items-center px-[60px] py-12 bg-white rounded-[6px] ">
      <div className="Header-section mb-10 text-center">
        <div className="Heading text-Heading4 mb-1">
          {state ? "Login to Account" : "Create an Account"}
        </div>
        <div className="sub-section para text-general-80">
          {state ? "Don't have an account Yet?" : "Have an Account?"}
          <span
            className="text-primary-100 ml-[6px] para cursor-pointer"
            onClick={() => setstate(!state)}
          >
            {state ? "Sign Up" : "Sign In"}
          </span>
        </div>
      </div>
      <div className="Auth-inputs min-w-[420px]">
        <div className="mb-p24">
          <Input title="Email" placeholder="Enter Email Address" name="Email" />
        </div>
        <div className="mb-p24">
          <Input title="Password" placeholder="Password" name="Email" />
        </div>
        {!state && (
          <div className="mb-p24">
            <Input
              title="Confirm Password"
              placeholder="Confirm Password"
              name="Email"
            />
          </div>
        )}
        <PrimaryButton
          text={state ? "Login to Account" : "Create Account"}
        />
        <div className="terms-conditions-container mt-6 text-center">
          <div className="terms-para text-general-80 text-text2reg mb-1">
            By creating account, you agree to our
          </div>
          <div className="term-link text-primary-100 cursor-pointer text-text2reg">
            Terms of Services
          </div>
        </div>
        <div className="divide-y divide-blue-200 w-full h-[1px] bg-general-50 my-6"></div>
        <div className="account-auth-wrapper">
          <div className="term-link text-general-80 text-text2reg pb-6 text-center">
            Or create an account using:{" "}
          </div>
          <div className="account-buttons-container flex flex-col gap-p12">
            <WhiteButton text="Continue with Google" icon={GoogleIcon} />
            <WhiteButton text="Continue with Facebook" icon={FacebookIcon} />

            {/* <input
              type="checkbox"
              className=" relative appearance-none shrink-0 w-5 h-5 border-[1px] border-general-50 rounded bg-white checked:bg-blue-500 checked:border-0"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
