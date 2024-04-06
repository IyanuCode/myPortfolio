// icons
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { MdHomeRepairService } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { FcHome, FcBusinessman, FcWorkflow } from "react-icons/fc";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <FcHome /> },
  { name: "about", path: "/about", icon: <FcBusinessman /> },
  { name: "services", path: "/services", icon: <FcWorkflow /> },
  { name: "work", path: "/work", icon: <MdHomeRepairService /> },
  { name: "contact", path: "/contact", icon: <FiMessageCircle /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className=" animate-pulse flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-20 px-4 md:px-40 xl:px-0 h-[40px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* angle at the title tip */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[12px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
