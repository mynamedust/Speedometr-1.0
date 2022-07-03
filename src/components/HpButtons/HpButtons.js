import styles from './HpButtons.module.css';
import { ReactComponent as CarIcon } from './car.svg';
import { ReactComponent as BatIcon } from './bat.svg';
import { ReactComponent as HitIcon } from './hit.svg';
import GearIcon from './gear.png';
import WrenchIcon from './wrench.png';
import cn from 'classnames';
import { useState } from 'react';




export const HpButtons = ({ updateHp, hp }) => {

    const [currentHp, setHp] = useState(hp);
    const [hit, setHit] = useState(false)
    const [heal, setHeal] = useState(false)

    const hpChange = (action) => {
        if (action === 'heal' && currentHp < 0.9) {
            setHp(currentHp + 0.2);
            updateHp(currentHp + 0.2);
        }
        else if (action !== 'heal' && currentHp > 0.1) {
            setHp(currentHp - 0.2);
            updateHp(currentHp - 0.2);
        }
    }



    const handleHitClick = (action) => {
        setHit(action)
        console.log(hit)
    }

    const handleHealClick = (action) => {
        setHeal(action)
        console.log(heal)
    }

    return (

        < div className={styles.hpbuttons} >
            <button onClick={() => hpChange()}
                onMouseDown={() => handleHitClick(true)}
                onMouseLeave={() => handleHitClick(false)}
                onMouseUp={() => handleHitClick(false)}
                className={styles.damage} style={hit === true ? { background: '#e90c0c' } : { background: '#f75858' }}>
                <BatIcon className={cn(styles.bat, {
                    [styles.batOn]: hit === true
                })} />
                <HitIcon className={cn(styles.hit, {
                    [styles.hitOn]: hit === true
                })} />
                <HitIcon className={cn(styles.hit2, {
                    [styles.hitOn2]: hit === true
                })} />
                <CarIcon className={styles.car} />
            </button>
            <button style={heal === true ? { background: '#16ee16' } : { background: '#69e469' }}
                onClick={() => hpChange('heal')}
                onMouseDown={() => handleHealClick(true)}
                onMouseLeave={() => handleHealClick(false)}
                onMouseUp={() => handleHealClick(false)}
                className={cn(styles.damage, styles.heal)}>
                <div className={styles.repair}>
                    <div className={cn(styles.wrenchwrap, {
                        [styles.wrenchwrapOn]: heal === true
                    })}>
                        <img src={WrenchIcon} className={styles.wrench} alt='' />
                    </div>
                    <img src={GearIcon}
                        className={cn(styles.gear, {
                            [styles.gearOn]: heal === true
                        })}
                        alt='' />
                </div>
                <CarIcon className={styles.car} />
            </button>
        </div >
    );
} 