import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="w-[100vw] flex justify-between items-center py-3 px-5
			border-b-[1px] border-[#ddd] md:w-[80vw] md:m-auto transition-all"
    >
      <Link href="/" className="text-xl md:text-4xl lg:text-2xl font-[900] ">
        <h1>FLASHCARDO</h1>
      </Link>

      <div className="flex">
        <Link
          className="hover:bg-gray-200 flex items-center justify-center h-8 w-14 md:w-16
    rounded transition-all"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:bg-gray-200 flex items-center justify-center h-8 w-14 md:w-16
    rounded transition-all"
          href="/about"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
