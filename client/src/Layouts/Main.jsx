import { Outlet } from "react-router-dom"
import Navbar from '../components/common/Navbar'

const Main = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Main