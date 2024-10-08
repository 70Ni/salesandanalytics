import React from "react";

function HomeIcon({ color }) {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.3287 3.51558C13.3873 3.56764 13.4428 3.6231 13.4948 3.68167L19.4948 10.4317C19.8202 10.7978 20 11.2706 20 11.7604V19C20 20.1046 19.1046 21 18 21H14.002C14.0013 21 14.0007 21 14 21H10C9.99934 21 9.99868 21 9.99803 21H6C4.89543 21 4 20.1046 4 19V11.7604C4 11.2706 4.17976 10.7978 4.50518 10.4317L10.5052 3.68167C11.239 2.8561 12.5032 2.78174 13.3287 3.51558ZM11 19H13V15H11V19ZM15 19V14C15 13.4477 14.5523 13 14 13H10C9.44772 13 9 13.4477 9 14V19H6V11.7604L12 5.0104L18 11.7604V19H15Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default HomeIcon;
