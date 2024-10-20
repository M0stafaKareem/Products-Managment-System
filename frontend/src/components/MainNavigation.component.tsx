import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./MainNavigation.module.css";
import { MouseEvent, useEffect, useState } from "react";

const MainNavigation = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSoring, setCurrentSorting] = useState("default");

  useEffect(() => {
    fetch("http://127.0.0.1:3333/api/products/categories")
      .then((response) => response.json())
      .then((jsonData) => setCategories(jsonData.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const categoryChangeHandler = (event: MouseEvent<HTMLElement>) => {
    setCurrentCategory(event.currentTarget.textContent!);
  };
  const sortChangeHandler = (event: MouseEvent<HTMLElement>) => {
    setCurrentSorting(event.currentTarget.textContent!);
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
                  Price
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={sortChangeHandler}>
                  Name
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
