import React, {useState} from "react";
import s from "../../App.module.css";
import {VisualAutoCounter} from "./VisualAutoCounter";





 function AutoCounter() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        let i = 0;

        let id = setInterval(function () {
            i++;
            if (i > 5) {
                clearInterval(id);
            } else {
                setCounter(i);
            }
        }, 1000);
    }
    const  colorCountFinish  = counter === 5 ? s.red : s.black;

    const reset = () => setCounter(0)

    return (
        <VisualAutoCounter
            counter={counter}
            increment={increment}
            reset={reset}
            colorCountFinish={colorCountFinish}
        />

    )
}


export default AutoCounter;