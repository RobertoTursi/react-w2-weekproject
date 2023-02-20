const initialState = {
    site:{
        location: "",
        lon: 0,
        lat: 0,
        locationObject: null,
        
    },
    // timing:{
    //     timeIndex:0
    // }
    arrayOfLocation: [],
    background: ""
    
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCH-LOCATION":
            return{
                //console.log(action.payload)
                ...state,
                site: {
                    ...state.site,
                    location: action.payload
                }
            }
        case "ADD-COORD":
            return{
                ...state,
                site: {
                    ...state.site,
                    lon: action.payload.lon,
                    lat: action.payload.lat,
                }
            }
        case "ADD-CITY":
            return{
                ...state,
                site:{
                    ...state.site,
                    locationObject: action.payload
                }
            } 
        case "ADD-TO-ARRAY":
            return{
                ...state,
                arrayOfLocation: [...state.arrayOfLocation, action.payload]
            }    
        case "LOCATION-INDEX":
            return{
                ...state,
                arrayOfLocation: state.arrayOfLocation.filter((_, i) => i !== action.payload)
                }
        case "CHANGE-BACKGROUND":
            return{
                ...state,
                background: action.payload
            }
                
        
        // case "TIME++":
        //     return{
        //         ...state,
        //         timing: {
        //             ...state.timing,
        //             timeIndex: timeIndex + action.payload
        //         }
        //     }
        default:
            return state
    }
}

export default mainReducer