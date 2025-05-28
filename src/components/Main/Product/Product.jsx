import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import AddToCart from "../AddToCart/AddToCart";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error("Error fetching product:", err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className={styles.productContainer}>
            <img
                src={product.image}
                alt={product.title}
                className={styles.img}
            />
            <div className={styles.productDescriptionAndControls}>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>RM{product.price}</p>
                <div className={styles.productControls}>
                    <QuantitySelector />
                    <AddToCart />
                </div>
            </div>
        </div>
    );
}

export default Product;
