import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";

function MenClothing() {
  const [menClothingData, setMenClothingData] = useState(null);

  useEffect(() => {
      fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then(res => res.json())
      .then(json => { setMenClothingData(json) })
      .catch(() => console.log("Error fetching Data"))
  }, []);

  function getProductData() {
    return menClothingData.map(i => <ProductCard key={uniqid()} title={i.title} price={i.price} imagesrc={i.image} />)
  }

  return (
    <div id="women-clothing-div">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">MEN'S CLOTHING</h1>
      </header>
      <section className="products-section">
        { menClothingData && getProductData() }
      </section>
    </div>
  );
}

export default MenClothing;