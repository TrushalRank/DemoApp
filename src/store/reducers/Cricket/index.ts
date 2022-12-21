import {
  CALL_API_FAILURE,
  CALL_API_SUCCESS,
  REQUEST_CALL_API
} from '../../constant';

const initialState = {
  error: null,
  Loader: false,
  ResponseData: [],
};

export default function loginReducer(state = initialState, action:any) {
  switch (action.type) {
    case REQUEST_CALL_API:
      return {
        ...state,
        Loader: true
      };
    case CALL_API_SUCCESS:
      return {
        ...state,
        error: null,
        ResponseData: action.payload,
        userLoginLoader: false
      };
    case CALL_API_FAILURE:
      return {
        ...state,
        error: action.payload,
        userLoginLoader: false
      };
    default:
      return state;
  }
};
