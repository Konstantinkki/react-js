import {collection, getDoc, getDocs} from 'firebase/firestore';
import {db} from '../../config/firebase'
import {useState, useEffect} from 'react'
import { Postitem } from './postItem';
//import {db, auth} from '../ ../../ config/firebase'
//import {addDoc, collection} from 'firebase/firestore'

export interface Post {
    id:string;
    userId:string;
    title:string;
    username:string;
    description:string;
}
export const Main=()=>{
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setPostsList(data.docs.map((doc)=>({...doc.data(), id:doc.id})) as Post[]);
    }
    
    useEffect(() => {
        getPosts();
    }, []);


    return (
    <div>
        <div>Home Page</div>
        <div>{postsList?.map(post =>(<Postitem post={post}/>))}</div>    
    </div>
    
    )
}