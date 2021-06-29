import { Link } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function ItemToBaskAlertModal() {
    return (
        <article id="added-to-bask-alert-modal-bg">
            <div id="added-to-bask-alert-div">
                <span id="added-to-bask-chk-mark-span"><BiCheck /></span>
                <span id="added-to-bask-text-span">Item successfully added to your basket!</span>
                <Link to="/basket" id="view-bask-btn">View Basket</Link>
                <span id="close-added-to-bask-alert-modal"><IoClose /></span>
            </div>
        </article>
    )
}

export default ItemToBaskAlertModal;