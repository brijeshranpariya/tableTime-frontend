import { FaStar } from 'react-icons/fa'
import r1 from './../assets/restaurantsList/r1.jpg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchRestaurantListService } from '../service/restaurantsService'
import type { RestaurantDetail } from '../common/interface/interface'
export const RestaurantsList = () => {
    const navigate = useNavigate()
    const [restaurantList, setRestaurantList] = useState<RestaurantDetail[]>([])
    const getRestaurantDetails = async () => {
        const response = await fetchRestaurantListService()
        setRestaurantList(response)
    }
    useEffect(() => {
        getRestaurantDetails()
    }, [])
    return (
        <div className='grid grid-cols-2 gap-2'>
            <div className='col-span-2 my-1 mx-2'>
                <input type="text" name="" id="" placeholder="Let's find restaurant for you" className='w-full rounded-md border border-gray-300 p-2' />
            </div>
            <div className='col-span-2 grid grid-cols-2'>
                {restaurantList.length > 0 ? (
                    restaurantList.map((restaurant) => {
                        return <div key={restaurant.id} className='border  shadow-lg rounded-md grid hover:cursor-pointer my-2 mx-1.5'>
                            <div>
                                <img src={r1} alt="" className='rounded-t-md object-cover aspect-square' />
                            </div>
                            <div className='flex flex-col gap-1.5 mx-2 my-1' onClick={() => navigate(`/restaurants/${restaurant.id}`)}>
                                <p className='text-lg'>{restaurant.restaurant_name}</p>
                                <p className='text-base'>{restaurant.cuisine_type}</p>
                                <p className='text-xl flex items-center gap-1'><FaStar color='#FFDF00' />{restaurant.rating_avg}</p>
                            </div>
                        </div>
                    })
                ) : (
                    <div></div>
                )}

            </div>
        </div>
        // </div>
    )
}
