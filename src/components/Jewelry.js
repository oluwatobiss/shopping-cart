import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";

function Jewelry() {
  const [jewelryData, setJewelryData] = useState(null);

  useEffect(() => {
      fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(res => res.json())
      .then(json => { setJewelryData(json) })
      .catch(() => console.log("Error fetching Data"))
  }, []);

  function getProductData() {
    return jewelryData.map(i => <ProductCard key={uniqid()} title={i.title} price={i.price} imagesrc={i.image} />)
  }

  return (
    <div id="jewelry-div">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">JEWELRY</h1>
      </header>
      <section className="products-section">
        { jewelryData && getProductData() }
      </section>
    </div>
  );
}

export default Jewelry;