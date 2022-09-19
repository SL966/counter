import React from 'react';
import s from './App.module.css'


type counterType = {
    count: number
    increment: () => void
    reset: () => void
    colorCountFinish: string
}


const Counter = (props: counterType) => {

    let  colorCountFinish  =  {color: props.count === 5  ? 'red' : 'black',}
    return (

        <div className={s.style_container}>
            <div className={s.text}>Авто Счетчик</div>
            <div  className={s.count} style={colorCountFinish}>{props.count} </div>
            <div className={s.button}>
                <button className={s.increment} onClick={() => {
                    props.increment()
                }}> inc
                </button>
                <button className={s.reset} onClick={() => {
                    props.reset()
                }}> res
                </button>
            </div>
        </div>

      );

};

export default Counter;