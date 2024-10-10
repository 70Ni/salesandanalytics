import React from "react";
import InputFlex from "../../../Layouts/InputFlex/InputFlex";
import Select from "../../../Components/Select/Select";
import Input from "../../../Components/Input/Large/Input";

function RegionalSetting() {
  return (
    <div>
      <div className="header subHeader2 flex flex-col  text-general-100 text-left">
        Regional Settings{" "}
        <div className="para mb-p24 text-left">
          Set your language and timezone{" "}
        </div>
      </div>
      <div className="flex w-full gap-p24 items-center max-[484px]:flex-wrap">
        <Select title={"Language"} />
        <Select title={"Time Zone"} />
      </div>
    </div>
  );
}

export default RegionalSetting;
