import React from "react";
import Paid from "../Others/Paid";

import TD from "./TableData/TD";
import TDHeader from "./TableData/TDHeader";
import TDImage from "./TableData/TDImage";
import image from "./../../Images/Image.jpg";
import CheckBox from "../Others/CheckBox";
import { Name } from "ajv";
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
  let i;
  console.log(i);
  for (let index = 0; index < 5; index++) {
    i = index;
  }
  return (
    // <></>
    <div className="px-7 pt-7 pb-5 border rounded-[6px] w-full border-general-40">
      <div className="Header text-paraBold text-left mb-5 text-general-100 ">
        {Header}
      </div>
      <table className="text-left  border-zinc-400 w-full">
        <tr className="Header wrapper  border-b-2 border-general-40">
          {check && <CheckBox />}
          {Object.keys(data[0])
            .splice(1, data.length)
            .map((x) => (
              <th className="text-text2reg px-2 py-3 text-general-80">{x}</th>
            ))}

          {/* <th className="text-text2reg px-2 py-3 text-general-80">Date</th>
        <th className="text-text2reg px-2 py-3 text-general-80">Amount</th>
        <th className="text-text2reg px-2 py-3 text-general-80">Status</th> */}
        </tr>

        {data.map((y, i) => {})}

        {Object.entries(data[i]).map((x, i) => {
          console.log(x);
          //keys
          // console.log(Object.keys(data[2]) === "product-Name");
          // if ("id" in data[2]) {
          //   return <TDHeader item={x} />;
          // }
          // //horizontal view
          if (x[0] === "Status") {
            return <Paid status={x[1]} />;
          }
          return (
            <div>
              <TD item={x[0]} />
            </div>
          );
          // for (let index = 0; index < data.length; index++) {
          //   // if (x == "Paid") {
          //   //   return <Paid status={x} />;
          //   // }
          //   // to find the key of props here >>>>>>>>>>>>>>>
          //   // return <TD item={x} />;
          //   // switch (x) {
          //   //   case (x == "Paid"):
          //   //     console.log(x);
          //   //     return <Paid status={x} />;
          //   //   default:
          //   //     return 1;
          //   // }
          // }

          // return (
          //   <tr className="content-wrapper border-b-[1px] border-general-40 last:border-b-0">
          //     {/* <CheckBox /> */}
          //     <TDHeader item={x} />
          //     {/* <TDImage
          //       ItemName="T shirt clothing "
          //       subTxt="t-shirt"
          //       ProductImg={image}
          //       // category="Discount"
          //       // Name={x.Name}
          //     /> */}
          //     {/* <TD item={x.Date} />
          //     <TD item={x.Amount} />
          //     <Paid status={x.Status} /> */}
          //   </tr>
          // );
        })}
      </table>
    </div>
  );
}

// {data.map((x,i) => {
//   Object.entries(data[i]).map((x, i) => {
//     // console.log(data);
//     //keys
//     console.log(x[1]);

//     // //horizontal view
//     if (x[0] === "Name") {
//       return <TDHeader item={x} />;
//     }
//     if (x[1] == "Paid") {
//       return <Paid status={x} />;
//     }
//     return <TD item={x[0]} />;
//     for (let index = 0; index < data.length; index++) {
//       // if (x == "Paid") {
//       //   return <Paid status={x} />;
//       // }

//       // to find the key of props here >>>>>>>>>>>>>>>

//       console.log(x);
//       // return <TD item={x} />;
//       // switch (x) {
//       //   case (x == "Paid"):
//       //     console.log(x);
//       //     return <Paid status={x} />;

//       //   default:
//       //     return 1;
//       // }
//     }

//     // return (
//     //   <tr className="content-wrapper border-b-[1px] border-general-40 last:border-b-0">
//     //     {/* <CheckBox /> */}
//     //     <TDHeader item={x} />
//     //     {/* <TDImage
//     //       ItemName="T shirt clothing "
//     //       subTxt="t-shirt"
//     //       ProductImg={image}
//     //       // category="Discount"
//     //       // Name={x.Name}
//     //     /> */}
//     //     {/* <TD item={x.Date} />
//     //     <TD item={x.Amount} />
//     //     <Paid status={x.Status} /> */}
//     //   </tr>
//     // );
//   });
// })}
export default Table;
