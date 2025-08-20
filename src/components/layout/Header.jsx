import { GoArrowUpRight, GoDotFill } from "react-icons/go";

function Header() {
    return (
        <div className="flex items-center justify-between px-[14px] h-[70px]">
            <div className="flex items-center">
                <GoDotFill className="w-[12px] h-[12px] text-yellow-500" />
                <p>John Lloyd Butay</p>
            </div>

            <a href="" className="flex items-center justify-center bg-[#2b2b2b] py-[14px] px-[18px] rounded-full text-white uppercase text-[12px]">
                Work with me
                <GoArrowUpRight className="w-[12px] h-[12px] ml-[5px]" />
            </a>
        </div>

    );
}

export default Header;