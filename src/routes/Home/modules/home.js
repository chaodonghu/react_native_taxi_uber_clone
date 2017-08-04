import update from 'react-addons-update';
import constants from './actionConstants';
// Dimensions will give me the dimensions of the window
import { Dimensions } from 'react-native';
// ----------------------
// Constants
// ----------------------
const {
  GET_CURRENT_LOCATION,
  GET_INPUT,
  TOGGLE_SEARCH_RESULT
} = constants;

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

// ----------------------
// Actions
// ----------------------

// Get user's current location
export function getCurrentLocation(){
	return(dispatch)=>{
		navigator.geolocation.getCurrentPosition(
			(position)=>{
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload:position
				});
			},
			(error)=> console.log(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
		);
	}
}

// Get user's iput
export function getInputData(payload){
  return{
    type: GET_INPUT,
    payload: payload
  }
}

// Toggle search result modal
export function toggleSearchResult(payload){
  return{
    type: TOGGLE_SEARCH_RESULT,
    payload: payload
  }
}

// ----------------------
// Action Handlers
// ----------------------

// Handle get current location action
function handleGetCurrentLocation(state, action) {
  return update(state, {
    region: {
      latitude: {
        $set: action.payload.coords.latitude
      },
      longitude: {
        $set: action.payload.coords.longitude
      },
      latitudeDelta: {
        $set: LATITUDE_DELTA
      },
      longitudeDelta: {
        $set: LONGITUDE_DELTA
      },
    }
  })
}

// Handle get user's input
function handleGetInputData(state, action) {
  const { key, value } = action.payload
  return update(state, {
    inputData:{
      [key]:{
        $set: value
      }
    }
  });
}

// Handle toggle search result
// Handle get user's input
function handleToggleSearchResult(state, action) {
  if(action.payload === "pickup"){
    return update(state, {
      resultTypes:{
        pickup:{
          $set: true,
        },
        dropoff:{
          $set: false
        }
      }
    });
  }
  if(action.payload === "dropoff"){
    return update(state, {
      resultTypes:{
        pickUp:{
          $set: false,
        },
        dropoff:{
          $set: true
        }
      }
    });
  }
}

const ACTION_HANDLERS = {
  GET_CURRENT_LOCATION: handleGetCurrentLocation,
  GET_INPUT: handleGetInputData
}

const initialState = {
  region: {},
  inputData: {},
  resultTypes: {},
};

export function HomeReducer (state = initialState, action){
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state,action) : state;
}
