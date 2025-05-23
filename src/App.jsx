import "./App.css";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Pricing from "./pages/pricing/Pricing";
import FqasPage from "./pages/fqas/FqasPage";
import ContactUs from "./pages/contactus/ContactUs";
import Navbar from "./components/navbar/Navbar";
import Legal from "./pages/legal/Legal";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import SignUpIndividual from "./pages/signup/SignUpIndividual";
import SignUpOrganization from "./pages/signup/SignUpOrganization";
import ResetPassword from "./pages/signup/ResetPassword";
import SideMenu from "./pages/Dashboards/Individual/SideMenu/SideMenu";
import Dashboard from "./pages/Dashboards/Individual/Dashboard/Dashboard";

const MainLayout = () => {
  return (
    <div className="relative">
      <div className="z-50 absolute w-full">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <div className="bg-[#000000]">
      <div className="container p-5 w-full flex gap-2">
        <div className="w-[22%]">
          <SideMenu />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/fqas", element: <FqasPage /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/legal", element: <Legal /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signup/individual", element: <SignUpIndividual /> },
      { path: "/signup/organization", element: <SignUpOrganization /> },
      { path: "/resetpassword", element: <ResetPassword /> },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
