import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Page from "../src/Page";
import Login from "./Layouts/Authentications/Login";

function App() {
  const [auth, setauth] = useState(true);
  const navigate = useNavigate();
  const setLogin = () => {
    setauth(false);
    return navigate("/Dashboard");
  };
  return (
    <div className={`App duration-700 flex w-full h-full bg-general-30`}>
      {/* {auth ? (
        // <div className="auth-wrapper flex items-center w-full justify-center">
        //   <Routes>
        //     <Route path="/login" element={<Login actions={setLogin} />}></Route>
        //   </Routes>
        // </div>
      ) : (
      )} */}
      <Page />
      {/* <Dashboard />  */}
    </div>
  );
}

export default App;
