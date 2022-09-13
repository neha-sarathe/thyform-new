
import React from "react";
// import axios from "axios";
import {
    STORAGE_REQUEST,
    STORAGE_SUCCESS,
    STORAGE_ERROR,
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
