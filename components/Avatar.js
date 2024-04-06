import Image from "next/image";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/a.png"}
        width={737}
        height={678}
        alt="devImage"
        className="translate-z-0 w-full h-full lg:transform scale-x-[-1]"
      />
    </div>
  );
};

export default Avatar;
