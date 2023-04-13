import { useState } from 'react';
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile =() => {
    const {setUserName} = useContext(AppContext);
    const[newUserName, setNewUsaerName] = useState("");
    
    return (
        <div>
            <input onChange={(event)=>{
                setNewUsaerName(event.target.value)
            }}/>
            <button onClick={()=>{setUserName(newUserName)}}>Change User Name</button>
        </div>
    )
}