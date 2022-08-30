import {
    STORAGE_REQUEST,
    STORAGE_SUCCESS,
    STORAGE_ERROR,
  } from "../Constants";
  
  const initialState = {
    loading: false,
    Storage:null,
    error: "",
  };
 
  const StorageData = (state = initialState, action) => {
    console.log(action.payload, 'token_get66699996dataCarwashlist')
    switch (action.type) {
      case STORAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case STORAGE_SUCCESS:
        return {
          loading: false,
          Storage: action.payload,
          error: "",
        };
      case STORAGE_ERROR:
        return {
          loader: false,
          Storage: null,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  
  
  export default StorageData;
  