import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProductCard from "./ProductCard";

function AllProducts() {
  const [allProductsData, setAllProductsData] = useState(null);

  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => { setAllProductsData(json) })
      .catch(() => console.log("Error fetching Data"))
  }, []);

  function getProductData() {
    return allProductsData.map(i => <ProductCard key={uniqid()} title={i.title} price={i.price} imagesrc={i.image} />)
  }

  return (
    <div id="all-products-div">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">ALL</h1>
      </header>
      <section className="products-section">
        { allProductsData && getProductData() }
      </section>
    </div>
  );
}

export default AllProducts;