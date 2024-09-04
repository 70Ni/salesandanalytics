import React from "react";
import SearchInput from "../../Components/Input/Large/SearchInput";
import Select from "../../Components/Select/Select";
import EditIcon from "../../Images/IconComponents/EditIcon";
import DeleteIcon from "../../Images/IconComponents/DeleteIcon";

function TableAction() {
  return (
    <div className="Table-actions flexbt mb-5">
      <div className="filter-section flex gap-4 items-center">
        <div className="selector w-1/2">
          <Select />
        </div>
        <SearchInput />
      </div>
      <div className="actions flex gap-3 items-center cursor-pointer">
        <div className="wrapper p-2 border rounded border-general-50">
          <EditIcon color={"#1E5EFF"} />
        </div>
        <div className="wrapper p-2 border rounded border-general-50 cursor-pointer">
          <DeleteIcon color={"#1E5EFF"} />
        </div>
      </div>
    </div>
  );
}

export default TableAction;
