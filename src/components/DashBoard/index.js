import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import { Cards, CardsTitle, Count, DashBoardContainer, ListContainer, SubHeading, LocationCards, LocationImage, LocationContainer, MemberCount, LocationName, PlaceNames, WrapperContainer, LoaderContainer } from './styledComponents'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'

function DashBoard() {
   
  const [totalLocation, setTotalLocation] = useState('')
  const [activeLocation, setActiveLocation]  = useState(0)
  const [totalMember, setTotalMember] = useState(0)
  const [locations, setlocations] = useState([])
  const [isLoading, SetIsLoading] = useState(true)
  
    
   
  const token = Cookies.get('token')
  
  useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await axios.get('https://backendmap-4.onrender.com/api/dashBoard', 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": 'application/json'
                    }
                }
            )
            
            if(response.status === 200) {
                console.log(response.data)
                setTotalLocation(response.data?.cards?.length || 0)
                setlocations(response.data.cards)
                (response.data.cards.map(data => {
                   if( data.status === 'active' ) {
                    setActiveLocation(prevstate => prevstate + 1)
                   }
                   setTotalMember(prevstate => prevstate + data.team_member)
                 }
                ))
                SetIsLoading(false)
            }
            
        }catch(err) {
            console.error(err)
            SetIsLoading(false)
        }
    }
    fetchData()
  }, [])

  return (
    <WrapperContainer>
      <NavBar /> 
      { !isLoading && <DashBoardContainer>
        <SubHeading>DashBoard</SubHeading>
        <ListContainer>
            <Cards>
                <CardsTitle>Total Locations</CardsTitle>
                <Count>{totalLocation}</Count>
            </Cards>
            <Cards>
                <CardsTitle>Active Locations</CardsTitle>
                <Count>{activeLocation}</Count>
            </Cards>
            <Cards>
                <CardsTitle>Teams Members</CardsTitle>
                <Count>{totalMember}</Count>
            </Cards>
        </ListContainer>
        <SubHeading>Locations</SubHeading>
        <LocationContainer>

            {locations.length > 0 &&
                locations.map((location) => (
                    <Link style={{textDecoration: "none", cursor: "pointer"}} to={`/map/${location.id}`}>
                    <LocationCards key={location.id}>
                        <LocationImage src={location.image_url} alt={location.location} />
                        <LocationName>{location.location}</LocationName>
                        <PlaceNames>{location.place}</PlaceNames>
                        <MemberCount>{location.team_member} Team Members</MemberCount>
                    </LocationCards>
                    </Link>
                ))
              }
            
            
            
        </LocationContainer>

      </DashBoardContainer>}
      {isLoading && 
        <LoaderContainer>  
            <ThreeDots 
            height="80" 
            width="80" 
            color="#FFFFFF"
            ariaLabel="loading"
        />
        </LoaderContainer>
      }
    </WrapperContainer>
  )
}

export default DashBoard
