import { useState } from "react";
import withCalculate from "../utils/withCalculate";

function Button(props) {
  //   console.log({ props });
  return (
    <div>
      <h1>x+{props.counter}</h1>
      <p>hasil:{props.nomor}</p>
      <button onClick={props.handleNomor}>tambah</button>
    </div>
  );
}

export default withCalculate(Button);
