import React, {useState} from "react";
import {VisualAutoCounter} from "./VisualAutoCounter";


export function AutoCounter() {
    const [counter, setCounter] = useState<any | number>('enter value end press `set`');
    const [val, setVal] = useState(0);
    const [valStart, setValStart] = useState(0);

    const setValueStart = () => {
        setCounter(valStart)
    }

    const increment = () => {
        let i = valStart;

        let id = setInterval(function () {
            i++;
            if (i > val) {
                clearInterval(id);
            } else {
                setCounter(i);
            }
        }, 1000);
    }

    const reset = () => setCounter('enter value end press `set`');

    const errorValue = () => {
        if (val <= valStart || val <= 0 || valStart < 0) {
            setCounter('incorrect value !')
        } else {
            setCounter('enter value end press `set`')
        }
    }


    const setNumber = ({target}: any) => {
        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        setVal(value);
    };

    const setNumberStart = ({target}: any) => {
        let {value, min, max} = target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        setValStart(value);
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


