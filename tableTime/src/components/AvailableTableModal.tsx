import { IoMdClose } from "react-icons/io"
import { AvailableTableChart } from "./AvailableTableChart"
import type { AvailableTableDetails, CapacityWiseTableDetails } from "../common/interface/interface"
import { useNavigate, useOutletContext } from "react-router-dom"
type ContextType = {
    capacityWiseTable: CapacityWiseTableDetails[]
    availableTable: AvailableTableDetails[]
}
export const AvailableTableModal: React.FC<{ close: () => void, numOfAvailableTable: number, totalTables: number }> = ({ close, numOfAvailableTable, totalTables }) => {
    const navigate = useNavigate()
    const { capacityWiseTable } = useOutletContext<ContextType>()
    const handleBooking = async () => {
        const id = window.location.pathname.split('/')[2]
        navigate(`/restaurants/booking/${id}`)
        close()
    }

    return (
        <div className='rounded-md bg-white p-4 z-40 fixed flex flex-col w-[55%]'>
            <div>
                <button className="float-end" onClick={() => close()}><IoMdClose /></button>
            </div>
            <div className="mb-2">
                <AvailableTableChart available={numOfAvailableTable} total={totalTables} />
            </div>
            <div className="flex justify-between">

                <div>
                    <p className="my-2 font-semibold text-gray-400">Capacity</p>
                    {capacityWiseTable.sort((a, b) => a.total_capacity - b.total_capacity).map((item: CapacityWiseTableDetails, index: number) => {
                        return <div key={index}>
                            <span className="font-semibold">{item.total_capacity}</span>
                        </div>
                    })}
                </div>


                <div>
                    <p className="my-2 font-semibold text-gray-400">Available</p>
                    {capacityWiseTable.sort((a, b) => a.total_capacity - b.total_capacity).map((item: CapacityWiseTableDetails, index: number) => {
                        return <div key={index}>
                            <span className="font-semibold text-end w-full float-end">{item.tableCount}</span>
                        </div>
                    })}
                </div>

            </div>
            <div className="flex justify-between">
                <p className="my-2 font-semibold text-gray-400">Total Capacity</p>
                <p className="my-2 font-semibold">{capacityWiseTable.reduce((sum, item) => sum + (item.total_capacity * item.tableCount), 0)}</p>
            </div>
            <div className="mt-2">
                <button className="bg-primary p-2 font-semibold text-white w-full rounded-md hover:cursor-pointer" onClick={() => handleBooking()}>
                    Book Now
                </button>
            </div>
        </div>
    )
}
