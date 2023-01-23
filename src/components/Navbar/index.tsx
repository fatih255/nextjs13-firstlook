import dynamic from "next/dynamic";
import Navbar from "./Navbar";

export type NavbarTypes = "default" | "blog";

export const Navbars = {
  default: dynamic(() => import("./DefaultNavbar")),
  blog: dynamic(() => import("./BlogNavbar")),
};

export default Navbar;
