import { addDoc, getDocs, collection, query, where, deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../../config/firebase';
import { Post } from './main'


interface Props {
    post:Post
}

interface Like {
    likeId: string;
    userId: string;
  }

export const Postitem = (props:Props) =>{
    const { post } = props;
    const [user] = useAuthState(auth);
    const [likes, setLikes] = useState<Like[] | null>(null);

    const likesRef = collection(db, "likes")

    const likesDoc = query(likesRef,  where("postId", "==", post.id))

    const getLikes = async () =>{
       const data = await getDocs(likesDoc);
       //console.log(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
       setLikes(
        data.docs.map(doc => ({userId: doc.data().userId, likeId: doc.id}))
        );
    }

    const addLike = async () => {
        try { 

            const newDoc = await addDoc(likesRef, {
                userId: user?.uid,
                postId: post.id,
              });
              if (user) {
                setLikes((prev) =>
                  prev
                    ? [...prev, { userId: user.uid, likeId: newDoc.id }]
                    : [{ userId: user.uid, likeId: newDoc.id }]
                );
              }

        }catch (err){
            console.log(err)
        }
    }

    const removeLike = async () => {
        try { 

            const likeToDeleteQuery = query(
                likesRef,  
                where("postId", "==", post.id), 
                where ("userId", "==", user?.uid))

            const likeToDeleteData = await getDocs(likeToDeleteQuery);
            const likeId = likeToDeleteData.docs[0].id;
            const likeToDelete = doc(db, "likes", likeId )
            await deleteDoc(likeToDelete);
            if (user) {
                setLikes(
                  (prev) => prev && prev.filter((like) => like.likeId !== likeId)
                );
              }
            /*if(user){
                setLikes(prev => 
                prev ? [...prev, {userId:user.uid}] : [{userId:user.uid}])
            }*/

        }catch (err){
            console.log(err)
        }
    }

    const hasUserLiked = likes?.find((like)=>like.userId === user?.uid)

    useEffect(()=>{
        getLikes();
    }, [])

    return (
        <div>
            
            <div className="title"><h2>{post.title}</h2></div>
            <div className="body"><p>{post.description}</p></div>
            <div className="footer">
                <p>@{post.username}</p>
                <button onClick={hasUserLiked ? removeLike : addLike}>{hasUserLiked ? <>&#128078;</> : <>&#128077;</>}</button>
                {likes && <p>Likes: {likes?.length}</p>}
            </div>

        </div>
    )
}