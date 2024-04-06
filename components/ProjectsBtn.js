import Image from "next/image";
import Link from "next/link";

// importing icons
import { HiArrowRight } from "react-icons/hi2";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/eatSleepCode.png"}
          width={541}
          height={548}
          alt="buttonImage"
          className="animate-spin-slow w-full max-w-[541px] max-h-[548px] "
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
