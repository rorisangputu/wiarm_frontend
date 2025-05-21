import { Link } from "react-router-dom";
import corn from "../assets/corn_img.png";

const Footer = () => {
  return (
    <div className="w-full bg-green-900 py-7 text-[#dddddd]">
      <div className="w-[90%] mx-auto flex flex-col justify-between">
        {/* Top Section */}
        <div className="w-full flex flex-col gap-10 md:gap-5">
          {/* Logo and Contact Info */}
          <div className="flex flex-col gap-3">
            <Link to={"/"}>
              <div className="flex items-center gap-3 my-2">
                <img src={corn} alt="WiARM Logo" className="w-7 h-7" />
                <h1 className="font-semibold text-xl text-white">WiARM</h1>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-5">
            <div>
              <h1 className="text-md font-sans font-medium tracking-[0.2em] uppercase mb-3 text-white">
                Quick Links
              </h1>
              <ul className="space-y-4 font-normal text-md">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-md font-sans font-medium tracking-[0.2em] uppercase mb-3 text-white">
                Socials
              </h1>
              <ul className="space-y-4 text-md font-normal">
                <li>
                  <Link to="#">Facebook</Link>
                </li>
                <li>
                  <Link to="#">Instagram</Link>
                </li>
                <li>
                  <Link to="#">YouTube</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-md font-sans font-medium tracking-[0.2em] uppercase mb-3 text-white">
                Policies
              </h1>
              <ul className="space-y-5 text-md">
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col items-center text-sm pt-4">
          <p>&copy; 2025 WiARM</p>
          <p>Women in Agriculture Rural Movement</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
