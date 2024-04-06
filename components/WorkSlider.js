// // data
export const workSlider = {
    slides: [
      {
        images: [
          {
            title: "Cooking website - deals with food and tutoring ",
            path: "/cooking.png",
          },
          {
            title: "Music Downloading Website",
            path: "/update.png",
          },
          {
            title: "Football Academy",
            path: "/football.png",
          },
          {
            title: "Medicinal Herbs",
            path: "/herbs.jpg",
          },
        ],
      },
    ],
  };
  
  import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  
  import { BsArrowRight } from "react-icons/bs";
  import Image from "next/image";
  const WorkSlider = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5} // Set spaceBetween to 0
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=""
      >
        {workSlider.slides[0].images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="group">
              {/* slider */}
              <div className="rounded-lg ">
                <div className="flex">
                  <Image
                    src={image.path}
                    width={220}
                    height={200}
                    className="rounded-md"
                  />
  
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/80 text-white  rounded-md">
                    <h2 className="text-center">{image.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default WorkSlider;
  