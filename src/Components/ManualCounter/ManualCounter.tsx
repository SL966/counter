import React, {useState} from 'react';
import {VisualManualCounter} from "./VisualManualCounter";
import s from "./ManualCounter.module.css";


export const ManualCounter = () => {

    const [count, setCounter] = useState<any | number>('enter value end press `set`');
    const [start, setStart] = useState<number>(0);
    const [valueMax, setValueMax] = useState<number>(0);

    const setValueStart = () => {
        setCounter(start)
    }

    const errorValue = () => {
        if (valueMax <= start || valueMax <= 0 || start < 0) {
            setCounter('incorrect value !')
        } else {
            setCounter('enter value end press `set`')
        }
    }

    const countPlus = () => {
        setCounter(count + 1);
        if (count === valueMax) {
            setCounter(valueMax)
        }
    }

    const reset = () => {
        setCounter('enter value end press `set`')
    }


    const startNumberCount = ({target}: any) => {
        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        setStart(value);
    };

    const maxValueCounter = ({target}: any) => {
        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        setValueMax(value);
    };

    let isButtonSetDisabled =
        start >= valueMax
        || count === valueMax
        || count > start
        || start < 0

    let isButtonIncrementDisabled =
        start >= valueMax
        || count === 'enter value end press `set`'
        || count === 'incorrect value !'
        || count === valueMax

    let isButtonResetDisabled =
        count < valueMax
        || count === 'incorrect value !'
        || count === 'enter value end press `set`'

    let errorValueInput =
        count === 'incorrect value !'

    let colorCountFinish = `${s.m_count} 
    ${count === valueMax ? s.red : s.black} 
    ${count === valueMax ? s.fontSize_300 : s.fontSize_200}`

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

