
import React from "react";
// import axios from "axios";
import {
    STORAGE_REQUEST,
    STORAGE_SUCCESS,
    STORAGE_ERROR,IMAGE_SAVE_REQUEST,IMAGE_SAVE_SUCCESS,IMAGE_SAVE_ERROR
  } from "../Constants";
const CarwashRequest = () => {
  return {
    type: STORAGE_REQUEST,
  };
};

const CarwashSuccess = (Storage) => {
  return {
    type: STORAGE_SUCCESS,
    payload: Storage,
  };
};
const CarwashError = (error) => {
  return {
    type: STORAGE_ERROR,
    payload: error,
  };
};


const ImageRequest = () => {
  return {
    type: IMAGE_SAVE_REQUEST,
  };
};

const ImageSuccess = (ImageData) => {
  return {
    type: IMAGE_SAVE_SUCCESS,
    payload: ImageData,
  };
};
const ImageError = (error) => {
  return {
    type: IMAGE_SAVE_ERROR,
    payload: error,
  };
};
export const Fetchdata = (data) => {
    console.log(data, 'token_get66699996data')
    return (dispatch) => {
      dispatch(CarwashRequest());
  if(data){
    const Carwashlist = data;
    console.log(Carwashlist, 'token_get66699996dataCarwashlist')
    dispatch(CarwashSuccess(Carwashlist));
  }
    }
}


export const imagedata = (data) => {
  console.log(data, 'ImageDataImageDataImageData')
  return (dispatch) => {
    dispatch(ImageRequest());
if(data){
  const Imagelist = data;
  console.log(Imagelist, 'ImagelistImagelist')
  dispatch(ImageSuccess(Imagelist));
}
  }
}