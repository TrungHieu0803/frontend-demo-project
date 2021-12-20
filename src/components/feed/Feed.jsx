import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import io from 'socket.io-client'

export default function Feed({ username }) {
  const socket = io('localhost:3005')
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  const [test, setTest] = useState('');
  const follow = async () => {
    socket.emit('notification', {type: 1, fromUserId: 1, toUserId: 2});

    socket.on(`notification-2`,({success}) => {
      setTest(success)
    })
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
      <div>{test}</div>
      <button type="button" onClick={follow} >follow</button>
    </div>
  );
}
