import React, { useEffect, useState } from "react";
import "../products/Products.scss";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonbek.uz/api/products?style=comedy")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // mount
  return (
    <section className="products">
      <div className="container">
        <div className="products-wrapper user-wrapper">
          <h2>products</h2>
          {error && <div style={{ color: "red" }}>{error?.message}</div>}
          {loading && <div>Loading...</div>}
          <div className="products-wrapper__cards ">
            {data?.map((item) => (
              <div key={item.id} className="products-wrapper__cards-card card">
                <img src={item.image} alt="" />
                <div className="desc">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>price: {item.price}$</strong>
                  <p>rating: {item.rate} ⭐</p>
                  <p>origin: {item.origin}</p>
                  <span>available: `{item.available}`</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
