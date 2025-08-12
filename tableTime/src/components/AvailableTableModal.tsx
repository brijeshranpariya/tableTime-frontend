import { IoMdClose } from "react-icons/io"
import { AvailableTableChart } from "./AvailableTableChart"

export const AvailableTableModal: React.FC<{ close: () => void }> = ({ close }) => {
    return (
        <div className='rounded-md bg-white p-4 z-40 fixed flex flex-col w-[55%]'>
            <div>
                <button className="float-end" onClick={() => close()}><IoMdClose /></button>
            </div>
            <div className="mb-2">
                <AvailableTableChart available={2} total={12} />
            </div>
            <div className="flex justify-between my-1 items-center">
                <p className="font-semibold text-gray-400">Available For:</p>
                <p className="font-semibold">12 min</p>
            </div>
            <div className="flex justify-between my-1 items-center">
                <p className="font-semibold text-gray-400">Available In:</p>
                <p className="font-semibold">20 min</p>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="my-2 font-semibold text-gray-400">Capacity</p>
                    <p className="font-semibold">2</p>
                    <p className="font-semibold">4</p>
                </div>
                <div>
                    <p className="my-2 font-semibold text-gray-400">Available</p>
                    <p className="font-semibold">1</p>
                    <p className="font-semibold">1</p>
                </div>
            </div>
            <div className="mt-2">
                <button className="bg-primary p-2 font-semibold text-white w-full rounded-md hover:cursor-pointer" onClick={()=>close()}>
                    Book Now
                </button>
            </div>
        </div>
    )
}
