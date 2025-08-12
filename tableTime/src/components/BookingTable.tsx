import { IoChevronBackOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

export const BookingTable = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-between">
        <button><IoChevronBackOutline className="w-7 h-7" onClick={() => navigate('/restaurants/123')} /></button>
        <div className="text-start w-full">
          <h1 className="text-2xl font-semibold text-center my-3">The Dining Room</h1>
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-between font-semibold my-1 mx-3">
          <p className="text-gray-400">Cuisine</p>
          <p>Japanese</p>
        </div>
        <div className="flex justify-between font-semibold my-1 mx-3">
          <p className="text-gray-400">Number Of Guests</p>
          <p>4</p>
        </div>
      </div>
      <div>
      </div>
      <form className="flex flex-col gap-6 mx-3">
        <div className="flex flex-col w-full">
          <label htmlFor="firstName" className="text-xl my-2">First Name</label>
          <input type="text" name="firstName" className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lastName" className="text-xl my-2">Last Name</label>
          <input type="text" name="lastName" className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="phoneNumber" className="text-xl my-2">Phone Number</label>
          <input type="number"  name="phoneNumber" className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="expectedArrivalTime" className="text-xl my-2">Expected Arrival Time</label>
          <input type="time" name="expectedArrivalTime" className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="totalGuests" className="text-xl my-2">Number of Guests</label>
          <input type="number" name="totalGuests" className="p-2 border rounded-md" />
        </div>
        <div className='flex justify-center '>
          <button className=' bg-primary rounded-md font-semibold text-xl text-white py-2 px-2 w-full'>Confirm & Pay $190</button>
        </div>
      </form>
    </div>
  )
}
