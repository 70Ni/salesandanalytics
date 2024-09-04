import React from "react";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";

function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-Heading5 mb-2">Still Need Help?</div>
      <div className="text-para text-general-80 mb-7">
        Get in touch with us and we will be happy to help you out!
      </div>
      <div className="button-contact w-fit">
        <PrimaryButton text="Contact Support" />
      </div>
    </div>
  );
}

export default Contact;
