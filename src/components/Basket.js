import uniqid from "uniqid";
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import ShoppedItemCard from "./ShoppedItemCard";
import { shoppingBasket } from "./ProdFullDescCard";
import { SiMastercard } from "react-icons/si";

function Basket() {
    const shoppedItems = shoppingBasket.map(i => <ShoppedItemCard key={uniqid()} title={i.title} price={i.price} imgsrc={i.imgsrc} qty={i.qty} />)
    
    return (
        <section id="cart-section">
            <NavBar backgroundColor="white" textColor="black" />
            <header>
            <Breadcrumb />
            <h1 className="cart-pg-title">YOUR SHOPPING BASKET</h1>
            <p>You have 2 items in the basket.</p>
            </header>
            <div id="shopped-items-and-total-price-div">
                <div id="shopping-basket-div">
                    { shoppedItems }
                </div>
                <div id="shopping-overview-div">
                    <section id="order-summary-section">
                        <h3 id="order-summary-heading">ORDER SUMMARY</h3>
                        <div id="total-qty-and-price-div">
                            <span>2 ITEMS</span><span>$94</span>
                            <span>DELIVERY</span><span>FREE</span>
                            <span className="summary-total">TOTAL</span><span className="summary-total">$94</span>
                        </div>
                    </section>
                    <section id="payment-method-section">
                        <h3 id="payment-method-heading">PAYMENT METHOD</h3>
                        <div id="bank-card-btn-offset-border">
                            <button id="bank-card-btn"> <SiMastercard /> Bank Card</button>
                        </div>
                        <button id="paypal-btn"></button>
                    </section>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Basket;