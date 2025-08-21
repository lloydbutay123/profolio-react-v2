import { FaArrowDown } from "react-icons/fa";
import Header from "../components/layout/Header";
import { SiFiles } from "react-icons/si";
import ModalButton from "../components/common/ModalButton";
import Footer from "../components/layout/Footer";
import projects from "../assets/data/projects.json";

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

                {projects.map((project, index) => {
                    return (
                        <div className="w-full mb-[28px]" key={index}>
                            <img 
                                src={ project.image }
                                alt={ project.title }
                                className="w-full h-[320px] object-cover"
                            />
                            <div className="flex justify-between items-start p-[28px]">
                                <div>
                                    <div className="uppercase text-[14px]"><strong>{ project.title } </strong> / { project.company }</div>
                                    <div className="mt-[5px] text-[12px]">{ project.type.join(" || ") } , { project.company }</div>
                                </div>
                                <p className="text-[26.6px]">01</p>
                            </div>
                        </div>
                    )
                })}
                
                <div className="sticky z-10 w-full flex justify-center bottom-[4%] mb-[32px]">
                    <ModalButton />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;
