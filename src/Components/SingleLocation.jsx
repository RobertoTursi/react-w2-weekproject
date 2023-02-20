import { Card,Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const SingleLocation = (props) => {

    const dispatch = useDispatch()
    const locationObject = useSelector((state) => state.site.locationObject)
    const background = useSelector((state) => state.background)

    let [timeIndex, setTimeIndex] = useState(0)

    const addToCounter = () =>{
        if(timeIndex === locationObject.list.length-1){
         setTimeIndex(0)
         
        } else {
         setTimeIndex(timeIndex+1)
         console.log(timeIndex)
        }
    }

     if(props.location.list[timeIndex].weather[0].main === "Clouds"){
      dispatch({
        type: "CHANGE-BACKGROUND",
        payload: "sfondoNuvoloso"
      })
     } 
     else if(props.location.list[timeIndex].weather[0].main === "Clear"){
      dispatch({
        type: "CHANGE-BACKGROUND",
        payload: "sfondoSole"
      })
     } 
     else if(props.location.list[timeIndex].weather[0].main === "Rain"){
      dispatch({
        type: "CHANGE-BACKGROUND",
        payload: "sfondoPioggia"
      })
     } 
     else if(props.location.list[timeIndex].weather[0].main === "Snow"){
      dispatch({
        type: "CHANGE-BACKGROUND",
        payload: "sfondoNeve"
      })
     } 
     else if(props.location.list[timeIndex].weather[0].main === "Clouds"){
      dispatch({
        type: "CHANGE-BACKGROUND",
        payload: "sfondoNuvoloso"
      })
     } 

    return(
        <>
    {props.location && 
    <div className="cardDiv">
          <div className="weatherDiv">
            <div className="divGradi">
            <span className="gradi">{Math.round(props.location.list[timeIndex].main.temp - 273,15) + "°"}</span>
              <div className={background} /> 
              
            </div>
              <div>
              <h4 className="locationTitle">{props.location.city.name}</h4>
                {props.location.list[timeIndex].dt_txt.slice(11, 16)}
                
              </div>
              
              <div className="buttonDiv">
                <Button variant="primary" onClick={addToCounter}>
                    next 3h
                </Button>
                
                <Button variant="danger" onClick={() => {
                    dispatch({
                        type: "ADD-TO-ARRAY",
                        payload: props.location
                    })
                }}
                >Salva</Button>
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