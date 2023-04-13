import {useState} from 'react'
import {login, logout} from "../store"
import {useDispatch, useSelector} from 'react-redux'

export const Login =()=>{
    const [newUserName, setNewUserName] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state: any)=> state.user.value.username)
    return (
        <div>
            <h1>Login Page user : {username}</h1>
            <input type="text" onChange={(e)=>{
                setNewUserName(e.target.value);
            }}></input>
            <button onClick={()=>dispatch(login({username:newUserName}))}>login</button>
            <button onClick={()=> dispatch(logout())}>logout</button>
        </div>
    )
}