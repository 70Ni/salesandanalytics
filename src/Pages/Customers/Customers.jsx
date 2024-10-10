import React, { useState } from "react";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import Table from "../../Components/Table/TableFile";
import customerdata from "../../api/Customers.json";
import fromEuro from "../../api/fromEurop.json";
import returning from "../../api/reuturingCutomers.json";
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
import { useSelector, useDispatch } from "react-redux";

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

const Sections = [
  "All Customers",
  "New Customers",
  "Returning Customers",
  "From Europe",
];

function Customers({}) {
  const [Section, setSection] = useState("All Customers");

  const getNavSection = (e) => {
    console.log(e);
    if (e) {
      return setSection(e);
    }
  };

  const searchTerm = useSelector((state) => state.searchdata);
  // console.log(searchTerm.searchdata.action.payload);

  const searchState = useSelector((state) => state.searchdata.state[Section]);
  console.log(searchState);
  const [locatState, setlocatState] = useState({});

  // console.log(searchState);
  // let searchKeys;
  // switch (Section) {
  //   case Section === "All Customers":
  //     value = all;
  //     break;
  //   case Section === "New Customers":
  //     value = Object.assign(fromEuro);
  //     break;
  //   case Section === "Returning Customers":
  //     value = Object.assign(returning);
  //     break;
  //   case Section === "From Europe":
  //     value = Object.assign(fromEuro);
  //     break;

  //   default:
  //     value = Object.assign(customerdata);
  // }
  let searchKeys;
  let filteredKeys;

  // async function getData(searchState) {
  //   console.log("from asyc");
  // }
  // getData();
  if (searchState) {
    searchKeys = Object.assign(searchState);

    filteredKeys = searchKeys.filter((key) =>
      // console.log(fromEuro[key]["user-name"])
      // console.log(key["user-name"] || key["location"])

      // console.log(key["user-name"].toLowerCase())
      // key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      // fromEuro[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      key["user-name"]
        ?.toLowerCase()
        .includes(searchTerm.action.payload ? searchTerm.action.payload : "")
    );
  }
  // if (searchState) {
  //   searchKeys = Object.assign(searchState && searchState.state[Section]);

  //   filteredKeys = searchKeys.filter((key) =>
  //     // console.log(fromEuro[key]["user-name"])
  //     // console.log(key["user-name"] || key["location"])

  //     // console.log(key["user-name"].toLowerCase())
  //     // key.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     // fromEuro[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  //     key["user-name"]?.toLowerCase().includes("j")
  //   );
  // }

  return (
    <div className="outer-container">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner w-full flex gapping">
        <div className="Main-section flex flex-col w-full">
          <div className="table-section card mb-4">
            <SectionNav Sections={Sections} action={getNavSection} />
            <TableAction />

            {/* {Section === "New Customers" && <Table data={fromEuro} />} */}
            {/* {Section === "All Customers" && <Table data={searchDatas} />} */}
            {Section === "All Customers" && <Table data={filteredKeys} />}
            {Section === "New Customers" && <Table data={filteredKeys} />}
            {Section === "Returning Customers" && <Table data={filteredKeys} />}
            {Section === "From Europe" && <Table data={filteredKeys} />}
            {/* {Section === "From Europe" && (
              <Table
                data={
                  searchTerm.searchdata.length > 0 ? filteredKeys : fromEuro
                }
              />
            )}
            {Section === "New Customers" && (
              <Table
                data={
                  searchTerm.searchdata.length > 0 ? filteredKeys : fromEuro
                }
              />
            )}
            {Section === "Returning Customers" && (
              <Table
                data={
                  searchTerm.searchdata.length > 0 ? filteredKeys : returning
                }
              />
            )} */}
            {/* {Section === "Returning Customers" && <Table data={returning} />} */}
            {/* <FileInput /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
