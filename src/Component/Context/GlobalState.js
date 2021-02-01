import React, { createContext, useReducer, useState } from "react"
import { } from "./AppReducer"

const initState = {
  students: [
    { id: 1, name: "peter" }
    { id: 1, name: "bucky" }
    { id: 1, name: "ndidi" }
    { id: 1, name: "ubani" }
  ],
}


export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {




}