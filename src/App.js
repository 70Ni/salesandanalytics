import logo from "./logo.svg";
import "./App.css";
import PrimaryButton from "./Components/Buttons/PrimaryButton";
import img from "../src/Images/Icons/01 Actions/06 Checkmark.svg";
import SecondaryButton from "./Components/Buttons/SecondaryButton";
import Input from "./Components/Input/Large/Input";
import IconInput from "./Components/Input/Large/IconInput";
import TextInput from "./Components/Input/Large/TextInput";
import SearchInput from "./Components/Input/Large/SearchInput";
import NumberInput from "./Components/Input/Large/NumberInput";
import FileInput from "./Components/Input/Large/FileInput";
import Login from "./Layouts/Authentications/Login";
import Table from "./Components/Table/Table";
import LineGraph from "./Components/Graph/LineGraph";
import OrdersTime from "./Components/Graph/OrdersTime";
import SumCard from "./Components/SumCards/SumCard";
import SumSection from "./Layouts/Panel/SumSection";
import Navigation from "./Components/Navigation/Navigation";
import NavigationPanel from "./Layouts/NavSection/NavigationPanel";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import SideNavigation from "./Components/Navigation/SideNavigation";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import Categories from "./Pages/Categories/Categories";
import CustomerInfo from "./Pages/Customers/CustomerInfo";
import CustomerAdd from "./Pages/Customers/CustomerAdd";
import OrderEmpty from "./Pages/EmptyStates/ProductEmpty";
import ProductEmpty from "./Pages/EmptyStates/ProductEmpty";
import CategoryEmpty from "./Pages/EmptyStates/CategoryEmpty";
import CustomerEmpty from "./Pages/EmptyStates/CategoryEmpty copy";

const theme = "darkmode";

function App() {
  return (
    <div className={`App flex w-full`}>
      {/* <BrowserRouter> */}
      {/* <Routes>
          <Route path="home" element={<Table />} />
          <Route path="link" element={<OrdersTime />} />
        </Routes> */}
      {/* <nav>
          <ul>
            <li>
              <Link to="/link">link</Link>
              <Link to="/home">
                <Table />
              </Link>
            </li>
          </ul>
        </nav> */}
      {/* </BrowserRouter> */}
      {/* <Login /> */}
      {/* <div className="h-full flex flex-col items-center">
        <SumSection />
        <div className="h-80"></div>
        <OrdersTime />
      </div> */}
      <NavigationPanel />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/orderEmpty" element={<OrderEmpty />}></Route>
        <Route path="/productEmpty" element={<ProductEmpty />}></Route>
        <Route path="/categoryempty" element={<CategoryEmpty />}></Route>
        <Route path="/customerempty" element={<CustomerEmpty />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/customers" element={<CustomerInfo />}></Route>
        <Route path="/customersadd" element={<CustomerAdd />}></Route>
      </Routes>
      {/* <Dashboard />  */}
    </div>
  );
}

export default App;
