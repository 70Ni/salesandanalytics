import React from "react";
import Input from "../../Components/Input/Large/Input";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

function Login() {
  return (
    <div className="flex flex-col items-center px-[60px] py-12 bg-white rounded-[6px] ">
      <div className="Header-section mb-10">
        <div className="Heading text-Heading4 mb-1">Create an Account</div>
        <div className="sub-section para text-general-80">
          Have an Account?{" "}
          <span className="text-primary-100 ml-[6px]">Sign In</span>
        </div>
      </div>
      <div className="Auth-inputs min-w-[420px]">
        <div className="mb-6">
          <Input title="Email" placeholder="Enter Email Address" name="Email" />
        </div>
        <div className="mb-6">
          <Input title="Password" placeholder="Create Password" name="Email" />
        </div>
        <PrimaryButton text="Create Account" />
        <div className="terms-conditions-container mt-6">
          <div className="terms-para text-general-80">
            By creating account, you agree to our
          </div>
          <div className="term-link">Terms of Services</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
