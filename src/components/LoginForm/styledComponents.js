import styled from 'styled-components'
 
export const LoginFormContainer =  styled.div`
width: 100%; 
height:100vh; 
background-image:url('https://wallpapers.com/images/hd/high-resolution-black-engraved-world-map-pyo56wwejk8xj99x.jpg');
background-size: cover;
display: flex;
justify-content: center;
font-family: 'Roboto';
`

export const CardContainer = styled.div`
width: 380px; 
height: 400px;
border-radius: 7px; 
align-self: center;
background-color: #111;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media (max-width: 768px) {
    width: 80%;
    height: 300px;
}
`

export const Heading = styled.h1`
font-size: 23px;
line-height: 24px;
text-align: center;
font-weight: 700;
color:rgb(226, 223, 223);
`

export const FormContainer = styled.form`
width: 80%;
height: 50%;
`

export const InputContainers = styled.input`
width: 100%;
padding: 8px 12px 8px 12px;
background-color: #111;
color:#fff;
border: none;
outline: none;
margin-bottom: 10px;
margin-top: 10px;
font-size: 17px;
font-weight: 500;
`

export const Button = styled.button`
background-color: #A55B4B;
color: #FFF;
width: 108%;
padding: 8px 10px 8px 10px;
font-size: 16px;
font-weight: 600;
outline: none;
cursor: pointer;
border: none;
font-family: open sans-serif;
border-radius: 2px;
margin-top: 10px;
`

export const Paragraph = styled.div`
font-size: 17px;
font-weight: 700;
color: red; 
line-height: 24px;
padding-top: 10px;
`