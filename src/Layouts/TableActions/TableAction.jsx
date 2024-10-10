import React from "react";
import SearchInput from "../../Components/Input/Medium/SearchInput";
import Select from "../../Components/Select/Select";
import EditIcon from "../../Images/IconComponents/EditIcon";
import DeleteIcon from "../../Images/IconComponents/DeleteIcon";

function TableAction() {
  return (
    <div className="Table-actions mb-p20 gap-2 w-full">
      <div className="mobile-search w-full mb-3 hidden max-[478px]:block">
        <SearchInput />
      </div>
      <div className="filter-section flexbt">
        <div className="flexbt gap-p16 mr-4">
          <div className="selector">
            <Select
              placeholder={"filter"}
              options={["Price", "Last modified"]}
            />
          </div>
          <div className="selector max-[478px]:hidden">
            <SearchInput />
          </div>
        </div>
        <div className="actions flex gap-p12 items-center cursor-pointer">
          <div className="wrapper p-2 border rounded border-general-50 cursor-not-allowed">
            <EditIcon color={"#1E5EFF"} />
          </div>
          <div className="wrapper p-2 border rounded border-general-50 cursor-not-allowed ">
            <DeleteIcon color={"#1E5EFF"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableAction;
