import uniqid from "uniqid";
import { Link, withRouter } from "react-router-dom";

function Breadcrumb(props) {
    const { location } = props;
    const { pathname } = location;
    const pathToTextArr = pathname.split("/").filter(i => i);

    return (
        <div className="breadcrumb-div" aria-label="breadcrumb">
            <span><Link to="/" style={{textDecoration:"underline"}}>Home</Link> / </span>
            {
                pathToTextArr.map((text, index) => {
                    const currTextRoute = `/${pathToTextArr.slice(0, index + 1).join("/")}`;
                    const isLastInArr = index === pathToTextArr.length - 1;

                    return isLastInArr ? 
                    <span key={ uniqid() } style={{color:"dimgrey"}}>{ text }</span> : 
                    <span> / <Link key={ uniqid() } to={currTextRoute} style={{textDecoration:"underline"}}>{ text }</Link></span>;
                })
            }
        </div>
    );
}

export default withRouter(Breadcrumb);