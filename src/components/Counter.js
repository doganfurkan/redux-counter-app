import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { increase, decrease, setValue} from '../redux/Counter/counterSlice';

function Counter() {
    const countValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  return (
    <>
        <h1>{countValue}</h1>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
        <button onClick={() => dispatch(increase())}>Increase</button> 
        <br /><br /><br />
        <input type="number" id="setvalue"/>
        <button onClick={() => dispatch(setValue(Number(document.getElementById("setvalue").value)))}>Set</button> 
    </>
  )
}

export default Counter