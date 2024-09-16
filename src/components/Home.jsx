// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Home.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [postList, sePostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      //   console.log(data);
      //   console.log(data.docs);
      //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      sePostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="homepage">
      {postList.map((post) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postsText}</div>
            <div className="nameAndDeleteButton">
              <h3>{post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
