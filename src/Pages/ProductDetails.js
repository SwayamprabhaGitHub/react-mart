import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    return <>
    <h1>Product Details Page</h1>
    <p>{params.id}</p>
    <p><Link to=".." relative="path">Back</Link></p>
    </>
}

export default ProductDetails;