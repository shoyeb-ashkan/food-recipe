import React, { useEffect, useState } from "react";
import "./App.css";
import { useGetRecipesMutation } from "./services/recipeApi";
import {
  MDBBtn,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import options from "./options.json";
import Modal from "./components/Modal";

function App() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [health, setHealth] = useState("no-oil-added");
  const [recipe, setRecipe] = useState({});
  const [getRecipes, { isLoading, data }] = useGetRecipesMutation();

  useEffect(() => {
    const getFoodRecipe = async () => {
      await getRecipes({ query, health });
    };
    getFoodRecipe();
  }, [query, health]);

  if (isLoading) {
    return <Spinner />;
  }

  const handleSearch = () => {
    setQuery(value);
    setValue("");
  };

  const clickHandle = (e: any) => {
    setHealth(e.target.value);
  };

  const toggleShow = (recipe: any) => {
    setShow(!show);
    console.log(show);
    setRecipe(recipe);
  };
  return (
    <div
      className="App"
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
      }}
    >
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-center">
            <h5 className="fw-bold mt-2">🍔 Food Recipe App</h5>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <div
        className="row align-items-center mt-2 g-1"
        style={{
          padding: "auto",
          margin: "auto",
        }}
      >
        <div className="col-auto">
          <MDBInput
            type="text"
            label="Search Recipe"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <MDBBtn onClick={handleSearch}>Search</MDBBtn>
        </div>
        <div className="col-auto">
          <select
            className="categoryDropdown"
            onChange={clickHandle}
            value={health}
          >
            {options.map((option, index) => (
              <option value={option.value || ""} key={index}>
                {option.lable}
              </option>
            ))}
          </select>
        </div>
      </div>
      <MDBRow className="row-cols-1 row-cols-md-3 g4">
        {data && data.hits ? (
          data.hits.map((item: any) => (
            <Cards
              key={item.recipe.uri}
              toggleShow={toggleShow}
              recipe={item.recipe}
            />
          ))
        ) : (
          <div className="errorMsg">Please select proper combination</div>
        )}
      </MDBRow>
      {show && (
        <Modal
          show={show}
          setShow={setShow}
          toggleShow={toggleShow}
          recipe={recipe}
        />
      )}
    </div>
  );
}

export default App;
