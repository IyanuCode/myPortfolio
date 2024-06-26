import Link from "next/link";
// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiLinkedinBoxLine,
  RiTelegramLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={" "}
        className="hover:text-accent hover:text-3xl transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={" "}
        className="hover:text-accent hover:text-3xl transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={" "}
        className="hover:text-accent hover:text-3xl transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={" "}
        className="hover:text-accent hover:text-3xl transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href={" "}
        className="hover:text-accent hover:text-3xl transition-all duration-300"
      >
        <RiTelegramLine />
      </Link>
    </div>
  );
};

export default Socials;
