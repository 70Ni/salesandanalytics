import React, { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Icons from "../../api/Navigation";

import KnowledgeIcon from "../../Images/IconComponents/KnowledgeIcon";
import OrderIcon from "../../Images/IconComponents/OrderIcon";

const NavigationPanel = () => {
  const [open, setopen] = useState(true);

  return (
    <div className="p-4 bg-general-30 border-r h-full">
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
  );
};

export default NavigationPanel;
