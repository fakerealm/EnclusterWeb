import { useState } from "react";

export default function Nav({ color, showSecondaryNav }) {
  const [toggleMobile, setToggleMobile] = useState(false);
  return (
    <div className={color}>
      <nav>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex items-center py-5 px-2 text-gray-100 hover:text-gray-300"
                >
                  <span className="font-bold text-2xl">EnCluster</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-100 hover:text-gray-300"
                >
                  About
                </a>
              </div>
            </div>
            {showSecondaryNav?(
              /* secondary nav */
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="/login"
                  className="py-5 px-3 font-bold text-gray-100 hover:text-gray-300"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="py-5 px-3 font-bold text-gray-100 hover:text-gray-300"
                >
                  Register
                </a>
              </div>):<></>}
            {/* mobile button goes here */}
            <div className="md:hidden lg:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={() => {
                  setToggleMobile(!toggleMobile);
                }}
              >
                <img
                  src="/Images/menu.png"
                  className="object-scale-down h-12"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={
            toggleMobile ? "mobile-menu md:hidden lg:hidden" : "hidden"
          }
        >
        <a
          href="#"
          className="block py-2 px-4 text-xl text-gray-100 hover:text-gray-300"
        >
          About
        </a>{showSecondaryNav?(<>
            <a
              href="#"
              className="block py-2 px-4 text-xl text-gray-100 hover:text-gray-300"
            >
              Login
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-xl text-gray-100 hover:text-gray-300"
            >
              Register
            </a>)</>):<></>}
        </div>
      </nav>
    </div>
  );
}

Nav.defaultProps = {
  loggedOrLoggingIn: false,
  color: 'transparent'
}