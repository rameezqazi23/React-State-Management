import React, { useState} from 'react';
import './Room.css'


function Room() {

    //   const state = useState(true);

    //   const isLit = state[0];
  //   const setLit = state[1];

  const [isLit, setLit] = useState(false);
  let [age, setAge] = useState(25);
//   console.log(state)
    function updateLit(){
        console.log("Button Clicked")
        setLit(!isLit)
    }
    function increaseAge(){
        console.log("Age button clicked")
        setAge(++age);
    }

  return(
    <div className={`room ${isLit? "lit": "dark"}`}> 
    
      This Room is  {isLit? "Lit":"Dark"}
      <br/>
      Age: {age}
      <br/>
      <button onClick={updateLit}>Toggle Light</button>
      <br/>
      <button onClick={increaseAge}>Increase Age</button>
        
      
    </div>
  );
}

export default Room;
