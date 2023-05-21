import React from 'react';
import {AutoCounter} from "./Components/AutoCounter/AutoCounter";
import {ManualCounter} from "./Components/ManualCounter/ManualCounter";
import {Time} from "./Components/AutoCounter/Counter";


export function App() {
    const ManualCounterMemo = React.memo(AutoCounter)

    return (
        <div>
            <ManualCounterMemo/>
            <ManualCounter />
            <Time/>
        </div>
    )
}


export default App;