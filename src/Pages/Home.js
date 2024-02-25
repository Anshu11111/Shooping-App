import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import "./Home.css";
function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [post, setpost] = useState([]);
  async function Fetchdata() {
    setloading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setpost(data);
    } catch (e) {
      console.log("error aa gya");
      setpost([]);
    }
    setloading(false);
  }
  useEffect(() => {
    Fetchdata();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div>
          <p>No post found</p>
        </div>
      ) : (
        <div className="wrapper">
          {post.map((post) => {
            return (
              <div >
                <Product key={post.id} post={post} />
              </div>
            );
          })}
        </div>
      )}
          
    </div>
  );
}

export default Home;
