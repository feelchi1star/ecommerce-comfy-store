import React, { useState, useEffect, useContext } from "react";
import { Comp } from "./Contexts";

function Component3(props) {
  const { com } = useContext(Comp);

  return (
    <div>
      <p>Welcome {com}</p>
    </div>
  );
}

export default Component3;
