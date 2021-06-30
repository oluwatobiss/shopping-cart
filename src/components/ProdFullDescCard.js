import { useEffect } from "react";

export const shoppingBasket = [];

function ProdFullDescCard(props) {
    const prodImgDivStyle = { backgroundImage: `url(${props.imagesrc})` };
    const itemToBaskAlertModalBg = document.getElementById("added-to-bask-alert-modal-bg");
    const navBarTotItemsDisp = document.querySelector(".cart-total-items");

    function handleBtnClick() {
        let indexOfItem = null;
        const itemAlreadyInShoppingBasket = shoppingBasket.some(function(i, ind) {
            indexOfItem = ind;
            return i.id === props.id;   
        });

        if (itemAlreadyInShoppingBasket) {
            shoppingBasket[indexOfItem].qty += 1;
        } else {
            shoppingBasket.push({
                id: props.id,
                title: props.title,
                price: props.price,
                imgsrc: props.imagesrc,
                qty: 1
            });
        }
        
        navBarTotItemsDisp.innerText = shoppingBasket.reduce((acc, curr) => acc + curr.qty, 0);
        itemToBaskAlertModalBg.style.display = "block";
    }

    useEffect(() => {
        function closeItemToBaskAlertModalBg(objClicked) {
            const closeAddedToBaskAlertModalBtn = objClicked.target.closest("#close-added-to-bask-alert-modal");
            if ((objClicked.target === itemToBaskAlertModalBg) || (closeAddedToBaskAlertModalBtn)) {
                itemToBaskAlertModalBg.style.display = "none";
            }
        }

        window.addEventListener("click", closeItemToBaskAlertModalBg);
        return () => window.removeEventListener("click", closeItemToBaskAlertModalBg);
    }, [itemToBaskAlertModalBg])

    return (
        <article className="prod-full-desc-card-article">
            <div className="prod-full-desc-image-div" style={ prodImgDivStyle }></div>
            <div className="prod-full-desc-info-div">
                <p className="prod-full-desc-price">${props.price}</p>
                <p className="prod-full-desc-title">{props.title}</p>
                <p className="prod-full-desc-excerpt">{props.description}</p>
                <div className="add-to-bask-btn-offset-border">
                    <button className="add-to-bask-btn" onClick={handleBtnClick}>Add to Basket</button>
                </div>
            </div>
        </article>
    );
}

export default ProdFullDescCard;