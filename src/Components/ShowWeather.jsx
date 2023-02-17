import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, Button } from "react-bootstrap"
import SingleLocation from "./SingleLocation"

const ShowWeather = () => {

    const dispatch = useDispatch()
    const location = useSelector((state) => state.site.location)
    // const [coord, setCoord] = useState()
    // const [locationWeather, setLocationWeather] = useState()
    let [timeIndex, setTimeIndex] = useState(0)
    const lon = useSelector((state) => state.site.lon)
    const lat = useSelector((state) => state.site.lat)
    const locationObject = useSelector((state) => state.site.locationObject)

    useEffect(() => {
        coordFetch()
    }, [location] )

    useEffect(() => {
        
        weatherFetch()
    }, [lon, lat] )

    const coordFetch = async () => {
        try {
            let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ location + '&APPID=ac0d63bdd1a6809f3b76fe3ea6f48a5a')
        if(response.ok) {
            console.log(location)
            let weatherData = await response.json()
            console.log(weatherData.coord.lat)
            dispatch(
                {
                type: "ADD-COORD",
                payload: weatherData.coord
            }
            
            )
            
        }
        } catch (error) {
            console.log("coord ", error)
        }
        
    }

    const weatherFetch = async () => {
        try {
            let resp = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+ lat + '&lon=' + lon + '&appid=ac0d63bdd1a6809f3b76fe3ea6f48a5a')
        if(resp.ok) {
            let weatherLocation = await resp.json()
            console.log(weatherLocation)
            dispatch(
                {
                    type: "ADD-CITY",
                    payload: weatherLocation
                }
            )
            
        }    
        } catch (error) {
            console.log("meteo", error)  
             
        }
        
    }

    return(
        <>
       {/*{{locationObject && <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>{locationObject.city.name}</Card.Title>
        <Card.Text>
          {locationObject.list[timeIndex].dt_txt}
        </Card.Text>
        <Button variant="primary" onClick={addToCounter}>
            Go somewhere
        </Button>
        
        <Button variant="danger">Salva</Button>
      </Card.Body>
    </Card>} }*/}

{locationObject && <SingleLocation location={locationObject}/>}
    </>
    )
}

export default ShowWeather