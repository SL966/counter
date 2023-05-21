import React, {useEffect} from "react";
import {VisualAutoCounter} from "./VisualAutoCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../State/Store";
import {InitialStateType, setCounter, setVal, setValStart} from "../State/AutoCounter-reducer";



export const AutoCounter:React.FC = () => {

    const dispatch = useDispatch();
    const {counter, val, valStart} = useSelector<AppRootStateType,
        InitialStateType>(state => state.autoCounter);

    useEffect(() => {
        localStorage.setItem("counter", counter);
        localStorage.setItem("val", val.toString());
        localStorage.setItem("valStart", valStart.toString());

    }, [counter, val, valStart]);

    const setValueStart = () => {
        dispatch(setCounter(valStart))
    }

    const increment = () => {
        let i = valStart;

        let id = setInterval(function () {
            i++;
            if (i > val) {
                clearInterval(id);
            } else {
                dispatch(setCounter(i));
            }
        }, 1000);
    }

    const reset = () => dispatch(setCounter('enter value end press `set`'));

    const errorValue = () => {
        if (val <= valStart || val <= 0 || valStart < 0) {
            dispatch(setCounter('incorrect value !'))
        } else {
            dispatch(setCounter('enter value end press `set`'))
        }
    }


    const setNumber = ({target}: any) => {
        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        dispatch(setVal(value));
    };

    const setNumberStart = ({target}: any) => {
        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        dispatch(setValStart(value));
    };

    let isButtonSetDisabled =
        valStart >= val
        || counter === val
        || counter > valStart
        || valStart < 0

    let isButtonIncrementDisabled =
        valStart >= val
        || counter === 'enter value end press `set`'
        || counter === 'incorrect value !'
        || counter === val
        || counter > valStart

    let isButtonResetDisabled =
        counter < val
        || counter === 'incorrect value !'
        || counter === 'enter value end press `set`'

    let colorCountFinish = {
        color: counter === val ? 'red' : 'black',
        fontSize: counter === val ? '300%' : '200%',
    };

    return (
        <VisualAutoCounter
            counter={counter}
            increment={increment}
            reset={reset}
            set_number={setNumber}
            val={val}
            setNumberStart={setNumberStart}
            valStart={valStart}
            setValueStart={setValueStart}
            isButtonSetDisabled={isButtonSetDisabled}
            isButtonIncrementDisabled={isButtonIncrementDisabled}
            isButtonResetDisabled={isButtonResetDisabled}
            errorValue={errorValue}
            colorCountFinish={colorCountFinish}
        />


    )
}


