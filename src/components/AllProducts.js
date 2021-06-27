import { useState, useEffect } from "react";
import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import ProdSummaryCard from "./ProdSummaryCard";

function AllProducts() {
  const [allProductsData, setAllProductsData] = useState(null);

  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => { setAllProductsData(json) })
      .catch(() => console.log("Error fetching Data"))
  }, []);

  function getProductData() {
    return allProductsData.map(i => <ProdSummaryCard key={uniqid()} id={i.id} title={i.title} price={i.price} category={i.category} imagesrc={i.image} />)
  }

  return (
    <section id="all-products-section">
      <NavBar backgroundColor="white" textColor="black" />
      <header>
        <Breadcrumb />
        <h1 className="prod-pg-title">ALL</h1>
      </header>
      <article className="products-article">
        { allProductsData && getProductData() }
      </article>
    </section>
  );
}

export default AllProducts;