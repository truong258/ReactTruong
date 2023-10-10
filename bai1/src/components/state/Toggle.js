//stateless functional component: component nhung khong su dung state
//statefull functional component: component co su dung state

import React, { useState } from "react";

function Toggle() {
  //enable state: useState(...)
  // initial state: useState(false)
  //reading state
  //update state

  //const array = useState(false);
  //console.log(array);

  //state change: component re-render cập nhật dom
  const [on, setOn] = useState(false);
  console.log(on);
  return (
    <div className="toggle" onClick={() => setOn(true)}>
      Toggle {on ? "On" : "Off"}
    </div>
  );
}

export default Toggle;
