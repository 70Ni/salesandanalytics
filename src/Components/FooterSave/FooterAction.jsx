import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import WhiteButton from "../Buttons/WhiteButton";

function FooterAction() {
  return (
    <div className="footer-wrapper w-full border-t border-general-50 mt-[30px]">
      <div className="button-wrapper mt-7 pb-10 flex items-center justify-end w-full">
        <div className="button-wraper flex items-center gap-p12">
          <WhiteButton text="Cancel" />
          <PrimaryButton text="Save" />
        </div>
      </div>
    </div>
  );
}

export default FooterAction;
