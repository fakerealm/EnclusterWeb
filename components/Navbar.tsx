import { useState } from "react";

export default function Nav({ color, showSecondaryNav }) {
  const [toggleMobile, setToggleMobile] = useState(false);
  return (
    <div className={color}>
      <nav>
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex items-center px-2 py-5 text-gray-100 hover:text-gray-300"
                >
                  <span className="text-2xl font-bold">EnCluster</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="items-center hidden md:flex spacex-1">
                <a
                  href="#"
                  className="px-3 py-5 text-gray-100 hover:text-gray-300"
                >
                  About
                </a>
              </div>
            </div>
            {showSecondaryNav ? (
              /* secondary nav */
              <div className="items-center hidden md:flex space-x-1">
                <a
                  href="/login"
                  className="px-3 py-5 font-bold text-gray-100 hover:text-gray-300"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="px-3 py-5 font-bold text-gray-100 hover:text-gray-300"
                >
                  Register
                </a>
              </div>
            ) : (
              <></>
            )}
            {/* mobile button goes here */}
            <div className="flex items-center md:hidden lg:hidden">
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
            className="block px-4 py-2 text-xl text-gray-100 hover:text-gray-300"
          >
            About
          </a>
          {showSecondaryNav ? (
            <>
              <a
                href="/login"
                className="block px-4 py-2 text-xl text-gray-100 hover:text-gray-300"
              >
                Login
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-xl text-gray-100 hover:text-gray-300"
              >
                Register
              </a>
              )
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </div>
  );
}

Nav.defaultProps = {
  loggedOrLoggingIn: false,
  color: "transparent",
};
