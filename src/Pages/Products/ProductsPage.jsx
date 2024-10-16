import React from "react";
import NavBlocker from "../../Components/NavFlat/NavBlocker";
import HeaderSection from "../../Components/Header-Section/HeaderSection";
import Table from "../../Components/Table/TableFile";
import orders from "../../api/Products.json";
import AddIcon from "../../Images/IconComponents/AddIcon";
import TableAction from "../../Layouts/TableActions/TableAction";
import { useSelector } from "react-redux";

const HeaderData = [
  { header: "Products" },
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

function ProductsPage() {
  const productState = useSelector((state) => state.productData.Products);
  console.log(productState);

  return (
    <div className=" outer-container">
      <NavBlocker />
      <HeaderSection data={HeaderData} />
      <div className="Container-inner">
        <div className="order-action-panel mb-4">
          <div className="card">
            <TableAction
              selectOptions={["T-Shirt", "Hoodies", "Black", "White"]}
            />
            <Table data={productState} check />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
