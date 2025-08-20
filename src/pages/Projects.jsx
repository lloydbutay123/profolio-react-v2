import { FaArrowDown } from "react-icons/fa";
import Header from "../components/layout/Header";
import { SiFiles } from "react-icons/si";
import ModalButton from "../components/common/ModalButton";
import Footer from "../components/layout/Footer";

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
            <Footer />
        </div>
    )
}

export default Projects;
