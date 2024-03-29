import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "../Store/Reducer"

export const store = createStore(Reducer, applyMiddleware(thunk))