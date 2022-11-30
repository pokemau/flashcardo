import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className="w-[100vw] flex justify-between items-center py-3 px-5 border-b-2 border-[#ddd] md:w-[80vw] md:m-auto">
        <div className="text-2xl font-[900] md:text-4xl">
          <h1>FLASHCARDO</h1>
        </div>

        <div className="flex">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/about">
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
