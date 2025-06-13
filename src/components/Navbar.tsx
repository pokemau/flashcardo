import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-[100vw] flex justify-between items-center py-3 px-5
      border-b-[1px] border-[#ddd] md:w-[90vw] md:m-auto transition-all">

      <h1 className="text-xl md:text-2xl lg:text-4xl font-[700]">FLASHCARDO</h1>

      <div>
        <Button variant={'link'} asChild>
          <Link href={'/'}>
            Home
          </Link>
        </Button>

        <Button variant={'link'} asChild>
          <Link href={'/about'}>
            About
          </Link>
        </Button>
      </div>
    </nav>
  )

}


export default Navbar;
