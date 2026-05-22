import logo from "../assets/color.png";
// import LoginPage from "./login";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-10 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center hover:text-pink-500 transition-colors">
          <img src={logo} alt="3D Logo" className="h-20" />
          <h2>
            <b>GRADIENT GENERATOR</b>
          </h2>
        </div>

        <div className="flex space-x-6">
          <a
            href="#"
            className="text-black hover:text-blue-500 hover:underline transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-500 hover:underline transition-colors"
          >
            Designs
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-500 hover:underline transition-colors"
          >
            Light effects
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-500 hover:underline transition-colors"
          >
            Swatches
          </a>
          <a
            href="/about"
            className="text-black hover:text-blue-500 hover:underline transition-colors"
          >
            About us
          </a>
          <a
            href="#"
            className="text-black hover:text-blue-500 hover:underline transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-row">
          <button className="py-2 px-4 hover:text-blue-400 hover:underline transition-colors">
            Sign up
          </button>
          {/* <div className="flex flex-col bg-blue-500 justify-center text-center item-center text-white w-30 rounded hover:bg-black">
            
            <button> <BiLogIn /> Login</button>
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <div className="bg-blue-500 text-white w-30 p-3 rounded-lg text-center transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-lg cursor-pointer group">
            <button className="flex items-center justify-center space-x-2 ">
                <BiLogIn className="text-xl" />{" "}
                {/* Icon animation on hover */}
                <span className="font-medium">Sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
