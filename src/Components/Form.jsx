import React, { useState, useContext } from "react";
import { MovieContext } from "../Reducer/MovieContext";
import AddButton from "./Button/AddButton";
import "./styles.css";

export const Form = ({ close }) => {
  const [inputs, setInputs] = useState({});
  const { addMovie } = useContext(MovieContext);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    const finalValues = {
      name: inputs.name,
      image: {
        medium: inputs.image,
      },
      language: inputs.language,
      rating: {
        average: inputs.rating,
      },
    };
    addMovie(finalValues);
    setInputs({});
    close();
  };

  return (
    <form>
      <label>
        Enter Movie name:
        <input
          type='text'
          name='name'
          id='name'
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Language:
        <input
          type='text'
          name='language'
          id='language'
          value={inputs.language || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Image URL:
        <input
          type='text'
          name='image'
          id='image'
          value={inputs.image || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Movie Rating:
        <input
          type='number'
          name='rating'
          id='rating'
          value={inputs.rating || ""}
          onChange={handleChange}
        />
      </label>
      <AddButton onClick={handleSubmit}>Submit</AddButton>
    </form>
  );
};
export default Form;
