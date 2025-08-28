import React from "react";
import Products from "./components/products/Products";
import Posts from "./components/posts/Posts";
import Users from "./components/user/User";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Users />
        <Posts />
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default App;
