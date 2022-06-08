import {GET_MENU} from "../../store/actions/actionTypes";
import {configUrl} from "../../Helpers/configUrl";
import {axiosGet} from "../../Helpers/helpers";


const setMenu = (items) => {
  return {
    type: GET_MENU,
    payload: items
  }
}


export function getMenu() {
  return dispatch => {
    axiosGet(`${configUrl.baseUrl}/categories/0`)
      .then(res => {
        dispatch(setMenu(res.data))
    })
  }
}