import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="p-4 custom-min-height pt-32 border-2 border-red-500 max-w-7xl mx-auto ">
        <Outlet />
        <Toaster position="top-left" reverseOrder={false} />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
