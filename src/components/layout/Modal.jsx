import { FaArrowRight, FaSpotify } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function Modal({ isOpen, children }) {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-1 h-full">
            <div className="bg-white h-auto mx-[18.969px] rounded-[16px] w-full">
                <div className="flex justify-between px-[24px] pt-[28px]">
                    <div className="space-x-[1.5em]">
                        <a href="" className="text-xs">BE</a>
                        <a href="" className="text-xs">LI</a>
                    </div>
                    <FaSpotify className="w-[20px] h-[20px]" />
                </div>

                <div className="flex flex-col items-center my-[28px]">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" 
                        alt="Profile Picture" 
                        className="w-[72px] h-[72px] object-cover rounded-full"
                    />
                    <h3 className="mt-[16px] text-[18px] font-bold">John Lloyd Butay</h3>
                    <div className="text-[13px]">Fullstack Developer</div>
                </div>
                
                <div className="border-y-[1px] border-gray-400">
                    <div className="flex justify-between items-center mx-[20px] h-[72px] border-b-[1px] border-gray-400">
                        <div className="flex">
                            <h3>Selected Works</h3>
                            <div className="text-[13px] px-[2px]">001</div>
                        </div>
                        <FaArrowRight />
                    </div>
                    <div className="flex justify-between items-center mx-[20px] h-[72px]">
                        <div className="flex">
                            <h3>Info</h3>
                            <div className="text-[13px] px-[2px]">002</div>
                        </div>
                        <FaArrowRight />
                    </div>
                </div>

                <div className="flex items-center justify-center h-[67.53px]">
                    <a href="" className="flex items-center space-x-[.5em] bg-black text-white px-[18px] py-[8px] rounded-full">
                        <p className="text-xs uppercase">Work with me</p>
                        <GoArrowUpRight className="w-2 h-2" />
                    </a>
                </div>           
            </div>
        </div>
    );
}

export default Modal;