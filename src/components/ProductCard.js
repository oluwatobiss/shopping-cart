function ProductCard(props) {
    const prodImgDivStyle = {
        backgroundImage: `url(${props.imagesrc})`
    }

    return (
        <article className="prod-card-div">
            <div className="prod-image-div" style={ prodImgDivStyle }></div>
            <div className="prod-info-div">
                <p className="prod-price">${props.price}</p>
                <p className="prod-title">{props.title}</p>
            </div>
        </article>
    );
}

export default ProductCard;