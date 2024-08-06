import React from "react";
import Paid from "../Others/Paid";

import Recent from "../../api/Recent.json";
import TD from "./TableData/TD";
import TDHeader from "./TableData/TDHeader";
import TDImage from "./TableData/TDImage";
import image from "./../../Images/Image.jpg";
import CheckBox from "../Others/CheckBox";

console.log(Object.keys(Recent[0]));
let NamingHeades = Object.keys(Recent[0]);

function Table({ Header, data }) {
  const result = Recent.map((item) => {
    return Object.keys(Recent[0]).map((x) => {
      return console.log(item[x]);
    });
  });

  return (
    <div className="px-7 pt-7 pb-5 border rounded-[6px] w-full border-general-40">
      <div className="Header text-paraBold text-left mb-5 text-general-100 ">
        Recent Transactions
      </div>
      <table className="text-left  border-zinc-400 w-full">
        <tr className="Header wrapper  border-b-2 border-general-40">
          <CheckBox />
          {Object.keys(Recent[0])
            .splice(1, Recent.length)
            .map((x) => (
              <th className="text-text2reg px-2 py-3 text-general-80">{x}</th>
            ))}

          {/* <th className="text-text2reg px-2 py-3 text-general-80">Date</th>
        <th className="text-text2reg px-2 py-3 text-general-80">Amount</th>
        <th className="text-text2reg px-2 py-3 text-general-80">Status</th> */}
        </tr>

        {Recent.map((x) => {

          // //horizontal view
          // for (let index = 0; index < Recent.length; index++) {
          //   return (
          //     <td>
          //       <TDHeader item={x.Name} />
          //       <TDImage
          //         ItemName="T shirt clothing "
          //         subTxt="t-shirt"
          //         Img={image}
          //       />
          //     </td>
          //   )
          // }
          return (
            <tr className="content-wrapper border-b-[1px] border-general-40 last:border-b-0">
              {/* <CheckBox /> */}
              <TDHeader item={x.Name} />
              <TDImage
                ItemName="T shirt clothing "
                subTxt="t-shirt"
                Img={image}
              />
              <TD item={x.Date} />
              <TD item={x.Amount} />
              <Paid status={x.status} />
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
