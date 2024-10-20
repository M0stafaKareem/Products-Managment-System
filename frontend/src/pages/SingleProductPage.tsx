import "./SingleProductPage.css";
import { useEffect, useState } from "react";
import ProductDetails from "../components/single-product-page/ProductDetails";
import ProductReviewsSection from "../components/single-product-page/ProductReviewsSection";
import { Product } from "../components/ProductCard.component";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [productData, setProductData] = useState<Product | null>(null); // Set initial state to null
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const { id: productId } = useParams();
  const singleProductAPI = `http://127.0.0.1:3333/api/products/${productId}`;

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(singleProductAPI);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setProductData(jsonData.data.Product);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [singleProductAPI]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Error: Product data not found.</div>;
  }

  return (
    <>
      <ProductDetails productData={productData} />
      <ProductReviewsSection productData={productData} />
    </>
  );
};

export default SingleProductPage;
