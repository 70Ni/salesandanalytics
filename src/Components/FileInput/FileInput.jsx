import React from "react";
import WhiteButton from "../Buttons/WhiteButton";

function FileInput({header}) {
  return (
    <div className="fileWrapper w-full">
      <div className="para mb-1">
        {header}
      </div>
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full border border-general-60 border-dashed rounded cursor-pointer "
      >
        <div class="flex flex-col items-center justify-center py-7 px-2">
          <WhiteButton text="Add file " />
          <p class="para text-center mt-3">
            Or drag and drop files
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
  );
}

export default FileInput;
