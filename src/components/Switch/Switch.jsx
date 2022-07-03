import style from './switch.module.css';
import { useState, useEffect } from 'react';
import 'animate.css';
import cn from 'classnames';
import { SwitchButton } from '../SwitchButton/SwitchButton';
import IconsContext from '../../context';




export const Switch = () => {



    return (
        <IconsContext.Consumer>
            {({ iconsState, setIcons }) => (

                <div className={style.switch}>
                    <SwitchButton number={0} name='Seatbelt' />
                    <SwitchButton number={1} name='Doors' />
                    <SwitchButton number={2} name='Cruise Control' />
                    <SwitchButton number={3} name='Light' />



                </div>
            )}
        </IconsContext.Consumer>

    );
} 