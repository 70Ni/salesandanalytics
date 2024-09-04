import React from "react";
import Notification from "../Components/Notification";

const settingList = [
  {
    header: "Personalized Offers",
    content: "Receive offers made special for you",
    action: true,
  },
  {
    header: "Online Webinars",
    content: "Get notified about upcoming webinars",
    action: true,
  },
  {
    header: "New Features",
    content: "Updates about new features and product releases",
    action: true,
  },
  {
    header: "Security and Billing",
    content: "Account security and notifications about billing",
    action: true,
  },
  {
    header: "Marketing",
    content: "Receive marketing newsletters about our new products.",
    action: true,
  },
];

function NotificationSection() {
  return (
    <div>
      {settingList.map((x) => {
        return (
          <div className="border-b border-general-40 last:border-b-0">
            <Notification header={x.header} content={x.content} />
          </div>
        );
      })}
    </div>
  );
}

export default NotificationSection;
