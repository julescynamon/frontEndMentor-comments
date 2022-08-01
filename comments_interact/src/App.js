import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setComments } from "./features/comments.slice";
import Post from "./components/Post";

function App() {

	const dispatch = useDispatch();
    const commentsData = useSelector((state) => state.comments.comments);

    const getComments = () => {
        axios.get("http://localhost:5000/comments").then((res) => {
            dispatch(setComments(res.data));
        })
		
    }

    useEffect(() => {
        getComments();
    }, []);

	return (
		<>
			{commentsData?.map((com, index) => (
				<Post key={index} com={com} />
        	))}
		</>
	);
}

export default App;
