import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        // TODO : 

        //let authVal = authStatus === true ? true : false
        if(authentication && authStatus !== authentication){   // true && false !== true ==> true && true ===> True
            navigate('/login') 
        }else if(!authentication && authStatus !== authentication){   // false && true !== true ===> false && false ===> True  
            navigate('/')
        }
        setLoader(false)
    },[authStatus, navigate, authentication])
  
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

