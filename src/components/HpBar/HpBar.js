import styles from './HpBar.module.css';
import { ReactComponent as Circle } from './circle.svg';
import { ReactComponent as EngineIcon } from './engine.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HpButtons } from '../HpButtons/HpButtons';
import { useState } from 'react';


export const HpBar = () => {
    const [hp, setHp] = useState(1);
    const screenWidth = window.screen.width;
    let color = 120 * hp - 20;
    const updateHp = (currentHp) => {
        setHp(currentHp);
    }

    return (

        <>
            <HpButtons updateHp={updateHp} hp={hp} />
            <div className={styles.hp}>
                <CircularProgressbar
                    value={hp}
                    circleRatio={0.2}
                    maxValue={1}
                    strokeWidth={3}
                    counterClockwise={true}
                    styles={buildStyles({
                        strokeLinecap: 'butt',


                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.2,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `hsl(${color}, 100%, 50%)`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                />
            </div>
            <EngineIcon className={styles.engine} />
        </>
    );
} 