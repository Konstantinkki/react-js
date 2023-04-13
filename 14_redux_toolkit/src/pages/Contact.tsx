import {useDispatch, useSelector} from 'react-redux'

export const Contact =()=>{
    const username = useSelector((state: any)=> state.user.value.username)

    return (
        <h1>Contact Page for user {username}</h1>
    )
}