import { GoArrowUpRight } from "react-icons/go";

function Header() {
    return (
        <div className="flex items-center justify-between px-[14px] h-[70px]">
            <div>
                <p>John Lloyd Butay</p>
            </div>

            <a href="" className="flex items-center justify-center bg-gray-400 py-[14px] px-[18px] rounded-full text-white uppercase text-[12px]">
                Work with me
                <GoArrowUpRight className="w-2 h-2 ml-[5px]" />
            </a>
        </div>

    );
}

export default Header;