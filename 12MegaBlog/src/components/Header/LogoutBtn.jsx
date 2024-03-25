import React from 'react'
import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import {logout} from "../../store/authSlice"

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        dispatch(logout())  
    }
  return (
    <div 
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick = {logoutHandler}
    >LogoutBtn</div>
  )
}

export default LogoutBtn