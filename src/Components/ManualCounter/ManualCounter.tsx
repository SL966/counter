import React, {useState} from 'react';
import VisualMonualCounter from "./VisualMonualCounter";
import s from "./App.module.css";

const ManualCounter = () => {

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
            <VisualMonualCounter
                count={count}
                handCount1={handCount1}
                reset={reset}

            />
        </div>
    );
};

export default ManualCounter;