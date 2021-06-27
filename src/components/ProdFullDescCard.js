function ProdFullDescCard(props) {
    const prodImgDivStyle = { backgroundImage: `url(${props.imagesrc})` };

    return (
        <article className="prod-full-desc-card-article">
            <div className="prod-full-desc-image-div" style={ prodImgDivStyle }></div>
            <div className="prod-full-desc-info-div">
                <p className="prod-full-desc-price">${props.price}</p>
                <p className="prod-full-desc-title">{props.title}</p>
                <p className="prod-full-desc-excerpt">{props.description}</p>
                <div className="add-to-bask-btn-offset-border">
                    <button className="add-to-bask-btn">Add to Basket</button>
                </div>
            </div>
        </article>
    );
}

export default ProdFullDescCard;