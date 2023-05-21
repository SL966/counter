export interface InitialStateType {
    count: any | number;
    start: number;
    valueMax: number;
}

export const initialState = {
    count: localStorage.getItem('count') || "enter value end press `set`",
    start: Number(localStorage.getItem('start')) || 0,
    valueMax: Number(localStorage.getItem('valueMax')) || 0
};

export type ManualCountActionType =
    | ReturnType<typeof setCount>
    | ReturnType<typeof setStart>
    | ReturnType<typeof setValueMax>;

export const ManualCounterReducer = (
    state = initialState,
    action: ManualCountActionType
): InitialStateType => {
    switch (action.type) {
        case "SET-COUNT":
            return {
                ...state,
                count: action.payload,
            };
        case "SET-START":
            return {
                ...state,
                start: action.payload,
            };
        case "SET-VALUE-MAX":
            return {
                ...state,
                valueMax: action.payload,
            };
        default:
            return state;
    }
};

export const setCount = (count: any | number) => ({
    type: "SET-COUNT",
    payload: count,
});

export const setStart = (start: number) => ({
    type: "SET-START",
    payload: start,
});

export const setValueMax = (valueMax: number) => ({
    type: "SET-VALUE-MAX",
    payload: valueMax,
});
