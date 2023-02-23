import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useLocation } from "react-router-dom"


const SingleLocation = (props) => {

    const dispatch = useDispatch()
    const locationObject = useSelector((state) => state.site.locationObject)
    const arrayOfLocation = useSelector((state) => state.arrayOfLocation)
    // const background = useSelector((state) => state.background)
    const windowLocation = useLocation()

    let [timeIndex, setTimeIndex] = useState(0)

    const addToCounter = () =>{
        if(timeIndex === locationObject.list.length-1){
         setTimeIndex(0)
         
        } else {
         setTimeIndex(timeIndex+1)
         console.log(timeIndex)
        }
    }

    const addToArray = () =>{
      
      if(arrayOfLocation.includes(props.location)){
        console.log("gia salvato")
      } else{
        dispatch({
          type: "ADD-TO-ARRAY",
          payload: props.location
        })
        console.log("non salvato")
      }
     
      
    }

    

     
    //  if(props.location.list[timeIndex].weather[0].main === "Clouds"){
    //   dispatch({
    //     type: "CHANGE-BACKGROUND",
    //     payload: "sfondoNuvoloso"
    //   })
    //  } 
    //  else if(props.location.list[timeIndex].weather[0].main === "Clear"){
    //   dispatch({
    //     type: "CHANGE-BACKGROUND",
    //     payload: "sfondoSole"
    //   })
    //  } 
    //  else if(props.location.list[timeIndex].weather[0].main === "Rain"){
    //   dispatch({
    //     type: "CHANGE-BACKGROUND",
    //     payload: "sfondoPioggia"
    //   })
    //  } 
    //  else if(props.location.list[timeIndex].weather[0].main === "Snow"){
    //   dispatch({
    //     type: "CHANGE-BACKGROUND",
    //     payload: "sfondoNeve"
    //   })
    //  } 
     
    return(
        <>
    {props.location && 
    <div className="cardDiv">
          <div className={`${windowLocation.pathname === "/" ? "homeWeatherDiv" : "weatherDiv"}`}>
            <div className="divGradi">
            <span className={windowLocation.pathname === "/" ? "" : "gradi"}>{Math.round(props.location.list[timeIndex].main.temp - 273,15) + "°"}</span>
              
              {/* <div className={props.location.list[timeIndex].weather[0].main.toLowerCase()}></div> */}
              {/* {windowLocation.pathname === "/ShowWeather" && <div className={background} />} */}
              <div className={`${windowLocation.pathname === "/" ? "homeIcon" : "icon"}
               ${props.location.list[timeIndex].weather[0].main.toLowerCase()}`} /> 
              
            </div>
              <div>
              <h4 className={windowLocation.pathname === "/" ? "" : "locationTitle"}>{props.location.city.name}</h4>
                {props.location.list[timeIndex].dt_txt.slice(11, 16)}
                
              </div>
              
              <div className="buttonDiv">
                {windowLocation.pathname === "/ShowWeather" && <Button variant="primary" onClick={addToCounter}>
                    next 3h
                </Button>}
                
                {windowLocation.pathname === "/ShowWeather" && <Button variant="danger" onClick={() => addToArray()}
                >Salva</Button>}
                {windowLocation.pathname === "/" && <Button variant="danger" onClick={() => {
                        dispatch({
                            type: "LOCATION-INDEX",
                            payload: props.location
                        })
                    }}>
                        delete
                    </Button>}
                {/* <Button variant="danger" onClick={() => {
                    dispatch({
                      type: "ADD-TO-ARRAY",
                      payload: props.location
                  })
                }}
                >Salva</Button> */}
              </div>
        </div>
    </div>}
    </>
    )

    // {props.location && <Card style={{ width: '18rem' }}>
    //   {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    //   <Card.Body className={background}>
    //   <Card.Title>
    //     <h4>{props.location.city.name}</h4>
    //     <span>{Math.round(props.location.list[timeIndex].main.temp - 273,15) + " gradi"}</span>
    //   </Card.Title>
    //     <Card.Text>
    //       {props.location.list[timeIndex].dt_txt}
          
    //     </Card.Text>
    //     <Card.Text>
        
          
    //     </Card.Text>
    //     <Button variant="primary" onClick={addToCounter}>
    //         next 3h
    //     </Button>
        
    //     <Button variant="danger" onClick={() => {
    //         dispatch({
    //             type: "ADD-TO-ARRAY",
    //             payload: props.location
    //         })
    //     }}
    //     >Salva</Button>
    //   </Card.Body>
    // </Card>}
    // </>
    // )
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //   <Card.Title>{locationObject.city.name}</Card.Title>
    //     <Card.Text>
    //       {locationObject.list[timeIndex].dt_txt}
    //     </Card.Text>
    //     <Button variant="primary" onClick={addToCounter}>
    //         Go somewhere
    //     </Button>
        
    //     <Button variant="danger" onClick={() => {
    //         dispatch({
    //             type: "ADD-TO-ARRAY",
    //             payload: locationObject
    //         })
    //     }}
    //     >Salva</Button>
    //   </Card.Body>
    // </Card>)
}

export default SingleLocation