import React, { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Icons from "../../api/Navigation";

import KnowledgeIcon from "../../Images/IconComponents/KnowledgeIcon";
import OrderIcon from "../../Images/IconComponents/OrderIcon";

const NavigationPanel = () => {
  const [open, setopen] = useState(true);

  return (
    <div className="Navigation wrapper sticky top-0 h-full ">
      <div className="p-4 pt-20 bg-general-30 border-r  z-[4] h-screen">
        <div className="wrapper">
          <div
            onClick={() => {
              setopen(!open);
            }}
          >
            ###
          </div>
          {Icons.map((component, index) => {
            let Component = component.image;
            return (
              <Navigation
                icon={Component}
                item={component.item}
                link={component.link}
                open={open}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationPanel;
