import { IoChevronBackOutline, IoLocationSharp } from 'react-icons/io5'
import food from './../assets/food1.jpg'
import r1 from './../assets/restaurantsList/r1.jpg'
import location from './../assets/location.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AvailableTableModal } from './AvailableTableModal'
export const Restaurant = () => {
    const navigate = useNavigate()
    const [showAvailableTable, setShowAvailableTable] = useState<boolean>(false)
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
                    <IoLocationSharp /> The Dining Room
                </p>
            </div>

            <div className="mt-5 px-3">
                <div className='flex justify-between text-lg'>
                    <p className='my-2 font-semibold text-gray-400'>Cuisine</p>
                    <p className='my-2 font-semibold'>Gujrati</p>
                </div>
                <div className='flex justify-between text-lg'>
                    <p className='my-2 font-semibold text-gray-400'>Price Range</p>
                    <p className='my-2 font-semibold'>$12-$100</p>
                </div>
                <div className='flex justify-between text-lg items-center'>
                    <div>
                        <p className='my-2 font-semibold text-gray-400'>Address</p>
                        <p className='my-2 font-semibold flex-wrap w-[40%]'>Umiya Chowk, 150 Feet Ring Road, Mavdi, Rajkot</p>
                    </div>
                    <img src={location} alt="" className='h-[20%] w-[20%] hover:cursor-pointer' />
                </div>
                <div className='flex justify-between text-lg'>
                    <p className='my-2 font-semibold text-gray-400'>Phone</p>
                    <p className='my-2 font-semibold'>+919989787678</p>
                </div>
                <div className='flex justify-between text-lg'>
                    <p className='my-2 font-semibold text-gray-400'>Email</p>
                    <p className='my-2 font-semibold'>dining.room@gmail.com</p>
                </div>
                <div className='flex justify-between text-lg'>
                    <p className='my-2 font-semibold text-gray-400'>FOODS</p>
                    <p className='my-2 font-medium text-primary hover:cursor-pointer'>See More</p>
                </div>
                <div className='pb-10'>
                    <div className='my-2'>
                        <div className='border flex shadow-lg p-1 rounded-md'>
                            <img src={food} alt="" className='object-cover rounded-md aspect-square w-[20%] h-[20%]' />
                            <div className='mx-2 font-semibold'>
                                <p>Veg. manchurian</p>
                                <p>$312</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div className='border flex shadow-lg p-1 rounded-md'>
                            <img src={food} alt="" className='object-cover rounded-md aspect-square w-[20%] h-[20%]' />
                            <div className='mx-2 font-semibold'>
                                <p>Veg. pulaw</p>
                                <p>$311</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className='border flex shadow-lg p-1 rounded-md'>
                            <img src={food} alt="" className='object-cover rounded-md aspect-square w-[20%] h-[20%]' />
                            <div className='mx-2 font-semibold'>
                                <p>Veg. pulaw</p>
                                <p>$311</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className='border flex shadow-lg p-1 rounded-md'>
                            <img src={food} alt="" className='object-cover rounded-md aspect-square w-[20%] h-[20%]' />
                            <div className='mx-2 font-semibold'>
                                <p>Veg. pulaw</p>
                                <p>$311</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setShowAvailableTable(true)} className='fixed bg-primary rounded-md font-semibold text-xl text-white py-2 px-2 bottom-4 w-[80%]'>Check Available Table</button>
            </div>
        </div>
    )
}
