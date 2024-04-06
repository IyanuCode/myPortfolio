import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center  ">
          {/* logo */}
          <Link href={"/"}>
            <h3 className="md:text-3xl bold text-2xl " title="my name">
              <span className="text-accent font-bold">ADEUSI </span>
              Iyanu Emmanuel.
            </h3>
          </Link>
          {/* socials */}
          <div className="hidden lg:flex">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
