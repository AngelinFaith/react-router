import { Link, useParams , useOutletContext} from "react-router-dom";

const Product= () => {
    // Using this we can get the data that passed in context from parent. 
    const products = useOutletContext();

    // Returns the object , { name of the variable given in the route(key): dynamic value which gets in Link while calling this component(value) } 
    const {productId} = useParams();
    console.log(productId);

    const product = products.find((product)=> product.id==productId);
    console.log(product);
    if(productId<21){
        return(
            <div>
                <h1>Product Component</h1>
                <p><strong>Product ID:</strong>{product.id}</p>
                <p><strong>Product Title:</strong>{product.title}</p>
                <p><strong>Product Price:</strong>{product.price}</p>
                <p><strong>Product Description:</strong>{product.description}</p>
                <p><strong>Product Category:</strong>{product.category}</p>
                <p><strong>Product Image:</strong><img src={product.image} alt={product.title} height="150px" width="150px"></img></p>
                <p><strong>Product Rating Rate:</strong>{product.rating.rate}</p>
                <p><strong>Product Rating Count:</strong>{product.rating.count}</p>
                <Link to="/products">Go to Products</Link> 
            </div>
        )
    } else{
        return(
            <div>
                <h2>No item found</h2>
                <Link to="/products">Go to Products</Link>
            </div>
                
        )

    }
}

export default Product;