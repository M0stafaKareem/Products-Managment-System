import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation.component";
import ProductCard, { Product } from "../components/ProductCard.component";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

export const AllProductsPage = () => {
  const [ProductsArray, setProductsArray] = useState<Product[]>([]);
  const [ProductsCount, setProductsCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const productsAPI = `http://127.0.0.1:3333/api/products?limit=${limit}&page=${page}`;
  const items = [];

  useEffect(() => {
    fetch(productsAPI)
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.status === "success") {
          setProductsCount(jsonData.data.ProductsCount);
          setProductsArray(jsonData.data.Products);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, [productsAPI]);

  const handlePagination = (event: MouseEvent<HTMLElement>) => {
    setPage(+event.currentTarget.innerText);
  };
  const handleProductsPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLimit(+event.currentTarget.value);
  };

  for (let number = 1; number <= ProductsCount / limit; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={handlePagination}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <MainNavigation />
      <div className="container d-flex gap-5 flex-wrap my-5 justify-content-center">
        {ProductsArray.length &&
          ProductsArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {ProductsArray.length && (
          <div className="d-flex gap-4 align-items-center">
            <div className="d-flex flex-column gap-4 align-items-center">
              <Form.Select
                id="limit"
                defaultValue={""}
                onChange={handleProductsPerPage}
              >
                <option value="" hidden>
                  Products Per Page
                </option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
                <option value="15">15</option>
              </Form.Select>
            </div>
            <Pagination className="m-0">{items}</Pagination>
          </div>
        )}

        {!ProductsArray.length && <p>The Store is Currently Empty</p>}
      </div>
    </>
  );
};
