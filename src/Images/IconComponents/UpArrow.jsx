import React from "react";

function UpArrow({ color }) {
  return (
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
        d="M17.7903 10.3871L17.7071 10.2929L12.7071 5.29289C12.3466 4.93241 11.7794 4.90468 11.3871 5.2097L11.2929 5.29289L6.29289 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071C6.65338 12.0676 7.22061 12.0953 7.6129 11.7903L7.70711 11.7071L11.001 8.414L11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19L13.001 8.416L16.2929 11.7071C16.6534 12.0676 17.2206 12.0953 17.6129 11.7903L17.7071 11.7071C18.0676 11.3466 18.0953 10.7794 17.7903 10.3871Z"
        fill={color}
      />
    </svg>
  );
}

export default UpArrow;
