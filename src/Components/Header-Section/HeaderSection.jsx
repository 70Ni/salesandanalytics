import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import backArrow from "../../Images/Icons/08 Arrows/02 Left.svg";
import WhiteButton from "../Buttons/WhiteButton";
import { Navigate, useNavigate } from "react-router-dom";

function HeaderSection({ data }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(data[1].backlink);
  };

  console.log(data);
  return (
    <div className="Header-functions-wrapper flexbt my-7">
      <div className="Header-text-section">
        {data[1].backlink && (
          <div
            className="back-wrapper flex items-center cursor-pointer"
            onClick={handleClick}
          >
            <img src={backArrow} alt="back arrow" />
            <div className="back para ml-1"> Back</div>
          </div>
        )}
        <div className="Header-section subHeader">{data[0].header}</div>
      </div>
      <div className="Action-buttons-wrapper flex w-fit gap-3">
        {data[2] &&
          data[2].buttons.map((x) => {
            return x.primary ? (
              <PrimaryButton
                text={x.buttonText}
                icon={x.icon}
                action={x.action}
              />
            ) : (
              <WhiteButton
                text={x.buttonText}
                icon={x.icon}
                action={x.action}
              />
            );
          })}
      </div>
    </div>
  );
}

export default HeaderSection;
