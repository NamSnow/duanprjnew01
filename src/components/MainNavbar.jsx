import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-blue-gray-700";

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="font-medium">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </Typography>

      <Typography as="li" variant="small" className="font-medium">
        <NavLink to="/about" className={navLinkClass}>
          AboutUs
        </NavLink>
      </Typography>

      <Typography as="li" variant="small" className="font-medium">
        <NavLink to="/admin" className={navLinkClass}>
          Admin
        </NavLink>
      </Typography>

      <Typography as="li" variant="small" className="font-medium">
        <NavLink to="/todo" className={navLinkClass}>
          Todolist
        </NavLink>
      </Typography>
    </ul>
  );

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className={`mx-auto px-4 py-2 lg:px-8 lg:py-4 shadow-md bg-dark border-none ${
        isScrolled
          ? "fixed top-0 left-0 z-50 bg-white max-w-full"
          : "max-w-screen-xl"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 max-w-screen">
        <NavLink
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-lg text-white"
        >
          PHN
        </NavLink>

        <div className="hidden lg:block">{navList}</div>

        <div className="hidden lg:flex items-center gap-x-2">
          <NavLink to="/login">
            <Button variant="text" size="sm" className="text-white">
              Log In
            </Button>
          </NavLink>

          <NavLink to="/signin">
            <Button variant="gradient" size="sm">
              Sign In
            </Button>
          </NavLink>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col gap-2">
            <NavLink to="/login">
              <Button fullWidth variant="text" size="sm">
                Log In
              </Button>
            </NavLink>
            <NavLink to="/signin">
              <Button fullWidth variant="gradient" size="sm">
                Sign In
              </Button>
            </NavLink>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default MainNavbar;
