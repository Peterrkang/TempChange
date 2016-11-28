import { FETCH_WEATHER } from '../actions/index'


export default function(state = [], action) {

  switch(action.type) {
    case FETCH_WEATHER:
    //always return new state dont manipulate state
      return state.concat([action.payload.data]);
  }


  return state;

}
