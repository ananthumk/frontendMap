import styled from 'styled-components'

export const NavBarContainer = styled.div`
width: 100%; 
background-color: #000;
height: 10vh; 
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
  height: 6vh;
}

`

export const Heading = styled.h1`
font-size: 28px;
color: #FFF; 
font-family:'Times New Roman', Times, serif;
font-weight: 800;
padding-left:20px;

@media (max-width: 768px) {
     font-size: 20px;
}

`

export const LogoutButton = styled.button`
background-color: #3C5B6F;
color: #FFF; 
margin-right: 20px;
font-size: 15px;
font-weight: 500;
padding:7px 20px 7px 20px;
outline: none;
border: none;
cursor: pointer;
font-family: cursive;
border-radius: 3px;

@media (max-width: 768px ) {
  padding : 4px 10px;
  font-size: 12px;
}

`