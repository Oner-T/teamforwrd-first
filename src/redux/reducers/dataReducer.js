import { GET_DATA } from '../types'

const initialState = {
  data: [],
};

const request = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default request;
