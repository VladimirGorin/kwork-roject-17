import {GET_MENU} from "../../store/actions/actionTypes";

const initialState = {
  menu: []
}

export default function commonReducer (state = initialState, action)  {
    switch (action.type) {

      case GET_MENU: {
        return {
          ...state,
          menu: action.payload
        }
      }

      default: {
        return state
      }
    }
}