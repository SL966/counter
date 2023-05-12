import React from 'react';
import s from './AutoCounter.module.css'


export const Time = () => {

    return (
        <div className={s.container}>
            <span className={s.toggle}>
               <input type="checkbox"/>
                <label className={s.label} data-off="Stop" data-on="Play"></label>
            </span>

        </div>
    )
}