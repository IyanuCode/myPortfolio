import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
//swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: ["💻", "👷🏻‍♂️"],
    title: "Design & Development",
    description:
      "Creating websites from scratch or redesigning existing ones to meet client requirements..",
  },
  {
    icon: ["👨🏻‍💻"],
    title: "Frontend Development",
    description:
      "Specialize in building the user-facing part of the website using technologies that will ensure that the website is visually appealing, responsive, and user-friendly.",
  },
  {
    icon: ["</>"],
    title: "Backend Development",
    description:
      "Focussing on the server-side of the website, handling tasks such as database management, server configuration, and application logic.",
  },
  {
    icon: ["🤵", "📚"],
    title: "Full-Stack Development",
    description: "Building both the frontend and backend.",
  },
  {
    icon: ["📷", "📲⍨⃝"],
    title: "Search Engine Optimization (SEO)",
    description:
      " Offering SEO services to improve a website's visibility and ranking in search engine results pages (SERPs). This includes optimizing website structure, content, and performance.",
  },
  {
    icon: ["🏗️", "🚧"],
    title: "Website Maintenance and Support",
    description:
      "We provide ongoing website maintenance and support services to ensure your website runs smoothly, performs well, and remains up-to-date with the latest technologies and security standards.",
  },
];

const ServiceSlider = () => {
  return (
    <>
      {/* for md screen upward */}
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("ServiceSlider change")}
          className="h-[240px] sm:h-[400px] "
        >
          {serviceData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=" bg-slate-950 h-96 rounded-lg px-4 py-2 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-black transition-all duration-300 text-center  ">
                  {/* icon */}
                  <div className="text-4xl text-accent mb-4 ">{item.icon}</div>
                  {/* title & desc */}
                  <div className="mb-8">
                    <div className=" text-lg text-accent font-semibold group-hover:text-blue-500">
                      {item.title}
                    </div>
                    <p className="max-w-[350px] leading-normal group-hover:text-gray-500 group-hover:font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* mobile responsiveness  */}
      <div className=" md:hidden overflow-y-scroll h-64  px-4 py-2 flex flex-col space-y-1 gap-x-0 group cursor-pointer transition-all duration-300 ">
        {serviceData.map((item, index) => (
          <div key={index} className="bg-slate-950 rounded-lg ">
            <div className="flex items-center">
              {/* icon */}
              <div className="text-4xl text-accent mb-4 mr-5">
                {item.icon[0]}
              </div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg text-accent font-semibold">
                  {item.title}
                </div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceSlider;
