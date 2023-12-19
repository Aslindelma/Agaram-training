import { increment,decrement,incrementByAmount } from "../../Reducers/counterSlice"


function Counting(){

    return(
        <>
        <h1>welcome to login page,{count}</h1>
        <button type="button" onClick={()=>dispatch(increment())}>increment</button>
        <button type="button" onClick={()=>dispatch(decrement())}>decrement</button>
        <button type="button" onClick={()=>dispatch(incrementByAmount(100))}>increment by amount</button>
        </>
    )
}

