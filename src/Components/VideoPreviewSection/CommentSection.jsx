import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'
import Context from '../../context/Context'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const CommentSection = () => {
    const {BASE_URL,API_KEY,currentVideoId} = useContext(Context);
    const [comments, setComments] = useState(null);

    async function getCommentSnippet(currentVideoId){
        try {
          console.log("Fetching Comment Snippet...");
          const response = await axios(`${BASE_URL}/commentThreads?part=snippet&videoId=${currentVideoId}&key=${API_KEY}`);
          setComments(response.data.items);
          console.log("Fetching Comment Snippet Successful!");          
        } catch (error) {
          console.log("inside getCommentSnippet(currentVideoId)" +error);
        }
      }

    useEffect(() =>{
        getCommentSnippet(currentVideoId)
    },[currentVideoId]);
    
  return (
    <>{comments &&
    <div id="commentSection">
    <div id="commentDetails">
      <div><span id="CommentsCount">{comments.length} Comments</span>
        <span><img src="./Assets/Dropdown.png" alt=""/>   SORT BY</span></div>
      <div className="addComment">
        <div className="userImage"><img src="./Assets/1.png" alt="" className="userThumbnail"/></div>
        <div className="InputComment"><input type="text" placeholder="Add a public comment..." className="addCommentInput"/></div>
      </div>
    </div>
    <div id="AllComments">
      {comments.map((comment) => (

        <div key={comment.id} className="addComment">
          <div className="userImage">
            <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className="userThumbnail" />
          </div>
          <div className="InputComment">
            <p>
              {comment.snippet.topLevelComment.snippet.authorDisplayName} <span className="commentTime"> {comment.snippet.topLevelComment.snippet.publishedAt}</span>
            </p>
            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
            <div className="commentStats">
              <span>
              <AiFillLike /> {comment.snippet.topLevelComment.snippet.likeCount}
              </span>
              <span>
              <AiFillDislike /> {comment.snippet.topLevelComment.snippet.dislikeCount}
              </span>
              <span>REPLY</span>
            </div>
          </div>
        </div>
      ))}
</div>
</div>}
</>
  );
}

export default CommentSection
