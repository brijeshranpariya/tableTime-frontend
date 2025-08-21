import { IoChevronBackOutline, IoLocationSharp } from 'react-icons/io5'
import food from './../assets/food1.jpg'
import r1 from './../assets/restaurantsList/r1.jpg'
import location from './../assets/location.png'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { useEffect, useState, type SetStateAction } from 'react'
import { AvailableTableModal } from './AvailableTableModal'
import { getRestaurantById } from '../service/restaurantsService'
import type { AvailableTableDetails, CapacityWiseTableDetails, menuItemDetail, RestaurantDetail } from './../common/interface/interface'
import { fetchMenuItemsByIdService } from '../service/menuItemsService'
import { getAvailableTableDetailsById } from '../service/restaurantTableService'
import { trackPromise } from 'react-promise-tracker'
type ContextType = {
    setRestaurantData: React.Dispatch<SetStateAction<RestaurantDetail>>
    setCapacityWiseTable: React.Dispatch<SetStateAction<CapacityWiseTableDetails[]>>
    setAvailableTable: React.Dispatch<SetStateAction<AvailableTableDetails[]>>
    availableTable: AvailableTableDetails[]
}
export const Restaurant = () => {
    const navigate = useNavigate()
    const { setRestaurantData, setCapacityWiseTable, setAvailableTable, availableTable } = useOutletContext<ContextType>()
    const [restaurantDetail, setRestaurantDetail] = useState<RestaurantDetail>()
    const [menuItems, setMenuItems] = useState<menuItemDetail[]>([])
    const [showAvailableTable, setShowAvailableTable] = useState<boolean>(false)
    const [totalTables, setTotalTables] = useState<number>()

    const fetchRestaurantDetailsById = async (id: string) => {
        const response = await getRestaurantById(id)
        setRestaurantDetail(response[0])
        setRestaurantData(response[0])
    }
    const fetchMenuItemsById = async (id: string) => {
        const menuItems = await trackPromise(fetchMenuItemsByIdService(id))
        setMenuItems(menuItems)
    }
    const fetchAvailableTableData = async () => {
        const id = window.location.pathname.split('/')[2]
        const response = await trackPromise(getAvailableTableDetailsById(id))
        console.log("response:", response)
        const capacityWiseTableDetails = response.capacityWiseTableDetails
        setCapacityWiseTable(() => capacityWiseTableDetails)
        const totalTables = response.total_tables
        const availableTableDetails = response.availableTableDetails
        setTotalTables(totalTables)
        setAvailableTable(availableTableDetails)
        setShowAvailableTable(true)
    }
    useEffect(() => {
        const id = window.location.pathname.split('/')[2]
        fetchRestaurantDetailsById(id)
        fetchMenuItemsById(id)
    }, [])

    if (restaurantDetail && Object.entries(restaurantDetail).length > 0) {
        return (
            <div className="h-full">
                {showAvailableTable && totalTables && (<div className=' fixed w-full h-screen z-20 flex justify-center items-center' >
                    <div className='bg-black fixed w-full h-screen opacity-35'></div>
                    <AvailableTableModal numOfAvailableTable={availableTable.length} totalTables={totalTables} close={() => {
                        setShowAvailableTable(false)
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
                        <p className='my-2 font-medium text-primary hover:cursor-pointer'><Link to={`/restaurants/${restaurantDetail.id}/food-list`}>See More</Link></p>
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
                    <button onClick={() => fetchAvailableTableData()} className='fixed bg-primary rounded-md font-semibold text-xl text-white py-2 px-2 bottom-4 w-[80%]'>Check Available Table</button>
                </div>
            </div>
        )
    }
}
