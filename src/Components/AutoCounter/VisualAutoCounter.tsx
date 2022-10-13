import React from 'react';
import s from './AutoCounter.module.css'


type VisualAutoCounterProps = {
    counter: number
    increment: () => void
    reset: () => void
    /*colorCountFinish: string*/
    set_number: (target: any) => void
    val: number
    setNumberStart: (target: any) => void
    valStart: number
    setValueStart: () => void
    isButtonSetDisabled: boolean
    isButtonIncrementDisabled: boolean
    isButtonResetDisabled: boolean
    errorValue: () => void
    colorCountFinish:object
}

export const VisualAutoCounter: React.FC<VisualAutoCounterProps> =
    ({
         counter,
         increment,
         reset,
         set_number,
         val,
         setNumberStart,
         valStart,
         setValueStart,
         isButtonSetDisabled,
         isButtonIncrementDisabled,
         isButtonResetDisabled,
         errorValue,
         colorCountFinish
     }) => {

        return (
            <div className={s.wrapper}>
                <div className={s.container_value}>
                    <div className={s.container_input}>

                        <div className={s.box1_max_value}>max value :</div>
                        <input className={s.box2_input}
                               onClick={errorValue}
                               onChange={set_number}
                               value={val}
                               id="1" type="number" min="0" max="10"/>

                        <div className={s.box3_start_value}>start value :</div>
                        <input className={s.box4_input}
                               onClick={errorValue}
                               onChange={setNumberStart}
                               value={valStart}
                               id="2" type="number" min="-3" max="10"/>

                    </div>
                    <div className={s.button_position}>
                        <button disabled={isButtonSetDisabled}
                                className={s.button_value}
                                onClick={setValueStart}>set
                        </button>
                    </div>
                </div>
                <div className={s.style_container}>
                    <div className={s.text}>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                             alt={'logo'}
                             className={s.rotate_double}
                             onClick={increment}/>
                        Auto counter
                    </div>
                    <div className={s.count}
                         style={colorCountFinish}> {counter} </div>
                    <div className={s.button}>
                        <button className={s.increment}
                                disabled={isButtonIncrementDisabled}
                                onClick={increment}> inc
                        </button>
                        <button disabled={isButtonResetDisabled}
                                className={s.reset}
                                onClick={reset}> reset
                        </button>
                    </div>
                </div>
            </div>
        );

    };
