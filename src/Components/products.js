import { Link, useOutletContext } from "react-router-dom";

const Products= () => {

        const products = useOutletContext();
        console.log(products);
        return(
        <div>
            <h1><u>Products Component</u> </h1>
            {products.map((product)=>{
                return(
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <p>{product.category}</p>
                        {/* Here, we get the dynamic value and its the value for the productId variable, thus in url
                        it shows like https://3000/products/1 */}
                        <Link to={`/products/${product.id}`}>More info...</Link> 
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;