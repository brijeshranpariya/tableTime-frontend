import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Login } from './components/Login'
import { RestaurantsList } from './components/RestaurantsList'
import { Restaurant } from './components/Restaurant'
import { Dashboard } from './components/Dashboard'
import { BookingTable } from './components/BookingTable'
import { MyBookings } from './components/MyBookings'
import { MyFavorite } from './components/MyFavorite'
import { CustomerAccount } from './components/CustomerAccount'
import { Home } from './components/Home'
import { SignUp } from './components/SignUp'
import { useEffect } from 'react'
import { getCookie } from './Utils/functions'
import { FoodList } from './components/FoodList'
function App() {
  const navigate = useNavigate()
  useEffect(() => {

    const token = getCookie("token")
    if (!token || token.length <= 0) {
      navigate('/')
    }
  }, [])
  return (
    <>
      <div className="h-full">
        <div className="h-full">
          {/* <Login /> */}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route index element={<Home />} />
            <Route path='/' element={<Dashboard />} >
              <Route path="/" element={<Navigate to="/restaurants" replace />} />
              <Route path='/restaurants' element={<RestaurantsList />} />
              <Route path='/restaurants/booking/:id' element={<BookingTable />} />
              <Route path='/my-bookings' element={<MyBookings />} />
              <Route path='restaurants/:id'>
                <Route index element={<Restaurant />} />  {/* optional default */}
                <Route path='food-list' element={<FoodList />} />
              </Route>
              <Route path='/my-favorite' element={<MyFavorite />} />
              <Route path='/my-account' element={<CustomerAccount />} />
              <Route path='/restaurants/:id/food-list' element={<FoodList />} />
            </Route>
          </Routes>
        </div>
      </div >

    </>
  )
}

export default App
