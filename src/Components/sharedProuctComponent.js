// We are going to fetch the data using axios and store it in the state variable.
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const SharedProductComponent= () => {
    const [products, setProducts] = useState([]);
    // The logic inside the useEffect will be performed immediately whenever the page gets loaded/ this component loads in the browser.
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts(res.data);
        })

    },[]);
    return(
        <div>
            <h1>SharedProduct Component</h1>
            {/* This outlet has the UI of both the nested child components and depends upon the route it decide 
            which child route component needs to be displayed. And for both the child componnets the sharedProductComponent
            will be there. Becuase the child nested components renders inside the parent sharedProductComponent.   */}
            <Outlet context={products}/>
            {/*  */}
        </div>
    )
}

export default SharedProductComponent;