//stateless functional component: component nhung khong su dung state
//statefull functional component: component co su dung state

import React, { useState } from "react";
import "./ToggleStyle.css";

function Toggle() {
  //enable state: useState(...)
  // initial state: useState(false)
  //reading state
  //update state

  //const array = useState(false);
  //console.log(array);

  //state change: component re-render cập nhật dom
  const [on, setOn] = useState(false);
  //console.log(on);
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* {on ? "On" : "Off"}
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-on" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
