import { setData } from '../Actions/Actions'

//  GET - Endpoint (fake enpoint)
const URL= 'https://api.mocki.io/v1/b043df5a'

export const reducer = (store = {}, action) => {
  switch (action.type) {

    case 'SET_DATA':
      return action.payLoad

    default:
      break;
  }
}

export const fetchDataParsed = () => async (dispatch, getState) => {
  const data = await fetch(URL).then(res => res.json())
  dispatch(setData(data))
}