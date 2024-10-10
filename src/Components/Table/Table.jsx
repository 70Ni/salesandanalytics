import React from "react";
import Paid from "../Others/Paid";

import TD from "./TableData/TD";
import TDHeader from "./TableData/TDHeader";
import TDImage from "./TableData/TDImage";
import image from "./../../Images/Image.jpg";
import CheckBox from "../Others/CheckBox";
// import CouponImg from "./TableData/Images/48x48/CouponImg";
// import Avatar from "./TableData/Images/48x48/Avatar";
// import LineGraph from "../Graph/LineGraph";

// console.log(Object.keys(data[0]));
// let NamingHeades = Object.keys(data[0]);

// function Table(props) {
function Table({ Header, check, data }) {
  // console.log(props.data[0]);
  // const result = data.map((item) => {
  //   return Object.keys(data[0]).map((x) => {
  //     return console.log(item[x]);
  //   });
  // });

  return (
    // <></>
    <div className="px-7 pt-7 pb-p20 border rounded-[6px] w-full border-general-40">
      <div className="Header text-paraBold text-left mb-p20 text-general-100 ">
        {Header}
      </div>
      <table className="text-left  border-zinc-400 w-full">
        <tr className="Header wrapper  border-b-2 border-general-40">
          {check && <CheckBox />}
          {Object.keys(data[0])
            .splice(1, data.length)
            .map((x) => (
              <th className="text-text2reg px-2 p-p12 text-general-80">{x}</th>
            ))}

          {/* <th className="text-text2reg px-2 p-p12 text-general-80">Date</th>
        <th className="text-text2reg px-2 p-p12 text-general-80">Amount</th>
        <th className="text-text2reg px-2 p-p12 text-general-80">Status</th> */}
        </tr>

        {data.map((x) => {
          // //horizontal view
          return (
            <div>
                <TD item={x.Name} />              
            </div>
          );
          // return (
          //   <tr className="content-wrapper border-b-[1px] border-general-40 last:border-b-0">
          //     {/* <CheckBox /> */}
          //     <TD item={x.Name} />
          //     {/* <TDImage
          //       ItemName="T shirt clothing "
          //       subTxt="t-shirt"
          //       ProductImg={image}
          //       // category="Discount"
          //       // Name={x.Name}
          //     /> */}
          //     <TD item={x.Date} />
          //     <TD item={x.Amount} />
          //     <Paid status={x.Status} />
          //   </tr>
          // );
        })}
      </table>
    </div>
  );
}

export default Table;
