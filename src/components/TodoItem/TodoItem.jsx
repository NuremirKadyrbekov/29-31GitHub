import React, { useState } from "react";
import "./TodoItem.scss";
import done from "../../icons/done.png";
import del from "../../icons/del.png";

export default function TodoItem({ el }) {
  const [isOn, setIsOn] = useState(false);
  
  const doneClick = () => {

    setIsOn(!isOn);
  };
 
  return (
    <div className="todos">
      <div className="text" id="element" style={{isOn ? 'ON' : 'OFF'}}>{el.text}</div>

      <div className="icons">
        <img style={{ width: "25px", padding: "5px" }} src={del} alt="delete" />
        <img
          style={{ width: "25px", padding: "5px" }}
          src={done}
          onClick={doneClick}
          alt="done"
        />
      </div>
    </div>
  );
}
