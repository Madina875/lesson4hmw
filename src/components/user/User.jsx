import React, { useEffect, useState } from "react";
import "../user/User.scss";
import axios from "axios";

const User = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/users?style=comedy")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // mount

  return (
    <section className="user">
      <div className="container">
        <div className="user-wrapper">
          <h2>users</h2>
          {error && <div style={{ color: "red" }}>{error?.message}</div>}
          {loading && <div>Loading...</div>}

          <div className="user-wrapper__cards">
            {data?.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.username}</h3>
                <p>name: {item.name}</p>
                <p>email: {item.email}</p>
                <p>bio {item.bio}</p>
                <p>phone: {item.phone}</p>
                <p>city: {item.city}</p>
                <p>profession: {item.profession}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
