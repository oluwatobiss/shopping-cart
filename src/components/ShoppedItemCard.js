import { IoClose } from "react-icons/io5";

function ShoppedItemCard(props) {
    const prodImgDivStyle = { backgroundImage: `url(${props.imgsrc})` };

    return (
        <article className="shopped-item-card">
            <div className="shopped-item-image-div" style={ prodImgDivStyle }></div>
            <div className="shopped-item-info-div">
                <p className="shopped-item-price">${props.price}</p>
                <p className="shopped-item-title">{props.title}</p>
                <input type="number" className="shopped-item-quantity" defaultValue={props.qty} min="1" max="10" />
                <div className="shopped-item-remove-div">
                    <span className="shopped-item-remove-icon"><IoClose /></span>
                    <span className="shopped-item-remove-text">Remove</span>
                </div>
            </div>
        </article>
    )
}

export default ShoppedItemCard;