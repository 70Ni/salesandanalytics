import React from "react";

const negative = "#F0142F";
const positive = "#06A561";

const neg = "text-red-100";
const pos = "text-green-100";

function SumCard({ data }) {
  return (
    <div className="flexbt p-base  max-[506px]:p-mobile ">
      <div className="left mr-6 xl:mr-12">
        <div className="subHeader">{data.rate}</div>
        <div className="para">{data.type}</div>
        <div className="vectorwrapper flex items-center mt-2">
          <div
            className={`text-text2reg font-Inter mr-1 ${
              data.direction == "positive" ? pos : neg
            }`}
          >
            {data.ratechange}
          </div>
          <svg
            transform={`rotate(${data.direction == "positive" ? 180 : 0})`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.7071 8.29289C18.0676 8.65338 18.0953 9.22061 17.7903 9.6129L17.7071 9.70711L12.7071 14.7071C12.3466 15.0676 11.7794 15.0953 11.3871 14.7903L11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.65338 7.93241 7.22061 7.90468 7.6129 8.2097L7.70711 8.29289L12 12.585L16.2929 8.29289C16.6534 7.93241 17.2206 7.90468 17.6129 8.2097L17.7071 8.29289Z"
              fill={data.direction == "positive" ? positive : negative}
            />
          </svg>
        </div>
      </div>
      <div className="right">
        <div className="wrapper px56  rounded-full bg-primary-30 flex justify-center items-center">
          <img src={data.Image} alt="" className="absolute" />
        </div>
      </div>
    </div>
  );
}

export default SumCard;
