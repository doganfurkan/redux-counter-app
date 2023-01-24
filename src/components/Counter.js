import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { increase, decrease } from '../redux/Counter/counterSlice';

function Counter() {
    const countValue = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  return (
    <>
        <h1>{countValue}</h1>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
        <button onClick={() => dispatch(increase())}>Increase</button> 
    </>
  )
}

export default Counter