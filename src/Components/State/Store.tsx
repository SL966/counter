import {ManualCounterReducer} from './ManualCounter-reducer';
import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import {AutoCounterReducer} from "./AutoCounter-reducer";


const rootReducer = combineReducers({
    manualCounter: ManualCounterReducer,
    autoCounter: AutoCounterReducer
})

export const store = configureStore({ reducer: rootReducer  });

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;