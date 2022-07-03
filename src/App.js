import './App.css';
import { ReactComponent as LightIcon } from './icons/headlight.svg';
import { ReactComponent as CruiseIcon } from './icons/cruise-control.svg';
import { ReactComponent as DoorIcon } from './icons/door.svg';
import { ReactComponent as BeltIcon } from './icons/belt.svg';
import { HpBar } from './components/HpBar/HpBar';
import { GasPedal } from './components';
import { useEffect, useState, useContext } from 'react';
import { Switch } from './components/Switch/Switch';
import { Speedometr } from './components/Speedometr/Speedometr';
import IconsContext from './context';

function App() {

  const maxSpeed = 270;
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [currentPetrol, setCurrentPetrol] = useState(0);


  const updateSpeed = (value) => {
    setCurrentSpeed(value);
  }

  const updatePetrol = (value) => {
    setCurrentPetrol(value);
  }

  const { iconsState, setIcons } = useContext(IconsContext);


  return (

    <div className="App">
      <header className="App-header">
        <GasPedal updateSpeed={updateSpeed} updatePetrol={updatePetrol} maxSpeed={maxSpeed} />
        <Switch />
        <HpBar />
        <BeltIcon style={{ fill: iconsState[0] }} className='belt' />
        <DoorIcon style={{ fill: iconsState[1] }} className='door' />
        <CruiseIcon style={{ fill: iconsState[2] }} className='cruise' />
        <LightIcon style={{ fill: iconsState[3] }} className='light' />
        <Speedometr currentPetrol={currentPetrol} currentSpeed={currentSpeed} maxSpeed={maxSpeed} />
      </header >
    </div >

  );

}


export default App;
