import { useState } from "react"
import { useDispatch } from "react-redux";
import { addtodo } from "../features/todoslice";


export default function Addform(){

    const [task,setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) =>{
        evt.preventDefault();
        console.log(task)
        dispatch(addtodo(task));
    }

    return(
        <>
        <form onSubmit={submitHandler}>
            <input type = "text" onChange={(e)=> setTask(e.target.value)}>
            </input>
            &nbsp;&nbsp;
            <button>Add task</button>
        </form>
        </>
    )
}