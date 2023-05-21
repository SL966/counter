

export interface InitialStateType {
    counter: any | number;
    valStart: number;
    val: number;
}

const initialState = {
    valStart: Number(localStorage.getItem("valStart")) || 0,
    counter: localStorage.getItem("counter") || 'enter value end press `set`',
    val: Number(localStorage.getItem("val")) || 0,
};

export type AutoCountActionType =
    | ReturnType<typeof setValStart>
    | ReturnType<typeof setVal>
    | ReturnType<typeof setCounter>;

export const AutoCounterReducer = (state = initialState, action:AutoCountActionType)
    : InitialStateType => {
    switch (action.type) {
        case "SET_VAL_START":
            return { ...state, valStart: action.payload };
        case "SET_VAL":
            return { ...state, val: action.payload };
        case "SET_COUNTER":
            return { ...state, counter: action.payload };
        default:
            return state;
    }
}

export const setValStart = (valStart: number) => ({
    type: "SET_VAL_START",
    payload: valStart,
});

export const setVal = (val: number) => ({
    type: "SET_VAL",
    payload: val,
});

export const setCounter = (counter: any | number) => ({
    type: "SET_COUNTER",
    payload: counter,
});
