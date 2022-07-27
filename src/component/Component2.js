import React, { useContext } from "react";
import { Comp } from "./Contexts";

function Component2() {
  const { com } = useContext(Comp);

  return (
    <div>
      <h1> My name is {com} </h1>
    </div>
  );
}
export default Component2;
