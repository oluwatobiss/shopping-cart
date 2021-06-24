import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";

function Electronics() {
  const [electronicsData, setElectronicsData] = useState(null);

  useEffect(() => {
      fetch("https://fakestoreapi.com/products/category/electronics")
      .then(res => res.json())
      .then(json => { setElectronicsData(json) })
      .catch(() => console.log("Error fetching Data"))
  }, []);

  function getProductData() {
    return electronicsData.map(i => <ProductCard key={uniqid()} title={i.title} price={i.price} imagesrc={i.image} />)
  }

  return (
    <div id="electronics-div">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">ELECTRONICS</h1>
      </header>
      <section className="products-section">
        { electronicsData && getProductData() }
      </section>
    </div>
  );
}

export default Electronics;