import React from 'react'
import { NavBarContainer, Heading, LogoutButton } from './styledComponents'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


function NavBar() {
  const navigate = useNavigate()
 
  const handleLogout = () => {
    console.log('Logout button clicked')
    Cookies.remove('token')
    navigate('/login')
  }

  return (
    <NavBarContainer>
        <Heading onClick={() => navigate('/')}>MapView</Heading>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </NavBarContainer>
  )
}

export default NavBar
