
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import landingBg from './../assets/landingBg.jpg'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="text-3xl font-semibold h-screen flex flex-col items-center justify-center bg-secondary text-white"
      >
        <h1 className='fixed text-center w-full text-primary top-0 p-2 rounded-b-3xl bg-white'>TableTime</h1>
        <div className='text-left'>
          <p className='font-bold text-5xl w-[65%] px-2'>Book Your Table Before You Arrive</p><p className='text-lg px-2'>- Dine Without the Wait</p>
          <p className='text-sm my-3 px-2'><i>Discover the best restaurants and reserve your seat in seconds with TableTime.</i></p>
        </div>
        <div className='mt-2'>
          <button className='flex items-center gap-2'>
            Let's Book <IoArrowForwardCircleSharp className='mt-1.5 hover:cursor-pointer' onClick={()=>navigate('/sign-up')}/>
          </button>
        </div>
      </div>
    </>

  )
}
