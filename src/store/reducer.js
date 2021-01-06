import * as actionType from './action';
// import axios from 'axios';
// import fetch from './fetching';



const initialState = {
  cocktails: [],
  buttonShow: true
}


const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionType.FETCH_COCKTAILS:
      const newState = action.currentState;
      return {
        ...state,
        cocktails: newState
      }
    default:
      return state
  }
}

export default reducer;