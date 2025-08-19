import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Header from "../layout/Header";
import { useState } from "react";
import Modal from "../layout/Modal";
import { Autoplay } from "swiper/modules";
import { FaPlay, FaRegCopyright } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-full">
      <Header />
      <div className="flex flex-col justify-between">
        {/* Top Text Section */}
        <div className="mt-7 px-4">
          <h1 className="font-bold text-[42px] leading-[1em] tracking-[.1vh]">Designer</h1>
          <h1 className="font-bold text-[42px] leading-[1em] tracking-[.1vh]">Skill Collector</h1>
          <h1 className="font-bold text-[42px] leading-[1em] tracking-[.1vh]">Harmony Hunter</h1>

          <div className="flex items-center mt-5 space-x-2">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-gray-300 text-black">
              <FaPlay className="w-[6px] h-[6px] text-black" fill="currentColor" />
            </button>
            <p className="uppercase text-[12px]">Play Project Reels</p>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="w-full mt-[14px] h-full ">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[ Autoplay ]}
            className="w-full h-full bg-image"
          >
            <SwiperSlide className="w-full flex justify-center">
              <img
                src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-automated-testing-abstract-concept-vector-illustration-picture-image_8420807.png"
                alt="Slide 1"
                className="w-full max-w-md h-auto object-contain"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full flex justify-center">
              <img
                src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-automated-testing-abstract-concept-vector-illustration-picture-image_8420807.png"
                alt="Slide 2"
                className="w-full max-w-md h-auto object-contain"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="fixed z-10 w-full flex justify-center bottom-[4%]">
          <button className=" z-10 h-[72px] w-[72px] bg-gray-400 rounded-full p-[8px]" onClick={() => setIsModalOpen(prev => !prev) }>
          <div className="flex justify-center items-center rounded-full bg-white w-full h-full">
              <HiMenuAlt4 className="w-[24px] h-[24px]" />
            </div>
          </button>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>

      {/* Bottom Section */}
        <div className="flex justify-between px-4 w-full h-[48.92px]">
          <div className="flex space-x-2">
            <div className="flex items-center space-x-2 px-[11.2px] py-[7px]">
              <p className="text-[12px]">AR</p>
              <GoArrowUpRight className="w-[12px] h-[12px]" />
            </div>
            <div className="flex items-center space-x-2 px-[11.2px] py-[7px]">
              <p className="text-[12px]">LI</p>
              <GoArrowUpRight className="w-[12px] h-[12px]" />
            </div>
          </div>
          <div className="flex items-center space-x-2 px-[11.2px] py-[7px]">
            <FaRegCopyright className="w-[12px] h-[12px]" />
            <p className="text-[12px]">2025</p>
          </div>
        </div>
    </div>
  );
}

export default Hero;
