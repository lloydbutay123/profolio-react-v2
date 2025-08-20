import { HiMenuAlt4 } from "react-icons/hi";
import Modal from "./Modal";
import { useState } from "react";

function ModalButton() {
    const [isModalOpen, setIsModalOpen] = useState (false);

    return (
        <>
            <button className=" z-10 h-[72px] w-[72px] bg-[#888888] rounded-full p-[8px]" onClick={() => setIsModalOpen(prev => !prev) }>
                <div className="flex justify-center items-center rounded-full bg-white w-full h-full">
                <HiMenuAlt4 className="w-[24px] h-[24px]" />
                </div>
            </button>  
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default ModalButton;