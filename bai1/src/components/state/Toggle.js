//stateless functional component: component nhung khong su dung state
//statefull functional component: component co su dung state

import React, { useState } from "react";

function Toggle() {
  //enable state: useState(...)
  // initial state: useState(false)
  //reading state
  //update state

  const array = useState(false);
  console.log(array);
  return <div className="toggle"></div>;
}

export default Toggle;
