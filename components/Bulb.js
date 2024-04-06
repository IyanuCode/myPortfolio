import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-26 -bottom-12 rotate-12 mix-blend-color-dodge  z-10 w-[200px] xl:w-[260px]">
      <Image
        src={"/a.png"}
        width={260}
        height={200}
        alt="bulbImage"
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
