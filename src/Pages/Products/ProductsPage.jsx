import React from "react";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import Table from "../../Components/Table/TableFile";
import orders from "../../api/Products.json";
import AddIcon from "../../Images/IconComponents/AddIcon";
import TableAction from "../../Layouts/TableActions/TableAction";

const HeaderData = [
  { header: "Orders" },
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
        buttonText: "Add Products",
        icon: <AddIcon color={"#ffffff"} />,
        action: {
          type: "Navigation",
          link: "/productsadd",
        },
      },
    ],
  },
];

const tableouter =
  "tabelPadding px-7 pt-7 pb-5 border-general-40 border rounded-[6px] bg-white";

function ProductsPage() {
  return (
    <div className=" outer-container w-full mx-10">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner">
        <div className="order-action-panel mb-4">
          <div className={tableouter}>
            <TableAction />
            <Table data={orders} check />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
