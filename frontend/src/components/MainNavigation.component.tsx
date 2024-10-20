import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./MainNavigation.module.css";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";

interface MainNavigationInterface {
  onCategoryChange: (category: string) => void;
  onSortingChange: (sortType: string) => void;
  onSearching: (sortType: string) => void;
}
const MainNavigation: React.FC<MainNavigationInterface> = ({
  onCategoryChange,
  onSortingChange,
  onSearching,
}) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSoring, setCurrentSorting] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3333/api/products/categories")
      .then((response) => response.json())
      .then((jsonData) => setCategories(jsonData.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const categoryChangeHandler = (event: MouseEvent<HTMLElement>) => {
    setCurrentCategory(event.currentTarget.textContent!);
    setSearchTerm("");
    onCategoryChange(event.currentTarget.textContent!);
  };
  const sortChangeHandler = (event: MouseEvent<HTMLElement>) => {
    setCurrentSorting(event.currentTarget.textContent!);
    setSearchTerm("");
    onSortingChange(event.currentTarget.textContent!);
  };

  const handleSearching = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearching(event.target.value);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-3">
      <Container>
        <Navbar.Brand>
          <img src="logo.png" alt="Extend Logo" className={styles.nav_logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between ms-5 gap-lg-5 ">
            <div className="d-flex align-items-baseline gap-sm-3 gap-lg-1">
              <label className="fs-4">Categorize By: </label>
              <NavDropdown
                title={currentCategory || "Categories"}
                id="basic-nav-dropdown"
              >
                {categories &&
                  categories.map((category) => (
                    <NavDropdown.Item
                      key={category}
                      onClick={categoryChangeHandler}
                    >
                      {category}
                    </NavDropdown.Item>
                  ))}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={categoryChangeHandler}>
                  All Products
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="d-flex align-items-baseline gap-sm-3 gap-lg-1">
              <label className="fs-4">Sort By: </label>
              <NavDropdown title={currentSoring} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={sortChangeHandler}>
                  price
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={sortChangeHandler}>
                  name
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
          <Form.Control
            type="text"
            placeholder="Search"
            className="w-25"
            value={searchTerm}
            onChange={handleSearching}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
