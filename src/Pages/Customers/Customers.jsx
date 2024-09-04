import React from "react";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import Table from "../../Components/Table/TableFile";
import customerdata from "../../api/Customers.json";
import AddIcon from "../../Images/IconComponents/AddIcon";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import Accordion from "../../Components/Accordion/Accordion";
import SearchInput from "../../Components/Input/Medium/SearchInput";
import RemoveIcon from "../../Images/IconComponents/RemoveIcon";
import Select from "../../Components/Select/Select";
import DeleteIcon from "../../Images/IconComponents/DeleteIcon";
import EditIcon from "../../Images/IconComponents/EditIcon";
import TableAction from "../../Layouts/TableActions/TableAction";
import SectionNav from "../../Components/Navigation/SectionNav/SectionNav";
import FileInput from "../../Components/FileInput/FileInput";
import NavBlocker from "../../Components/NavFlat/NavBlocker";

const HeaderData = [
  { header: "Customers" },
  { backlink: "" },
  {
    buttons: [
      {
        primary: false,
        buttonText: "Export",

        // icon: <Settings color={"#1E5EFF"} />,
      },
      {
        primary: true,
        buttonText: "Add Customer",
        action: {
          type: "Navigation",
          link: "/customersadd",
        },
        icon: <AddIcon color={"#ffffff"} />,
      },
    ],
  },
];

const action = () => {
  return console.log("Hello");
};

const Sections = [
  "All Customers",
  "New Customers",
  "Returning Customers",
  "From Europe",
];

function Customers({}) {
  return (
    <div className="outer-container w-full mx-10">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner w-full flex gap30">
        <div className="Main-section flex flex-co w-full">
          <div className="table-section  card">
            <SectionNav Sections={Sections} />
            <TableAction />
            <Table data={customerdata} action={action} />
            {/* <FileInput /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
