import React from 'react';

import AutoCounter from "./Components/AutoCounter/AutoCounter";
import ManualCounter from "./Components/ManualCounter/ManualCounter";


export function App() {
    return (
        <div>
            <AutoCounter/>;
            <ManualCounter/>;
        </div>
    )
}


export default App;