import axios from 'axios';
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addComment } from '../features/comments.slice';


export default function Form({ userData, getComments }) {
    const inputCom = useRef();
    const formRef = useRef();
    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const comment = {
            id: Math.floor() + 4,
            content: inputCom.current.value,
            createdAt: new Date(),
            score: 0,
            user: {
                image: userData.image,
                username: userData.username
            },
            replies: []
        }

        axios.post('http://localhost:5000/comments', comment).then((res) => {
            dispatch(addComment(res.data));
            dispatch(getComments());
            formRef.current.reset();
        })

    }



console.log(userData);


    return (
        <>
            {userData ? (
                <div className="form-container">
                <div className="form">
                    <div className="img-user"><img src={userData.image.png} alt={userData.username} /></div>
                    <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
                    <input type="text" placeholder="Add comment ..." ref={inputCom} />
                    <input className="input-btn" type="submit" value="Envoyer" />
                    </form>
                </div>
            </div>
                ) : (
                    <div>
                        <h1>You must be logged in to comment</h1>
                    </div>
                )}
            
        </>
    )
}
