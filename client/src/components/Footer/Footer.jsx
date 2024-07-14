import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGooglePlus,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white font-sans bg-cover pb-10">
      <div className="max-w-screen-xl mx-auto px-4 text-center ">
        <div className="flex flex-col md:flex-row py-10 border-b border-gray-400 ">
          <div className="flex-1 text-sm  flex md:block flex-col items-center pb-5  ">
            <h3 className="text-lg mb-4 font-bold">Company</h3>
            <ul className="footerUl">
              <li>
                <Link
                  to="/about/about-us"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/press/news"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="http://blog.airbnb.com"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/help?from=footer"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/disaster-response"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Disaster Response
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms &amp; Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-sm  flex md:block flex-col items-center pb-5 ">
            <h3 className="text-lg mb-4 font-bold">Discover</h3>
            <ul className="footerUl">
              <li>
                <Link
                  to="/trust"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Trust &amp; Safety
                </Link>
              </li>
              <li>
                <Link
                  to="/invite?r=6"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Travel Credit
                </Link>
              </li>
              <li>
                <Link
                  to="/gift"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlists/airbnb_picks"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Airbnb Picks
                </Link>
              </li>
              <li>
                <Link
                  to="/mobile"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Mobile
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.airbnbaction.com?utm_source=airbnb&amp;utm_medium=footer&amp;utm_campaign=product"
                  className="link-contrast hover:text-gray-400 disabled"
                  target="_blank"
                  onClick={(e) => e.preventDefault()}
                >
                  Airbnb Action
                </Link>
              </li>
              <li>
                <Link
                  to="/business-travel?s=footer"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Business Travel
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemaps"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Site Map
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-sm  flex md:block flex-col items-center ">
            <h3 className="text-lg mb-4 font-bold">Hosting</h3>
            <ul className="footerUl">
              <li>
                <Link
                  to="/host"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Why Host
                </Link>
              </li>
              <li>
                <Link
                  to="/hospitality"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Hospitality
                </Link>
              </li>
              <li>
                <Link
                  to="/help/responsible-hosting"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Responsible Hosting
                </Link>
              </li>
              <li>
                <Link
                  to="/home-safety"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Home Safety
                </Link>
              </li>
              <li>
                <Link
                  to="/host/instant"
                  className="link-contrast hover:text-gray-400 disabled"
                  onClick={(e) => e.preventDefault()}
                >
                  Instant Book
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center py-10">
          <h2 className="text-2xl font-bold mb-4">Join Us on</h2>
          <div className="flex flex-wrap justify-center gap-4 space-x-5">
            <span className="icon">
              <FaFacebook className="size-6" color="1da1f2" />
            </span>
            <span className="icon">
              <FaGooglePlus className="size-6" color="#dd4b39" />
            </span>
            <span className="icon">
              <FaTwitter className="size-6" color="#1da1f2" />
            </span>
            <span className="icon">
              <FaLinkedin className="size-6" color="#0077b5" />
            </span>
            <span className="icon">
              <FaInstagram className="size-6" color="#e4405f" />
            </span>
            <span className="icon">
              <FaPinterestP className="size-6" color="#bd081c" />
            </span>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-sm mt-4">
        © {new Date().getFullYear()} BlissBNB
      </p>
    </footer>
  );
};

export default Footer;
