import React, { useState } from "react";
import  { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Login from "./Login";

const getLocalStorage = () => {
  let list = localStorage.getItem('list');

  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const Home = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
    web: "",
    age: "",
  });

  const [list, setList] = useState(getLocalStorage());

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = { ...formValues, id: uuidv4() };
    setList([...list, newValue]);
    setFormValues({
      firstName: "",
      lastName: "",
      company: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      password: "",
      web: "",
      age: "",
    });
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section>
      <nav className="navbar">
        <Link className="navbar-brand" to="/users">
          Users
        </Link>
      </nav>
      <Form  formValues ={formValues}handleSubmit={handleSubmit} handleChange={handleChange} />
      <Login />
    </section>
  );
};

export default Home;
