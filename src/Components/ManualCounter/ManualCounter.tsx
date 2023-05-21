import React, {useEffect} from 'react';
import {VisualManualCounter} from "./VisualManualCounter";
import s from "./ManualCounter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../State/Store";
import {InitialStateType, setCount, setStart, setValueMax} from "../State/ManualCounter-reducer";




    export const ManualCounter: React.FC = () => {
        const dispatch = useDispatch();
        const {count, start, valueMax} = useSelector<AppRootStateType,
            InitialStateType>(state => state.manualCounter);

    useEffect(() => {
        localStorage.setItem("count", count.toString());
        localStorage.setItem("start", start.toString());
        localStorage.setItem("valueMax", valueMax.toString());

    }, [count, start, valueMax]);

    const setValueStart = () => {
        dispatch(setCount(start))
    }

    const errorValue = () => {
        if (valueMax <= start || valueMax <= 0 || start < 0) {
            dispatch(setCount('incorrect value !'))
        } else {
            dispatch(setCount('enter value end press `set`'))
        }
    }

    const countPlus = () => {
        dispatch(setCount(Number(count) + 1));
        if (Number(count) === valueMax) {
            dispatch(setCount(valueMax))
        }
    }

    const reset = () => {
        dispatch(setCount('enter value end press `set`'))
    }


    const startNumberCount = ({target}: any) => {
        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        dispatch(setStart(value));
    };

    const maxValueCounter = ({target}: any) => {
        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        dispatch(setValueMax(value));
    };

    let isButtonSetDisabled =
        start >= valueMax
        || Number(count) === valueMax
        || Number(count) > start
        || start < 0

    let isButtonIncrementDisabled =
        start >= valueMax
        || count === 'enter value end press `set`'
        || count === 'incorrect value !'
        || Number(count) === valueMax

    let isButtonResetDisabled =
        Number(count) < valueMax
        || count === 'incorrect value !'
        || count === 'enter value end press `set`'

    let errorValueInput =
        count === 'incorrect value !'

    let colorCountFinish = `${s.m_count} 
    ${Number(count) === valueMax ? s.red : s.black} 
    ${Number(count) === valueMax ? s.fontSize_300 : s.fontSize_200}`


    let errorValueInputColor = {
        background: errorValueInput
            ? 'lightpink' : ''
    }

    let colorCountFinishIncorrect = {
        color: errorValueInput
            ? 'red' : ''
    }

    return (
        <div>
            <VisualManualCounter
                count={count}
                setValueStart={setValueStart}
                reset={reset}
                startNumberCount={startNumberCount}
                countPlus={countPlus}
                start={start}
                maxValueCounter={maxValueCounter}
                valueMax={valueMax}
                errorValue={errorValue}
                isButtonSetDisabled={isButtonSetDisabled}
                isButtonIncrementDisabled={isButtonIncrementDisabled}
                isButtonResetDisabled={isButtonResetDisabled}
                colorCountFinish={colorCountFinish}
                errorValueInputColor={errorValueInputColor}
                colorCountFinishIncorrect={colorCountFinishIncorrect}
            />
        </div>
    );
};

