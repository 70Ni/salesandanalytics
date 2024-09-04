import React from "react";
import Paid from "../Others/Paid";

import TD from "./TableData/TD";
import TDHeader from "./TableData/TDHeader";
import TDImage from "./TableData/TDImage";
import image from "./../../Images/Image.jpg";
import CheckBox from "../Others/CheckBox";
import OrderStatus from "../Others/OrderStatus";
import OutStock from "../Others/OutStock";

///////////Instruction////////////////////
//selecting a column   - colum name + first word of column Header
//

// import CouponImg from "./TableData/Images/48x48/CouponImg";
// import Avatar from "./TableData/Images/48x48/Avatar";
// import LineGraph from "../Graph/LineGraph";

// console.log(Object.keys(data[0]));
// let NamingHeades = Object.keys(data[0]);

// function Table(props) {
function Table({ Header, check, data, styling, action }) {
  // console.log(data, "from tabele");
  // console.log(props.data[0]);
  // const result = data.map((item) => {
  //   return Object.keys(data[0]).map((x) => {
  //     return console.log(item[x]);
  //   });
  // });
  const items = [];
  for (let i = 0; i < data.length; i++) {
    items.push(i);
  }

  //
  return (
    // <></>
    <div className={`w-full`}>
      {Header ? (
        <div className="Header text-paraBold text-left mb-5 text-general-100 ">
          {Header}
        </div>
      ) : null}
      <table className="text-left  border-zinc-400 w-full">
        <tbody>
          <tr className="Header wrapper  border-b border-general-40">
            {/* {check && <CheckBox />} */}
            {Object.keys(data[0])
              // .splice(1, data.length)
              .map((headers) => {
                return headers === "category" ||
                  headers === "product-Name" ? null : (
                  <th
                    className={`text-text2reg px-2 py-3 text-general-80 ${
                      headers + Header
                    }`}
                  >
                    {headers}
                  </th>
                );
              })}
            {/* <th className="text-text2reg px-2 py-3 text-general-80">Date</th>
        <th className="text-text2reg px-2 py-3 text-general-80">Amount</th>
      <th className="text-text2reg px-2 py-3 text-general-80">Status</th> */}
          </tr>
          {/* <tr>{items}</tr> */}

          {data.map((y, i) => {
            return (
              <tr className="border-b border-general-40"
              // onClick={() => {
              //   return action();
              // }}
              >
                {Object.entries(data[i])
                  // .slice(1, data.length)
                  .map((x) => {
                    // {
                    //   check && <CheckBox />;
                    // }
                    // if (check) {
                    //   return (
                    //     <div className={x[0] + Header}>
                    //       <CheckBox />
                    //     </div>
                    //   );
                    // }

                    // if (x[0] === "Order-Id") {
                    //   return <CheckBox />;
                    // }

                    if (x[0] === "Name" || x[0] === "Order-Id") {
                      return (
                        <div className={`flex items-center ${x[0] + Header}`}>
                          {check && <CheckBox />}
                          <TDHeader item={x[1]} />
                        </div>
                      );
                    }
                    if (x[0] === "Status" || x[0] === "payment-status") {
                      return (
                        <div className={x[0] + Header}>
                          <Paid status={x[1]} />
                        </div>
                      );
                    }
                    if (x[0] === "order-status") {
                      return <OrderStatus status={x[1]} />;
                    }
                    if (x[0] === "product-image") {
                      return (
                        <div className={x[0] + Header}>
                          <TDImage
                            ProductImg={x[1]}
                            ItemName={y["product-Name"]}
                            subTxt={y.category}
                          />
                        </div>
                      );
                    }
                    if (x[0] === "user-name") {
                      return (
                        <div className={x[0] + Header}>
                          <TDImage Name={x[1]} ItemName={y["user-name"]} />
                        </div>
                      );
                    }

                    if (x[0] === "coupon-name") {
                      return (
                        <div className={x[0] + Header}>
                          <TDImage
                            category={y["category"]}
                            ItemName={x[1]}
                            subTxt={y["category"]}
                          />
                        </div>
                      );
                    }
                    if (x[0] === "inventory") {
                      return <OutStock item={x[1]} />;
                    }
                    // user name with avatar
                    // if (x[0] === "user-name") {
                    //   console.log(y["user-Name"]);
                    //   return (
                    //     <TDImage
                    //       ItemName={x[1]}
                    //       Name={x[1]}
                    //       subTxt={y.category}
                    //     />
                    //   );
                    // }
                    return x[0] === "category" ||
                      x[0] === "product-Name" ? null : (
                      // skipping category from the list
                      <td className={x[0] + Header}>
                        <TD item={x[1]} />
                      </td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
