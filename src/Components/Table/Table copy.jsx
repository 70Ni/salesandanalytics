import React from "react";
import Paid from "../Others/Paid";

import Recent from "../../api/Recent.json";
let NamingHeades = Object.keys(Recent[0]).splice(1, 1);

function Table() {
  return (
    <table className="text-left">
      {Object.keys(Recent[0]).map((x) => (
        // console.log(x)
        <tr className="Header wrapper flex  border-b-2 border-general-40">
          <th className="text-text2reg px-2 py-3 text-general-80">{x}</th>
          {/* <td className="text-text2reg px-2 py-3 text-general-80">Date</td>
          <td className="text-text2reg px-2 py-3 text-general-80">Amount</td>
          <td className="text-text2reg px-2 py-3 text-general-80">Status</td> */}
        </tr>
      ))}
      {Recent.map((x) => (
        <tr className="content-wrapper border-b-[1px] border-general-40">
          <td className="text-text2med px-2 py-4 text-general-100">{x.Name}</td>
          <td className="text-text2reg px-2 py-4 text-general-100">{x.Date}</td>
          <td className="text-text2reg px-2 py-4 text-general-100">
            {x.Amount}
          </td>
          <Paid status={x.status} />
        </tr>
      ))}
      {/* <tr className="content-wrapper border-b-[1px] border-general-40">
        <td className="text-text2med px-2 py-4 text-general-100">Jessica S.</td>
        <td className="text-text2reg px-2 py-4 text-general-100">24.05.2020</td>
        <td className="text-text2reg px-2 py-4 text-general-100">24.05</td>
        <Paid status={"Paid"} />
      </tr> */}
    </table>
  );
}

export default Table;
