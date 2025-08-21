import { useEffect, useState, type ChangeEvent } from 'react'
import { trackPromise } from 'react-promise-tracker'
import { fetchMenuItemsByIdService } from '../service/menuItemsService'
import type { menuItemDetail } from '../common/interface/interface'
import food from './../assets/food1.jpg'
import { IoChevronBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const FoodList = () => {
    const navigate = useNavigate()
    const [searchString, setSearchString] = useState<string>('')
    const [menuItems, setMenuItems] = useState<menuItemDetail[]>([])
    const [defaultItems, setDefaultItems] = useState<menuItemDetail[]>([])
    const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        console.log("search: ", value)
        setSearchString(value)
        let result: menuItemDetail[]
        if (value.trim().length > 0) {
            result = defaultItems.filter((item: menuItemDetail) => item.name.toLowerCase().includes(value))
            setMenuItems(result)
        } else {
            setMenuItems(defaultItems)
        }
    }
    const fetchMenuItemsById = async (id: string) => {
        const menuItems = await trackPromise(fetchMenuItemsByIdService(id))
        setMenuItems(menuItems)
        setDefaultItems(menuItems)
    }
    useEffect(() => {
        const id = window.location.pathname.split('/')[2]
        fetchMenuItemsById(id)
    }, [])
    return (
        <div className='mx-2 my-2'>
            <div className='flex w-full'>
                <button><IoChevronBackOutline className="w-7 h-7" onClick={() => {
                    const id = window.location.pathname.split('/')[2]
                    navigate(`/restaurants/${id}`)
                }} /></button>
                <div className='col-span-2 my-1 mx-2 w-full'>
                    <input onChange={(e) => handleChanges(e)} value={searchString} type="text" name="" id="" placeholder="Let's find delicious food for you" className='w-full rounded-md border border-gray-300 p-2' />
                </div>
            </div>
            <div className='pb-10 my-2'>
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
                    })) : <div className='text-center'>No Food Items Found</div>}
                </div>
            </div>
        </div>
    )
}
