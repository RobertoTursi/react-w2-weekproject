import { useSelector } from "react-redux"
import {  Col, Row } from "react-bootstrap"
import SingleLocation from "./SingleLocation"

const Home = () => {
    // const dispatch = useDispatch()
    const arrayOfLocation = useSelector((state) => state.arrayOfLocation)
    
    return(
        <>
        {arrayOfLocation.length === 0 && <h2>Ancora niente da mostrare</h2>}

        {arrayOfLocation.length > 0 && arrayOfLocation.map((location, i) => (
            <Row key={i}>
                <Col>
                    <SingleLocation location={location}/>
                    
                </Col>
                {/* <Col>
                    <Button variant="danger" onClick={() => {
                        dispatch({
                            type: "LOCATION-INDEX",
                            payload: i
                        })
                    }}>
                        delete
                    </Button>
                </Col> */}
            </Row>

        ))}
        </>
    )
}

export default Home