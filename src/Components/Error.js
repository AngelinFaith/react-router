import { Link } from "react-router-dom";

const Error= () => {
    return(
        <div> 
            <h2>404</h2>
            <p>Page not found</p>
            {/* Use link tag to link between the components, this is like href in html tag  */}
            <Link to="/">Go to home</Link>
        </div>
    )
}

export default Error;