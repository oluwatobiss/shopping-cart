import uniqid from "uniqid";
import { Link, withRouter } from "react-router-dom";

function Breadcrumb(props) {
    const { location } = props;
    const { pathname } = location;
    const pathToTextArr = pathname.split("/").filter(i => i);

    return (
        <div className="breadcrumb-div" aria-label="breadcrumb">
            <span><Link to="/" className="breadcrumb-link">home</Link> / </span>
            {
                pathToTextArr.map((text, index) => {
                    const currTextRoute = `/${pathToTextArr.slice(0, index + 1).join("/")}`;
                    const jewelryOrCurrTextRoute = currTextRoute === "/jewelery" ? "/jewelry" : currTextRoute;
                    const jewelryOrText = text === "jewelery" ? "jewelry" : text;
                    const isLastInArr = index === pathToTextArr.length - 1;

                    return isLastInArr ? 
                    <span className="breadcrumb-last-pg" key={ uniqid() }>{ text }</span> : 
                    <span key={ uniqid() }>
                        <Link to={ jewelryOrCurrTextRoute } className="breadcrumb-link">
                            { jewelryOrText }
                        </Link>{ " / " }
                    </span>;
                })
            }
        </div>
    );
}

export default withRouter(Breadcrumb);