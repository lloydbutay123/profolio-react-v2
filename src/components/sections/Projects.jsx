import { FaArrowDown, FaArrowRight, FaFile, FaHeart } from "react-icons/fa";
import Header from "../layout/Header";
import { SiFiles } from "react-icons/si";
import ModalButton from "../layout/ModalButton";
import { GoArrowUpRight } from "react-icons/go";

function Projects() {
    return (
        <div className="relative min-h-full bg-white">
            <div className="relative z-10 bg-white pb-[42px]">
                <Header />
                <div className="flex flex-col space-y-[1em] px-[14px] mt-[13.5067px]">
                    <SiFiles className="text-yellow-500" size={70} />
                    <div>
                        <h1 className="text-black font-bold text-[63.8067px] leading-none">Selected</h1>
                        <h1 className="text-black font-bold text-[63.8067px] leading-9">works</h1>
                    </div>
                </div>

                <div className="flex justify-between items-end mt-[52.027px] px-[14px] mb-[28px]">
                    <FaArrowDown className="text-[#898989]" size={44} />
                    <p className="text-black text-end w-[232.71px] text-[14px]">
                        Projects cutting across product and visual design and an additional section, playground,, 
                        that contains shots from my exploration into my other design passions.
                    </p>
                </div>

                <div className="w-full mb-[28px]">
                    <img 
                        src="https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-project-idea-1024x683.webp" 
                        alt="Project 1" 
                        className="w-full h-[270.13px] object-cover"
                    />
                    <div className="flex justify-between items-start p-[28px]">
                        <div>
                            <div className="uppercase text-[14px]"><strong>grey </strong> / inclusive global banking</div>
                            <div className="mt-[5px] text-[12px]">Mobile || Web, asianlink.ai</div>
                        </div>
                        <p className="text-[26.6px]">01</p>
                    </div>
                </div>

                <div className="w-full mb-[28px]">
                    <img 
                        src="https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-project-idea-1024x683.webp" 
                        alt="Project 2" 
                        className="w-full h-[270.13px] object-cover"
                    />
                    <div className="flex justify-between items-start p-[28px]">
                        <div>
                            <div className="uppercase text-[14px]"><strong>grey </strong> / inclusive global banking</div>
                            <div className="mt-[5px] text-[12px]">Mobile || Web, asianlink.ai</div>
                        </div>
                        <p className="text-[26.6px]">01</p>
                    </div>
                </div>

                <div className="w-full mb-[28px]">
                    <img 
                        src="https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-project-idea-1024x683.webp" 
                        alt="Project 3" 
                        className="w-full h-[270.13px] object-cover"
                    />
                    <div className="flex justify-between items-start p-[28px]">
                        <div>
                            <div className="uppercase text-[14px]"><strong>grey </strong> / inclusive global banking</div>
                            <div className="mt-[5px] text-[12px]">Mobile || Web, asianlink.ai</div>
                        </div>
                        <p className="text-[26.6px]">01</p>
                    </div>
                </div>

                <div className="w-full mb-[28px]">
                    <img 
                        src="https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-project-idea-1024x683.webp" 
                        alt="Project 4" 
                        className="w-full h-[270.13px] object-cover"
                    />
                    <div className="flex justify-between items-start p-[28px]">
                        <div>
                            <div className="uppercase text-[14px]"><strong>grey </strong> / inclusive global banking</div>
                            <div className="mt-[5px] text-[12px]">Mobile || Web, asianlink.ai</div>
                        </div>
                        <p className="text-[26.6px]">01</p>
                    </div>
                </div>

                <div className="w-full">
                    <img 
                        src="https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-project-idea-1024x683.webp" 
                        alt="Project 5" 
                        className="w-full h-[270.13px] object-cover"
                    />
                    <div className="flex justify-between items-start p-[28px]">
                        <div>
                            <div className="uppercase text-[14px]"><strong>grey </strong> / inclusive global banking</div>
                            <div className="mt-[5px] text-[12px]">Mobile || Web, asianlink.ai</div>
                        </div>
                        <p className="text-[26.6px]">01</p>
                    </div>
                </div>
                
                <div className="sticky z-10 w-full flex justify-center bottom-[4%] mb-[32px]">
                    <ModalButton />
                </div>
            </div>

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
        </div>
    )
}

export default Projects;
