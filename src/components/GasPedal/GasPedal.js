import styles from './GasPedal.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import RangeSlider from 'react-range-slider-input';
import 'range-slider-input/dist/style.css';





export const GasPedal = ({ updateSpeed, maxSpeed, updatePetrol }) => {
    const [gas, setGas] = useState('false');
    const [d, setD] = useState(0);
    const [petrol, setPetrol] = useState([22, 100])


    const variants = {
        hidden: { width: `${d}%` },
        visible: { width: `${d}%` }
    }


    const speedInt = (speed) => {
        let int;
        if (speed < 100) {
            int = 25;
        }
        else {
            int = speed / 3.5;
        }
        return int;
    }


    useEffect(() => {
        if (gas === 'true') {
            var interval = setInterval(() => {
                if (d < maxSpeed) setD(d => d + 1);
            }, speedInt(d));
            updateSpeed(d);
        }
        return () => {
            clearInterval(interval);
        };

    });

    useEffect(() => {
        if (gas === 'false') {
            var interval1 = setInterval(() => {
                if (d > 0) setD(d => d - 1);
            }, 40);
            updateSpeed(d);
        }
        return () => {
            clearInterval(interval1);
        };

    });

    const inputEl = useRef('');

    function onButtonClick() {
        setPetrol(inputEl.current.sliderValue.min)
        updatePetrol(inputEl.current.sliderValue.min)
    };

    return (
        <>
            <motion.div onMouseDown={() => setGas('true')} onMouseLeave={() => setGas('false')} onMouseUp={() => setGas('false')} class="rainbow">
                <h1 className='gasText'>GAS</h1>
                <div className='rain' style={{ width: `${d * 97.2 / maxSpeed}%` }}></div>
            </motion.div>
            <div className='sliderWrapper'>
                <RangeSlider
                    onThumbDragEnd={() => onButtonClick()}
                    id="single-thumb"
                    defaultValue={[0, 100]}
                    thumbsDisabled={[false, true]}
                    rangeSlideDisabled={true}
                    orientation='vertical'
                    ref={inputEl}
                />
            </div>
            <div class="wrapper">
                <div class="green">
                    <div class="progress">
                        <div class="inner">
                            <div class="water" style={{ top: `${petrol}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
} 