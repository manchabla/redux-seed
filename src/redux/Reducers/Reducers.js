import { setData } from '../Actions/Actions'

export const reducer = (store = {}, action) => {
  switch (action.type) {

    case 'SET_DATA':
      return action.payLoad

    default:
      break;
  }
}

export const fetchDataParsed = () => async (dispatch, getState) => {
  const data = await fetch('https://api.mocki.io/v1/b043df5a').then(res => res.json())
  dispatch(setData(data))
}