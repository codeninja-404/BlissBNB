import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="pt-32 min-h-screen ">
      <div className="container px-2 mx-auto mb-20 ">
        <div className="flex h-[50vh] flex-col  justify-center items-center space-y-4">
          <h1 className="text-7xl font-bold">404</h1>
          <p className="text-red-500 font-bold text-2xl">
            PAGE NOT FOUND !!!!!
          </p>
          <Link
            to="/"
            className="hover:bg-green-500 bg-green-900
            
            py-1 text-white rounded-lg px-10"
          >
            GO TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
