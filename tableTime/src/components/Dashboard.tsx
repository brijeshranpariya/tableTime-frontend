import { useState } from 'react'
import { FaCalendarAlt, FaHotel } from 'react-icons/fa'
import { IoMdPerson } from 'react-icons/io'
import { MdOutlineFavorite } from 'react-icons/md'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import type { AvailableTableDetails, CapacityWiseTableDetails, RestaurantDetail } from '../common/interface/interface'

export const Dashboard = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [availableTable, setAvailableTable] = useState<AvailableTableDetails[]>([])
    const [restaurantData, setRestaurantData] = useState<RestaurantDetail>()
    const [capacityWiseTable, setCapacityWiseTable] = useState<CapacityWiseTableDetails[]>([])
    const isRestaurantDetailPage = /^\/restaurants\/[a-zA-Z0-9]+$/.test(location.pathname);

    return (
        <div className='grid grid-rows-12 h-full' >
            {!isRestaurantDetailPage && <div className='row-span-1 shadow-xl border-b border-gray-400 rounded-b-3xl flex justify-center items-center'>
                <h3 className='text-primary text-2xl font-bold'>TableTime</h3>
            </div>}
            <div className={`${isRestaurantDetailPage ? '' : 'row-span-10 overflow-y-scroll  px-2 py-2'}`}>
                <Outlet context={{ setRestaurantData, restaurantData, setCapacityWiseTable, capacityWiseTable, setAvailableTable, availableTable }} />
            </div>
            {!isRestaurantDetailPage && <div className='border-t border-gray-400 row-span-1 text-primary rounded-t-3xl flex justify-around items-center' style={{ boxShadow: '0 -10px 15px -3px rgba(0,0,0,0.1), 0 -4px 6px -4px rgba(0,0,0,0.1)' }}>
                <div><FaHotel className='h-7 w-7' onClick={() => navigate('/restaurants')} /></div>
                <div><FaCalendarAlt className='h-7 w-7' onClick={() => navigate('/my-bookings')} /></div>
                <div><MdOutlineFavorite className='h-7 w-7' onClick={() => navigate('/my-favorite   ')} /></div>
                <div><IoMdPerson className='h-7 w-7' onClick={() => navigate('/my-account')} /></div>
            </div>}
        </div>
    )
}
