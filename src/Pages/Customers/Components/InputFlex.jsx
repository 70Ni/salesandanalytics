import React from "react";
import Input from "../../../Components/Input/Medium/Input";

function InputFlex({ title }) {
  return (
    <div className="flex items-center gap-6">
      <Input title={title[0]} />
      <Input title={title[1]} />
    </div>
  );
}

export default InputFlex;
