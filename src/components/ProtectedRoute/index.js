import React, {useEffect} from 'react'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({element}) {
    const navigate = useNavigate()
    const token = Cookies.get('token')

    useEffect(() => {
        if(!token){
            navigate('/login')
        }
    }, [token, navigate])    
    
    return token ? element : null 
}

export default ProtectedRoute
