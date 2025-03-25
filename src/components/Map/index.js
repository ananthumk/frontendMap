import React, { useEffect, useState } from 'react'
import { BackButton, MapWrapperContainer } from './StyledComponents'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from '../DashBoard/styledComponents';


function Map() {
  const {id} = useParams()
 
 
  const [mapLocation, setMapLocation] = useState({})
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const token = Cookies.get('token')

  const navigate = useNavigate()

  useEffect(() => {
      const fetchMapData = async () => {
        try{
          setIsLoading(true)
          setError(null)
          const response = await axios.get('https://backendmap-4.onrender.com/api/map', 
            {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": 'application/json'
            }
          })
          if(response.status === 200){
            setMapLocation(response.data.location[id-1])
          }
        } catch(err) {
          setError(err.response?.data?.message || 'Failed to load map data')
          console.error(err)
        } finally {
          setIsLoading(false)
        }
      }
      fetchMapData()
  }, [id, token])

  if (isLoading) return <LoaderContainer> <ThreeDots 
              height="80" 
              width="80" 
              color="#FFFFFF"
              ariaLabel="loading"
          /></LoaderContainer>
  if (error) return <div>Error: {error}</div>

  

  const customIcon = new Icon({
    iconUrl : require('../../mark-location.png'),
    iconSize: [ 38, 38]
  })
  const marker = {
    geocode: [ mapLocation?.place_coordinates?.lat || 20.4554, mapLocation?.place_coordinates?.lng || 78,2333],
    popUp: mapLocation?.address || 'Location name'
  }
  
  function BackButtonControl() {
    const map = useMap();
    
    return (
      <div className="leaflet-top leaflet-right" style={{ zIndex: 1000 }}>
        <div className="leaflet-control">
          <BackButton onClick={() => {navigate('/')}}>←</BackButton>
        </div>
      </div>
    );
  }
    
 
  return (
      <MapWrapperContainer>
        
        <MapContainer center= {[mapLocation?.location_coordinates?.ltd || 20.5937, mapLocation?.location_coordinates?.lng || 78.9629]}  zoom={5} style={{ height: '100vh', width: '100%' }} >
        
        {/* <TileLayer 
         attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        /> */}
        

         <TileLayer 
          attribution='Google Map' 
          // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        /> 
        
       
        
        <Marker position={marker.geocode} icon={customIcon} >
            <Popup>{marker.popUp}</Popup>
        </Marker>
        <BackButtonControl />
     </MapContainer>
      </MapWrapperContainer>
      
  )
}

export default Map
