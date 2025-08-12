import { FaStar } from 'react-icons/fa'
import r1 from './../assets/restaurantsList/r1.jpg'
import r2 from './../assets/restaurantsList/r2.jpg'
import r3 from './../assets/restaurantsList/r3.jpg'
import r4 from './../assets/restaurantsList/r4.jpg'
import { useNavigate } from 'react-router-dom'
export const RestaurantsList = () => {
    const navigate = useNavigate()
    return (
        <div className='grid grid-cols-2 gap-2'>
            <div className='col-span-2 my-1 mx-2'>
                <input type="text" name="" id="" placeholder="Let's find restaurant for you" className='w-full rounded-md border border-gray-200 p-2' />
            </div>
            <div className='border  shadow-lg rounded-md grid hover:cursor-pointer my-2 mx-1.5'>
                <div>
                    <img src={r1} alt="" className='rounded-t-md object-cover aspect-square' />
                </div>
                <div className='flex flex-col gap-1.5 mx-2 my-1' onClick={() => navigate('/restaurants/12a34')}>
                    <p className='text-lg'>The Dining Room</p>
                    <p className='text-base'>Italian</p>
                    <p className='text-xl flex items-center gap-1'><FaStar color='#FFDF00' /> 5</p>

                </div>
            </div>
            <div className='border  shadow-lg rounded-md grid hover:cursor-pointer my-2 mx-1.5'>
                <div>
                    <img src={r2} alt="" className='rounded-t-md  aspect-square' />
                </div>
                <div className='flex flex-col gap-1.5 mx-2 my-1'>
                    <p className='text-lg'>The Dining Room</p>
                    <p className='text-base'>Italian</p>
                    <p className='text-xl flex items-center gap-1'><FaStar color='#FFDF00' /> 5</p>

                </div>
            </div>
            <div className='border  shadow-lg rounded-md grid hover:cursor-pointer my-2 mx-1.5'>
                <div>
                    <img src={r3} alt="" className='rounded-t-md  aspect-square' />
                </div>
                <div className='flex flex-col gap-1.5 mx-2 my-1'>
                    <p className='text-lg'>The Dining Room</p>
                    <p className='text-base'>Italian</p>
                    <p className='text-xl flex items-center gap-1'><FaStar color='#FFDF00' /> 5</p>

                </div>
            </div>
            <div className='border  shadow-lg rounded-md grid hover:cursor-pointer my-2 mx-1.5'>
                <div>
                    <img src={r4} alt="" className='rounded-t-md  aspect-square' />
                </div>
                <div className='flex flex-col gap-1.5 mx-2 my-1'>
                    <p className='text-lg'>The Dining Room</p>
                    <p className='text-base'>Italian</p>
                    <p className='text-xl flex items-center gap-1'><FaStar color='#FFDF00' /> 5</p>

                </div>
            </div>
            <div className='border  shadow-lg rounded-md grid hover:cursor-pointer my-2 mx-1.5'>
                <div>
                    <img src={r4} alt="" className='rounded-t-md  aspect-square' />
                </div>
                <div className='flex flex-col gap-1.5 mx-2 my-1'>
                    <p className='text-lg'>The Dining Room</p>
                    <p className='text-base'>Italian</p>
                    <p className='text-xl flex items-center gap-1'><FaStar color='#FFDF00' /> 5</p>

                </div>
            </div>
            <div className='border  shadow-lg rounded-md grid hover:cursor-pointer my-2 mx-1.5'>
                <div>
                    <img src={r4} alt="" className='rounded-t-md  aspect-square' />
                </div>
                <div className='flex flex-col gap-1.5 mx-2 my-1'>
                    <p className='text-lg'>The Dining Room</p>
                    <p className='text-base'>Italian</p>
                    <p className='text-xl flex items-center gap-1'><FaStar color='#FFDF00' /> 5</p>

                </div>
            </div>
        </div>
        // </div>
    )
}
