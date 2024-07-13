import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className="bg-slate-600 text-white">
      <Header />
      <div className="p-4 custom-min-height pt-32 max-w-7xl mx-auto ">
        <Outlet />
        <Toaster position="top-left" reverseOrder={false} />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
