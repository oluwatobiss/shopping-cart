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
                    const isLastInArr = index === pathToTextArr.length - 1;

                    return isLastInArr ? 
                    <span className="breadcrumb-last-pg" key={ uniqid() }>{ text }</span> : 
                    <span><Link to={currTextRoute} className="breadcrumb-link" key={ uniqid() }>{ text }</Link> / </span>;
                })
            }
        </div>
    );
}

export default withRouter(Breadcrumb);