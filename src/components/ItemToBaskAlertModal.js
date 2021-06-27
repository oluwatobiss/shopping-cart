import { BiCheck } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function ItemToBaskAlertModal() {
    return (
        <article className="added-to-bask-alert-modal-bg">
            <div className="added-to-bask-alert-div">
                <span className="added-to-bask-chk-mark-span"><BiCheck /></span>
                <span className="added-to-bask-text-span">Item successfully added to your basket!</span>
                <button className="view-bask-btn">View Basket</button>
                <span className="close-added-to-bask-alert-modal"><IoClose /></span>
            </div>
        </article>
    )
}

export default ItemToBaskAlertModal;