import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="p-4 custom-min-height pt-32 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
