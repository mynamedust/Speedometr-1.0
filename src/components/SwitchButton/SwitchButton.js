import styles from './SwitchButton.module.css';
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import IconsContext from '../../context';


export const SwitchButton = ({ name, number }) => {

    const [isVisible, setVisible] = useState(false);
    const { iconsState, setIcons } = useContext(IconsContext);



    function changeIcon() {
        let copy = [];
        copy = iconsState.slice(0);
        isVisible ? copy[[number]] = 'grey' : copy[[number]] = 'white';
        setIcons(copy)
        console.log(iconsState);
        console.log(number)
    }



    const variants = {
        hidden: { width: '0px' },
        visible: { width: '100%' }
    }

    const variants1 = {
        hidden: {
            border: '2px solid rgb(92, 92, 92)',
            boxShadow: 'none'
        },
        visible: {
            border: '2px solid red',
            boxShadow: '0px 0px 10px rgb(219, 38, 38)'
        }
    }

    const variants2 = {
        hidden: {
            width: '0px',
            height: '0px'
        },
        visible: {
            width: '80%',
            height: '80%'
        }
    }

    const variants3 = {
        hidden: {
            color: 'white',
            textShadow: 'none'
        },
        visible: {
            color: 'red',
            textShadow: '0px 0px 15px rgb(219, 38, 38)'
        }
    }

    return (


        <div className={styles.row}>
            <motion.p className={styles.name}
                transition={{ ease: "easeInOut", duration: 0.5, delay: isVisible ? 1 : 0 }}
                animate={isVisible ? 'visible' : 'hidden'}
                variants={variants3}
            >{name}</motion.p>
            <div className={styles.lineDiv}>
                <motion.hr initial='hidden'
                    transition={{ ease: "easeInOut", duration: 0.7, delay: isVisible ? 0.3 : 0 }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={variants}

                    className={styles.line} />
            </div>
            <motion.button
                transition={{ ease: "easeInOut", duration: 0.2, delay: isVisible ? 0 : 0.7 }}
                animate={isVisible ? 'visible' : 'hidden'}
                variants={variants1}
                className={styles.button}
                onClick={() => {
                    setVisible(!isVisible);
                    changeIcon();
                }}
            >
                <motion.div
                    className={styles.circle}
                    transition={{ duration: 0.3, delay: isVisible ? 0 : 0.7 }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={variants2}
                ></motion.div>
            </motion.button>
        </div>




    );


} 