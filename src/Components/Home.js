
import { Link } from "react-router-dom";
import Products from "./products";

function Home() {
    return(
        <div>
            <h1>Home Component</h1>
            <Link to="/products" element={<Products/>}>Products</Link>
        </div>
    )
}

export default Home;