import React from 'react';
import s from "../../App.module.css";

type ManualCounter = {
    count: number
    handCount1: () => void
    reset: () => void

}


export const VisualManualCounter = (props: ManualCounter) => {

    let colorCountFinish = {
        color: props.count === 5 ? 'red' : 'black',
        fontSize: props.count === 5 ? '300%' : '200%',
    };

    return (
        <div className={s.mstyle_container}>
            <div className={s.mtext}>Ручной Счетчик</div>
            <div className={s.mcount} style={colorCountFinish}>{props.count}  </div>
            <div className={s.mbutton}>
                <button className={s.mincrement} onClick={() => {
                    props.handCount1()
                }}> inc
                </button>
                <button className={s.mreset} onClick={() => {
                    props.reset()
                }}> res
                </button>
            </div>
        </div>
    );
};

export default VisualManualCounter;