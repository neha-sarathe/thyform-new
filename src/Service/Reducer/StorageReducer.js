import {
    STORAGE_REQUEST,
    STORAGE_SUCCESS,
    STORAGE_ERROR,IMAGE_SAVE_REQUEST,IMAGE_SAVE_SUCCESS,IMAGE_SAVE_ERROR
  } from "../Constants";
  
  const initialState = {
    loading: false,
    Storage:null,
    error: "",
    ImageData:null
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
        case IMAGE_SAVE_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case IMAGE_SAVE_SUCCESS:
          return {
            loading: false,
            ImageData: action.payload,
            error: "",
          };
        case IMAGE_SAVE_ERROR:
          return {
            loader: false,
            ImageData: null,
            error: action.error,
          };
      default:
        return state;
    }
  };
  
  
  
  export default StorageData;
  