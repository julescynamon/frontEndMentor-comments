import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "./features/comments.slice";
import { setUsers } from "./features/user.slice";
import Comments from "./components/Comments";
import Form from "./components/Form";


function App() {

	const dispatch = useDispatch();
    const commentsData = useSelector((state) => state.comments.comments);
    const userData = useSelector((state) => state.currentUser.currentUser);


	const getUsers = () => {
		axios
		.get("http://localhost:5000/currentUser")
		.then((res) => {
			dispatch(setUsers(res.data));
		})
		};

    const getComments = () => {
        axios
		.get("http://localhost:5000/comments")
		.then((res) => {
            dispatch(setComments(res.data));
        })
		
    }
	


    useEffect(() => {
		getUsers();
		getComments();
    }, [ ]);




	return (
		<>	
			<div>
				{commentsData?.map((com, id) => (
					<Comments key={id} com={com}/>
        		))}
				<Form userData={userData} getComments={getComments} />
			</div>
		</>
	);
}

export default App;
