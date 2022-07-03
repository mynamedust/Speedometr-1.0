import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IconsContext from './context';

function Main() {

  const [iconsState, setIcons] = useState(['grey', 'grey', 'grey', 'grey']);

  return (
    <React.StrictMode>
      <IconsContext.Provider value={{ iconsState, setIcons }}>
        <App />
      </IconsContext.Provider>
    </React.StrictMode>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
