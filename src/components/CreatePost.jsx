// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Createpost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const navigate = useNavigate();

  const createPost = async () => {
    if (!auth.currentUser) {
      console.error("ユーザーが認証されていません。");
      return;
    }

    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    ////////////////
    //////////////////////
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する。</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            name=""
            id=""
            placeholder="投稿内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する。
        </button>
      </div>
    </div>
  );
};

export default Createpost;
