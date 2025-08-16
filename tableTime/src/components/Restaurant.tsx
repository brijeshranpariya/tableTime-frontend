import { IoChevronBackOutline, IoLocationSharp } from 'react-icons/io5'
import food from './../assets/food1.jpg'
import r1 from './../assets/restaurantsList/r1.jpg'
import location from './../assets/location.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AvailableTableModal } from './AvailableTableModal'
import { getRestaurantById } from '../service/restaurantsService'
import type { menuItemDetail, RestaurantDetail } from './../common/interface/interface'
import { fetchMenuItemsByIdService } from '../service/menuItemsService'
export const Restaurant = () => {
    const navigate = useNavigate()
    const [restaurantDetail, setRestaurantDetail] = useState<RestaurantDetail>()
    const [menuItems, setMenuItems] = useState<menuItemDetail[]>([])
    const [showAvailableTable, setShowAvailableTable] = useState<boolean>(false)
    const fetchRestaurantDetailsById = async (id: string) => {
        const response = await getRestaurantById(id)
        setRestaurantDetail(response[0])
    }
    const fetchMenuItemsById = async (id: string) => {
        const menuItems = await fetchMenuItemsByIdService(id)
        setMenuItems(menuItems)
    }
    useEffect(() => {
        const id = window.location.pathname.split('/')[2]
        fetchRestaurantDetailsById(id)
        fetchMenuItemsById(id)
    }, [])

    if (restaurantDetail && Object.entries(restaurantDetail).length > 0) {
        return (
            <div className="h-full">
                {showAvailableTable && (<div className=' fixed w-full h-screen z-20 flex justify-center items-center' >
                    <div className='bg-black fixed w-full h-screen opacity-35'></div>
                    <AvailableTableModal close={() => {
                        setShowAvailableTable(false)
                        navigate('/restaurants/booking/123')
                    }} />
                </div>)}
                <div className="relative">
                    <button onClick={() => navigate('/restaurants')} className='absolute text-white flex text-xl gap-2 font-medium items-center my-4 ml-2 justify-center'><IoChevronBackOutline className='mt-1' /> Back</button>
                    <img src={r1} alt="" className="h-[20%] w-full object-cover" />
                    <p className="absolute bottom-4 left-4 text-2xl flex gap-2 items-center text-white font-semibold bg-black/40 px-4 py-2 rounded-lg">
                        <IoLocationSharp /> {restaurantDetail.restaurant_name}
                    </p>
                </div>

                <div className="mt-5 px-3">
                    <div className='flex justify-between text-lg'>
                        <p className='my-2 font-semibold text-gray-400'>Cuisine</p>
                        <p className='my-2 font-semibold'>{restaurantDetail.cuisine_type}</p>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <p className='my-2 font-semibold text-gray-400'>Price Range</p>
                        <p className='my-2 font-semibold'>${restaurantDetail.price_min}-${restaurantDetail.price_max}</p>
                    </div>
                    <div className='flex justify-between text-lg items-center'>
                        <div>
                            <p className='my-2 font-semibold text-gray-400'>Address</p>
                            <p className='my-2 font-semibold flex-wrap w-[40%]'>{restaurantDetail.address}</p>
                        </div>
                        <img src={location} alt="" className='h-[20%] w-[20%] hover:cursor-pointer' />
                    </div>
                    <div className='flex justify-between text-lg'>
                        <p className='my-2 font-semibold text-gray-400'>Phone</p>
                        <p className='my-2 font-semibold'>{restaurantDetail.phone_number}</p>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <p className='my-2 font-semibold text-gray-400'>Email</p>
                        <p className='my-2 font-semibold'>{restaurantDetail.email}</p>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <p className='my-2 font-semibold text-gray-400'>FOODS</p>
                        <p className='my-2 font-medium text-primary hover:cursor-pointer'>See More</p>
                    </div>
                    <div className='pb-10'>
                        <div className='flex flex-col gap-2'>
                            {(menuItems && menuItems.length > 0) ? (menuItems.map((item: menuItemDetail) => {
                                return <div key={item.menu_item_id}>
                                    <div className='border flex shadow-lg p-1 rounded-md'>
                                        <img src={food} alt="" className='object-cover rounded-md aspect-square w-[20%] h-[20%]' />
                                        <div className='mx-2 mt-1 font-semibold w-full'>
                                            <div className='flex justify-between'>
                                                <p>{item.name}</p>
                                                <p>${item.price}</p>
                                            </div>
                                            <p className='text-gray-400 '>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            })) : <div>No Food Items Found</div>}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => setShowAvailableTable(true)} className='fixed bg-primary rounded-md font-semibold text-xl text-white py-2 px-2 bottom-4 w-[80%]'>Check Available Table</button>
                </div>
            </div>
        )
    } else {
        return <div>No Detailes Found</div>
    }
}
