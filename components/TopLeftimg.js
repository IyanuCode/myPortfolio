import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute -left-40 -top-10 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image
        src="/topLeftImg.jpg"
        width={400}
        height={400}
        alt="top left img"
      />
    </div>
  );
};

export default TopLeftImg;
