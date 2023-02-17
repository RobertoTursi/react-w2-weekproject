import { Card,Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const SingleLocation = (props) => {

    const dispatch = useDispatch()
    const locationObject = useSelector((state) => state.site.locationObject)

    let [timeIndex, setTimeIndex] = useState(0)

    const addToCounter = () =>{
        if(timeIndex === locationObject.list.length-1){
         setTimeIndex(0)
         
        } else {
         setTimeIndex(timeIndex+1)
         console.log(timeIndex)
        }
    }

    return(
        <>
    {props.location && <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>{props.location.city.name}</Card.Title>
        <Card.Text>
          {props.location.list[timeIndex].dt_txt}
        </Card.Text>
        <Button variant="primary" onClick={addToCounter}>
            Go somewhere
        </Button>
        
        <Button variant="danger" onClick={() => {
            dispatch({
                type: "ADD-TO-ARRAY",
                payload: props.location
            })
        }}
        >Salva</Button>
      </Card.Body>
    </Card>}
    </>
    )
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