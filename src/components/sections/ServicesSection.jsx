import skills from "../../assets/data/skills.json";

function ServicesSection() {
    return (
        <div className="px-[14px] pt-[140px]">
            <div className="uppercase text-[14px]">
                / Services
            </div>
            <div className="border-b-[1px] border-[#888888] my-[14px]" />
                <div className="flex flex-col space-y-[1.5em] mb-[28px]">
                    <h1 className="text-[27.0133px] font-bold leading-none">My skills and <br /> interests</h1>
                </div>
            <div className="mt-[30.027px] ml-[56px] flex flex-col space-y-[16px] my-[48px]">
                {skills.map((skill, index) => {
                    return (
                        <div className="text-[20px] font-bold flex items-center" key={ index }>
                            <div className="w-[8px] h-[8px] bg-[#dfb44b] mr-[1em]" />
                            { skill }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ServicesSection;