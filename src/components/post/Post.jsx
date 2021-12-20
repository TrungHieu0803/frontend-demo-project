import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post({ post }) {
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">          
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">

           
          </div>
          <div className="postBottomRight">
            
          </div>
        </div>
      </div>
    </div>
  );
}
