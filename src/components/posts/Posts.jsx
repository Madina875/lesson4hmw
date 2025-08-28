import React, { useEffect, useState } from "react";
import "../posts/Posts.scss";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/posts?style=comedy")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // mount

  return (
    <section className="posts">
      <div className="container">
        <div className="posts-wrapper user-wrapper">
          <h2>posts</h2>
          {error && <div style={{ color: "red" }}>{error?.message}</div>}
          {loading && <div>Loading...</div>}
          <div className="posts-wrapper__cards user-wrapper__cards">
            {data?.map((item) => (
              <div key={item.id} className="card post-card">
                <span>author: {item.author}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span>date: {item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
