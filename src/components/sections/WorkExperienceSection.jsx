import { GoArrowUpRight } from "react-icons/go";
import workExperience from "../../assets/data/workExperience.json";

function WorkExperienceSection() {
    return (
        <div className="px-[14px] pt-[140px] pb-[168px]">
            <div className="uppercase text-[14px]">
                / Work History
            </div>
            <div className="border-b-[1px] border-[#888888] my-[14px]" />
            <div className="flex flex-col space-y-[1.5em] mb-[28px]">
                <h1 className="text-[27.0133px] font-bold leading-none">My work <br /> experience</h1>
                <a href="" className="flex items-center w-[146px] text-center px-[18.200px] py-[8.400px] bg-[#eeeeee] rounded-full uppercase text-[12px] font-bold">View linkedin <GoArrowUpRight className="w-[12px] h-[12px] ml-[.5em]" /> </a>
            </div>
            {workExperience.map((work, index) => {
                return (
                    <div className="flex justify-between items-center py-[35px] border-b-[1px] border-[#888888]" key={ index }>
                        <div className="flex items-center space-x-[1em]">
                            <img src={ work.image } alt="" className="w-[44px] h-[44px] flex-shrink-0 object-cover" />
                            <div className="text-[16px] font-bold flex flex-wrap">
                                { work.position } -
                                <span className="text-[#888888]">{ work.company }</span>
                            </div>
                        </div>
                        <div className="text-[14px]">
                            { work.years }
                        </div>
                    </div>       
                )
            })} 
        </div>
    );
}

export default WorkExperienceSection;