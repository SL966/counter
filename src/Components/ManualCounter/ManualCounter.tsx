import React, {useState} from 'react';
import VisualManualCounter from "./VisualManualCounter";


export const ManualCounter = () => {

    const [count, setCounter] = useState(0)

     const handCount1 = () => {
        // VisualAutoCounter state is incremented
        setCounter(count + 1)
        if (count === 5) {
            setCounter(5)
        }

    }
    const reset = () => {
        // VisualAutoCounter state is decremented
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