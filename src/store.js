import { createStore , combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos } from "./todos/reducers";

const reducers = {todos};

const rootReducers = combineReducers(reducers);

//persistConfig is an object that tells reducer how to save and where to save
const persistConfig = {
    key: 'root',
    storage,
    //stateReconciler tells redux persist how to reconsile prev and current state 
    stateReconciler : autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducers);


export const configureStore = () => createStore(persistedReducer);