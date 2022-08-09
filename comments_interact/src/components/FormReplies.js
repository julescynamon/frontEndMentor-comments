import axios from 'axios';
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { addReplies } from '../features/comments.slice';
import { timestampParser } from './Utils';


export default function FormReplies({ userData, com, getComments }) {
    const inputReplies = useRef();
    const formRef = useRef();
    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const replies = [
            ...com.replies, 
            {
            id: Math.random(),
            content: inputReplies.current.value,
            createdAt: timestampParser(Date.now()),
            score: 0,
            replyingTo: com.username,
            user: {
                image: userData.image,
                username: userData.username,
            }
        }
    ];

        axios.patch(`http://localhost:5000/comments/${com.id}`, {replies}).then((res) => {
            dispatch(addReplies([com.id, replies]));
            dispatch(getComments());
            formRef.reset();
        })

    }


    return (
        <>
            {userData ? (
                <div className="form-container">
                <div className="form">
                    <div className="img-user"><img src={userData.image.png} alt={userData.username} /></div>
                    <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
                    <input type="text" placeholder="Add comment ..." ref={inputReplies} />
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