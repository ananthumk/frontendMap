import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import  Cookies  from 'js-cookie'
import { Button, CardContainer, FormContainer, Heading, InputContainers, LoginFormContainer, Paragraph } from './styledComponents'
import axios from 'axios'

function LoginForm() {
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, SetErrorMsg] = useState('')
     
    const navigate = useNavigate()

    const loginSuccess = (token) => {
       Cookies.set('token', token, {expires: 30})
       navigate('/')
    }
     
    const loginFailure = (message) => {
       SetErrorMsg(message)
    }

    const handleSubmit = async (e) => {
       console.log('Login Button clicked')
       e.preventDefault() 
       const userDetails = { email, password}
       try{
        const response = await axios.post('https://backendmap-4.onrender.com/api/login', userDetails, {
            headers: { 'Content-Type': 'application/json'}
           })
    
           console.log(response)
           
           if(response.status === 200) {
              loginSuccess(response.data.token)
            } else {
             loginFailure(response.data.message)
           }
       } catch(err){
        console.log(`Login Error: ${err}`)
        loginFailure(err.response?.data?.message)
       }
       
    }

  return (
    <LoginFormContainer>
        <CardContainer>
            <Heading>Welcome Back!</Heading>
            <FormContainer onSubmit={handleSubmit}>
                <InputContainers 
                    type="email" 
                    placeholder="example@gmail.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value) }
                />
                <InputContainers 
                    type="password" 
                    placeholder='Enter your password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button type="submit">Login</Button>
                {errorMsg && <Paragraph>{errorMsg}</Paragraph>}
            </FormContainer>
        </CardContainer>
    </LoginFormContainer>
  )
}

export default LoginForm
