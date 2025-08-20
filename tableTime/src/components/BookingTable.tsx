import { IoChevronBackOutline } from "react-icons/io5"
import { useNavigate, useOutletContext } from "react-router-dom"
import type { AvailableTableDetails, CapacityWiseTableDetails, RestaurantDetail, tableBookingFormData, tableBookingFormDataError } from "../common/interface/interface"
import { useState, type FormEvent } from "react"
import moment from 'moment';
import { findClosestGreater, isValidPhoneNumber } from "../Utils/functions";
import { toast } from "react-toastify";
type ContexType = {
  restaurantData: RestaurantDetail
  capacityWiseTable: CapacityWiseTableDetails[]
  availableTable: AvailableTableDetails[]
}
export const BookingTable = () => {
  const navigate = useNavigate()
  const { restaurantData, capacityWiseTable, availableTable } = useOutletContext<ContexType>()
  const [formData, setFormData] = useState<tableBookingFormData>({
    countryCode: "",
    phoneNumber: '',
    tableCapacity: 0,
    expectedArrivalTime: '',
    numberOfGuest: 0,
    additionalNote: ""
  })
  const [error, setError] = useState<tableBookingFormDataError>({
    phoneNumber: '',
    tableCapacity: '',
    expectedArrivalTime: '',
    numberOfGuest: "",
    additionalNotes: ""
  })
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isValidPhoneNumber(formData.countryCode, formData.phoneNumber)) {
      setError((prev) => ({
        ...prev,
        phoneNumber: "Invalid Phone Number"
      }))
    } else {
      setError((prev) => ({
        ...prev,
        phoneNumber: ""
      }))
    }
    console.log("formData: ", formData)
    toast.success("Payment Successfull!", {
      position: "top-center",
      autoClose: 3000
    })
    navigate('/my-bookings')
  }
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name == "numberOfGuest" && Number(value.trim()) > 0) {
      const isAvailable = availableTable.some((val) => Number(value) == val.total_capacity)
      const table = availableTable.find((val) => Number(value) == val.total_capacity)
      if (isAvailable == true && table) {
        console.log("availableTable1: ", table)
        setFormData((prev) => ({
          ...prev,
          [name]: Number(value),
          tableCapacity: table.total_capacity
        }))
      } else {
        const table = findClosestGreater(Number(value), availableTable)
        console.log("availableTable2:", table)
        if (table && table.length > 0) {
          setFormData((prev) => ({
            ...prev,
            [name]: Number(value),
            tableCapacity: table[0].total_capacity
          }))
        } else {
          toast.warning("This restaurant cannot accommodate your group size right now. Please try another restaurant.", {
            position: "top-center",
            autoClose: 4000
          })
        }
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }))
    }
  }
  return (
    <>

      <div className="my-3 mx-2">
        <div className="flex justify-between">
          <button><IoChevronBackOutline className="w-7 h-7" onClick={() => {
            const id = window.location.pathname.split('/')[3]
            navigate(`/restaurants/${id}`)
          }} /></button>
          <div className="text-start w-full">
            <h1 className="text-2xl font-semibold text-center my-3">Book Your Table</h1>
          </div>
        </div>
        <div className="my-2">
          <div className="flex justify-between font-semibold my-1 mx-3">
            <p className="text-gray-400">Restaurant</p>
            {restaurantData ? <p>{restaurantData.restaurant_name}</p> : <p>-</p>}
          </div>
          <div className="flex justify-between font-semibold my-1 mx-3">
            <p className="text-gray-400">Cuisine</p>
            {restaurantData ? <p>{restaurantData.cuisine_type}</p> : <p>-</p>}
          </div>
          <div className="flex justify-between mx-3">
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
          <div className="flex justify-between mx-3">
            <p className="my-2 font-semibold text-gray-400">Total Capacity</p>
            <p className="my-2 font-semibold">{capacityWiseTable.reduce((sum, item) => sum + (item.total_capacity * item.tableCount), 0)}</p>
          </div>
        </div>
        <div>
        </div>
        <hr />
        <form className="flex flex-col gap-6 mx-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="mt-2">
            <h1 className="text-2xl font-semibold text-center">Guest Details</h1>
            <div className="flex flex-col w-full">
              <label htmlFor="firstName" className="text-lg my-2">Full Name</label>
              <input type="text" name="firstName" className="p-2 border rounded-md" required />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phoneNumber" className="text-lg my-2">Phone Number</label>
              <div className="flex">
                <input type="text" onChange={(e) => handleChanges(e)} name="countryCode" className="p-2 w-[20%] border rounded-l-md" required />
                <input type="number" onChange={(e) => handleChanges(e)} name="phoneNumber" className="p-2 w-full border rounded-r-md" required />
              </div>
              {error.phoneNumber.length > 0 && <p className="text-red-500">{error.phoneNumber}</p>}
            </div>
          </div>
          <hr />
          <div>
            <h1 className="text-2xl font-semibold text-center">Reservation Details</h1>
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="date" className="text-lg my-2">Date</label>
                <input onChange={(e) => handleChanges(e)} type="date" name="date" className="p-2 border rounded-md" value={new Date().toISOString().split("T")[0]} disabled />
              </div>
              {/* <label htmlFor="expectedArrivalTime" className="text-lg my-2">Table Capacity</label>
            <select name="tableCapacity" className="p-2 border rounded-md" required onChange={(e) => handleChanges(e)}>
              <option value="">--Select Capacity--</option>
              {capacityWiseTable.map(({ total_capacity }, index: number) => {
                return <option key={index} value={total_capacity}>{total_capacity}</option>
              })}
            </select> */}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="expectedArrivalTime" className="text-lg my-2">Expected Arrival Time</label>
              <input type="time" onChange={(e) => handleChanges(e)} min={moment().add(7, 'minutes').format('HH:mm')
              } name="expectedArrivalTime" className="p-2 border rounded-md" required />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="numberOfGuest" className="text-lg my-2" >Number of Guests</label>
              <input type="number" onChange={(e) => handleChanges(e)} name="numberOfGuest" className="p-2 border rounded-md" required />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="additionalNote" className="text-lg my-2" >Additional Note</label>
              <textarea onChange={(e) => handleChanges(e)} name="additionalNote" className="p-2 border rounded-md" />
            </div>
          </div>
          <div className='flex justify-center '>
            <button
              disabled={Object.values(error).some((val) => val && val.length > 0)}
              className={`rounded-md font-semibold text-xl text-white py-2 px-2 w-full ${Object.values(error).some((val) => val && val.length > 0)
                ? 'bg-primary_disable'
                : 'bg-primary'
                }`}
            >
              Confirm & Pay $190
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
