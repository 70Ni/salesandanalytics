import React from "react";
import InputFlex from "../../Customers/Components/InputFlex";
import Select from "../../../Components/Select/Select";
import Input from "../../../Components/Input/Large/Input";

function RegionalSetting() {
  return (
    <div>
      <div className="header text-paraBold flex flex-col  text-general-100 text-left">
        Regional Settings{" "}
        <div className="para text-text2reg text-general-80 mb-6 text-left">
          Set your language and timezone{" "}
        </div>
      </div>
      <div className="flex w-full gap-6 items-center">
        <Select title={"Language"} />
        <Select title={"Time Zone"} />
      </div>
    </div>
  );
}

export default RegionalSetting;
