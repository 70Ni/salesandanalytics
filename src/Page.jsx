import React from "react";
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
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/AddProduct";
import Categories from "./Pages/Categories/Categories";
import CustomerInfo from "./Pages/Customers/CustomerInfo";
import CustomerAdd from "./Pages/Customers/CustomerAdd";
import OrderEmpty from "./Pages/EmptyStates/OrderEmpty";
import ProductEmpty from "./Pages/EmptyStates/ProductEmpty";
import CategoryEmpty from "./Pages/EmptyStates/CategoryEmpty";
import CustomerEmpty from "./Pages/EmptyStates/CustomerEmpty";
import PricingBox from "./Components/PricingBox/PricingBox";
import PricingPage from "./Pages/Pricing/PricingPage";
import CouponPage from "./Pages/Coupon/CouponPage";
import KnowledgeBase from "./Pages/KnowledgeBase/KnowledgeBase";
import SettingsPage from "./Pages/Settings/SettingsPage";
import NotificationSection from "./Pages/Settings/SettingsLayouts/NotificationSection";
import InboxPage from "./Pages/Inbox/InboxPage";
import ToggleButton from "./Pages/Inbox/Components/ToggleButton/ToggleButton";
import NavTab from "./Pages/Inbox/Components/NavTab/NavTab";
import TopBar from "./Components/TopBar/TopBar";
import Customer from "./Pages/Customers/Customers";
import Coupons from "./Pages/Coupon/Coupons";
import AddProduct from "./Pages/Products/AddProduct";
import ProductsPage from "./Pages/Products/ProductsPage";
import CategorieSection from "./Pages/Categories/CategorieSection";
import ReportPage from "./Pages/Report/ReportPage";
import EmptyPage from "./Pages/EmptyPage";
import MobNav from "./Layouts/NavSection/MobNav";
import { useState } from "react";

function Page() {
  const theme = "darkmode";

  const navOpen = () => {
    setNavOpen(true);
  };
  const navClose = () => {
    setNavOpen(false);
  };
  const navToggle = () => {
    setNavOpen(!NavOpen);
  };

  const [NavOpen, setNavOpen] = useState(false);
  const [auth, setauth] = useState(true);

  const navigate = useNavigate();
  const setLogin = () => {
    return navigate("/Dashboard"), setauth(false);
  };
  return (
    <div className="App duration-700 flex justify-center w-full h-full bg-general-30">
      <TopBar action={navToggle} />

      <div className="mobNav md:hidden relative z-10">
        <MobNav mobNavClose={navClose} mobNavState={NavOpen} />
      </div>
      <NavigationPanel
        mobNavOpen={navOpen}
        mobNavClose={navClose}
        mobNavState={NavOpen}
      />

      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<EmptyPage />}></Route>
        <Route path="/orders" element={<Orders />}></Route>

        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/productsadd" element={<AddProduct />}></Route>

        <Route path="/categories" element={<CategorieSection />}></Route>
        <Route path="/categoriesedit" element={<Categories />}></Route>

        <Route path="/customers" element={<Customer />}></Route>
        <Route path="/customerinfo" element={<CustomerInfo />}></Route>
        <Route path="/customersadd" element={<CustomerAdd />}></Route>

        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/knowledge-base" element={<KnowledgeBase />}></Route>

        <Route path="/coupons" element={<Coupons />}></Route>
        <Route path="/createCoupon" element={<CouponPage />}></Route>

        <Route path="/global-settings" element={<PricingPage />}></Route>
        <Route path="/personal-settings" element={<SettingsPage />}></Route>

        <Route path="/inbox" element={<InboxPage />}></Route>
        <Route path="/reports" element={<ReportPage />}></Route>
        <Route path="/empty" element={<EmptyPage />}></Route>

        <Route path="/orderEmpty" element={<OrderEmpty />}></Route>
        <Route path="/productEmpty" element={<ProductEmpty />}></Route>
        <Route path="/categoryempty" element={<CategoryEmpty />}></Route>
        <Route path="/customerempty" element={<CustomerEmpty />}></Route>
      </Routes>
    </div>
  );
}

export default Page;
