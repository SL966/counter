import React from 'react';
import s from "./ManualCounter.module.css";

type ManualCounterProps = {
    count: string | number
    setValueStart: () => void
    reset: () => void
    startNumberCount: (target: any) => void
    maxValueCounter: (target: any) => void
    start: string | number
    valueMax: string | number
    countPlus: () => void
    errorValue: () => void
    colorCountFinish: string
    isButtonSetDisabled: boolean
    isButtonIncrementDisabled: boolean
    isButtonResetDisabled: boolean
    errorValueInputColor: object
    colorCountFinishIncorrect: object

}

export const VisualManualCounter: React.FC<ManualCounterProps> = (
    {
        count,
        setValueStart,
        reset,
        startNumberCount,
        maxValueCounter,
        start,
        valueMax,
        countPlus,
        errorValue,
        isButtonSetDisabled,
        isButtonIncrementDisabled,
        isButtonResetDisabled,
        colorCountFinish,
        errorValueInputColor,
        colorCountFinishIncorrect,
    }) => {


    return (
        <div className={s.wrapper}>
            <div className={s.container_value}>
                <div className={s.container_input}>

                    <div className={s.box1_max_value}>max value :</div>
                    <input className={s.box2_input}
                           onClick={errorValue}
                           onChange={maxValueCounter}
                           value={valueMax}
                           style={errorValueInputColor} id="1"
                           type="number" min="-3" max="10"/>

                    <div className={s.box3_start_value}>start value :</div>
                    <input className={s.box4_input}
                           onClick={errorValue}
                           onChange={startNumberCount}
                           value={start}
                           style={errorValueInputColor} id="2"
                           type="number"
                           min="-3" max="10"/>

                </div>
                <div className={s.button_position}>
                    <button disabled={isButtonSetDisabled}
                            className={s.button_value}
                            onClick={setValueStart}>set
                    </button>
                </div>
            </div>
            <div className={s.m_style_container}>
                <div className={s.m_text}>
                    Manual counter
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                         alt={'logo'}
                         className={s.rotate}/>
                </div>
                <div className={colorCountFinish}
                     style={colorCountFinishIncorrect}
                >{count}</div>
                <div className={s.m_button}>
                    <button disabled={isButtonIncrementDisabled}
                            className={s.m_increment}
                            onClick={countPlus}>
                        inc
                    </button>
                    <button disabled={isButtonResetDisabled}
                            className={s.m_reset}
                            onClick={reset}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    );
};
