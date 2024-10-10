import React from "react";
import Input from "../../Components/Input/Medium/Input";

function InputFlex({ title, placeholder }) {
  return (
    <div className="flexbt gap-p24 max-[484px]:flex-wrap">
      <Input
        title={title[0]}
        placeholder={placeholder ? placeholder[0] : null}
      />
      <Input
        title={title[1]}
        placeholder={placeholder ? placeholder[0] : null}
      />
    </div>
  );
}

export default InputFlex;
