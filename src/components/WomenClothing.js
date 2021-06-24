import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";

function WomenClothing() {
  const [womenClothingData, setWomenClothingData] = useState(null);

  useEffect(() => {
      fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then(res => res.json())
      .then(json => { setWomenClothingData(json) })
      .catch(() => console.log("Error fetching Data"))
  }, []);

  function getProductData() {
    return womenClothingData.map(i => <ProductCard key={uniqid()} title={i.title} price={i.price} imagesrc={i.image} />)
  }

  return (
    <div id="women-clothing-div">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">WOMEN'S CLOTHING</h1>
      </header>
      <section className="products-section">
        { womenClothingData && getProductData() }
      </section>
    </div>
  );
}

export default WomenClothing;