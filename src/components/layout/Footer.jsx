import { FaArrowRight, FaHeart } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
    return (
        <div className="sticky bottom-0 z-0 bg-black">
            <div className="mb-[56px] px-[14px]">
                <div className="flex flex-col space-y-[3em] pt-[84px]">
                    <div className="flex flex-col text-[#888888] space-y-[.75em] uppercase text-[14px]">
                        /Reach me
                        <a 
                            href=""
                            className="text-white lowercase text-[18.2px]"
                         >
                            johnlloydbutay123@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col text-[#888888] space-y-[.75em] uppercase text-[14px]">
                        /Stalk me :)
                        <a 
                             href=""
                            className="text-white lowercase text-[18.2px]"
                        >
                            linkedIn
                        </a>
                        <a 
                            href=""
                            className="text-white lowercase text-[18.2px]"
                        >
                            My resume
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-[.8em] text-white mb-[14px] px-[14px]">
                <p className="text-white text-[49px] leading-none font-bold">Ready to bring your ideas to life?</p>
                <a href="http://calendly.com/johnlloydbutay123/30min" className="flex justify-between items-center py-[14px] pr-[14px] pl-[28px] bg-[#dfb44b] rounded-full text-black uppercase font-bold ">
                    Let's create
                    <FaArrowRight />
                </a>
            </div>
            <div className="py-[41px] pr-[14px] pl-[23.800px] space-y-[1em]">
                <div className="flex justify-center">
                    <div className="flex items-center space-x-2 px-[11.2px] py-[7px]">
                        <p className="text-[12px] text-[#888888]">TW</p>
                        <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
                    </div>
                    <div className="flex items-center space-x-2 px-[11.2px] py-[7px]">
                        <p className="text-[12px] text-[#888888]">BE</p>
                        <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
                    </div>
                    <div className="flex items-center space-x-2 px-[11.2px] py-[7px]">
                        <p className="text-[12px] text-[#888888]">LI</p>
                        <GoArrowUpRight className="w-[12px] h-[12px] text-[#888888]" />
                    </div>
                </div>
                <div className="flex justify-center items-center text-[#888888]">
                    Design and Buld with
                    <FaHeart color="yellow" className="mx-2" />
                    by me
                </div>
            </div>
        </div>
    )
}

export default Footer;