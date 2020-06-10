import React, { useState} from 'react';
import './Room.css'


function Room() {

    //   const state = useState(true);

    //   const isLit = state[0];
  //   const setLit = state[1];

  const [isLit, setLit] = useState(false);
  
  let [temp, setTemp] = useState(72);
//   console.log(state)
    function updateLit(){
        console.log("Button Clicked")
        setLit(!isLit)
    }
    
    function increaseTemp(){
        console.log("Increaseing Temperature")
        setTemp(++temp);
    }
    function decreaseTemp(){
      console.log("Decreasing Temperature")
      setTemp(--temp);
    }

  return(
    <div className={`room ${isLit? "lit": "dark"}`}> 
    
      <h1>This Room is  {isLit? "Lit":"Dark"}</h1>
      <br/>
      <button onClick={updateLit} className="lightButton">{isLit? "Turn Off":"Turn On"}</button>
      <br/>
      <h1>Temp: {temp}°F</h1> 
      <br/>
      <button onClick={increaseTemp} className="tempButton">+</button>
      <button onClick={decreaseTemp} className="tempButton">-</button>
        
      
    </div>
  );
}

export default Room;
