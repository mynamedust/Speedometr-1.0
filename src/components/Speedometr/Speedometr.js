import styles from './Speedometr.module.css';
import { useState, useEffect } from 'react';
import { ReactComponent as GasIcon } from './gas.svg';
import cn from 'classnames';



export const Speedometr = ({ updateSpeed, maxSpeed, currentSpeed, currentPetrol }) => {

    function MyRound10(val) {
        return Math.round(val / 10) * 10;
    }

    let pt = [];
    let numDots = 41;
    for (let i = 0; i < numDots; i++) {
        pt.push(<div className='points' style={{ height: i % 5 == 0 ? '1.72vw' : ' 1.171875vw', '--i': i }}></div>)
    }

    let pt2 = [];
    let numDots2 = 21;
    for (let i = 0; i < numDots2; i++) {
        pt2.push(<div className='points2' style={{ height: i % 5 == 0 ? ' 0.52vw' : '0.26vw', '--i': i }}></div>)
    }


    let speed = [maxSpeed / 8, maxSpeed / 8 * 2,
    maxSpeed / 8 * 3, maxSpeed / 8 * 4, maxSpeed / 8 * 5,
    maxSpeed / 8 * 6, maxSpeed / 8 * 7, maxSpeed]


    return (
        <div className={cn(styles.wrapper, styles.flex)}>
            <span className={cn(styles.number, styles.zero)}>0</span>
            <span className={cn(styles.number, styles.one)}>{MyRound10(speed[0])}</span>
            <span className={cn(styles.number, styles.two)}>{MyRound10(speed[1])}</span>
            <span className={cn(styles.number, styles.three)}>{MyRound10(speed[2])}</span>
            <span className={cn(styles.number, styles.four)}>{MyRound10(speed[3])}</span>
            <span className={cn(styles.number, styles.five)}>{MyRound10(speed[4])}</span>
            <span className={cn(styles.number, styles.six)}>{MyRound10(speed[5])}</span>
            <span className={cn(styles.number, styles.seven)}>{MyRound10(speed[6])}</span>
            <span className={cn(styles.number, styles.eight)}>{MyRound10(speed[7])}</span>
            <div className={styles.linebox} style={{ transform: `rotate(${-120 + currentSpeed * 240 / maxSpeed}deg)` }}>
                <div className={styles.line}></div>
                <div className={styles.linecircle}></div>
            </div>
            <div className={cn(styles.circle, styles.flex)}>
                {pt}
            </div>
            <div className={styles.bottom}>
                <GasIcon className={styles.gasicon} />
                <div className={styles.linebox2} style={{ transform: `rotate(${120 + 120 * currentPetrol / 100}deg)` }}>
                    <div className={styles.line2}></div>
                </div>
                <span className={styles.empty}>0</span>
                <span className={styles.half}>1/2</span>
                <span className={styles.full}>1</span>
                <div className={styles.oilCircle}>
                    {pt2}
                </div>
            </div>
        </div >

    );
} 