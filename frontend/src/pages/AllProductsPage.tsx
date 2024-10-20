import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation.component";
import ProductCard, { Product } from "../components/ProductCard.component";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

export const AllProductsPage = () => {
  const [productsArray, setProductsArray] = useState<Product[]>([]);
  const [productsCount, setProductsCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const [categorization, setCategorization] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const productsAPI = `http://127.0.0.1:3333/api/products?limit=${limit}&page=${page}&search=${search}&sort=${sort}&category=${categorization}`;
  const items: JSX.Element[] = [];

  useEffect(() => {
    fetch(productsAPI)
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.status === "success") {
          setProductsCount(jsonData.data.ProductsCount);
          setProductsArray(jsonData.data.Products);
        }
        if (jsonData.status === "fail") {
          setProductsArray([]);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, [productsAPI]);

  const handlePagination = (event: MouseEvent<HTMLElement>) => {
    setPage(+event.currentTarget.innerText);
  };

  const handleProductsPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLimit(+event.currentTarget.value);
    setPage(1);
  };

  const handleSort = (sortType: string) => {
    setSort(sortType);
    setSearch("");
    setPage(1);
  };

  const handleCategorization = (category: string) => {
    if (category === "All Products") setCategorization("");
    else setCategorization(category);
    setSearch("");
    setPage(1);
  };

  const handleSearching = (searchTerm: string) => {
    setSearch(searchTerm);
    setPage(1);
  };

  for (let number = 1; number <= Math.ceil(productsCount / limit); number++) {
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
      <MainNavigation
        onSortingChange={handleSort}
        onCategoryChange={handleCategorization}
        onSearching={handleSearching}
      />
      <div className="container d-flex gap-5 flex-wrap my-5 justify-content-center">
        {productsArray.length ? (
          productsArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>The Store is Currently Empty</p>
        )}

        {productsArray.length > 0 && (
          <div className="d-flex gap-4 align-items-center">
            <div className="d-flex flex-column gap-4 align-items-center">
              <Form.Select
                id="limit"
                defaultValue={limit.toString()}
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
      </div>
    </>
  );
};
