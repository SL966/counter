import React, {useState} from 'react';
import VisualManualCounter from "./VisualManualCounter";
import s from "../../App.module.css";

export const ManualCounter = () => {

    const [count, setCounter] = useState(0)

     const handCount1 = () => {
        // Counter state is incremented
        setCounter(count + 1)
        if (count === 5) {
            setCounter(5)
        }

    }
    const reset = () => {
        // Counter state is decremented
        setCounter(0)
    }

    return (
        <div>
            <VisualManualCounter
                count={count}
                handCount1={handCount1}
                reset={reset}
            />
        </div>
    );
};

export default ManualCounter;