
import React from 'react'

const Form = ({formValues,handleChange,handleSubmit}) => {
  const {
    firstName,
    lastName,
    email,
    age,
    password,
    city,
    state,
    zip,
    web,
    company,
  } = formValues;
  return (
    <main className="form-container">
            <h1>Register Here</h1>
            <form name="contact" method="POST" onSubmit={handleSubmit} className="form">
              <div className="row">
                <div className="col">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="text"
                    id="FirstName"
                    placeholder="Enter your First Name"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    required
                    minLength="4"

                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter Your Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    required
                    minLength="4"

                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    placeholder="Enter Your Age"
                    name="age"
                    required
                    value={age}
                    onChange={handleChange}
                    minLength="1"

                  />
                </div>
                <div className="col">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Enter Company Name"
                    name="company"
                    required
                    value={company}
                    onChange={handleChange}
                    minLength="5"

                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter Your City Name"
                    name="city"
                    required
                    value={city}
                    onChange={handleChange}
                    minLength="3"

                  />
                </div>
                <div className="col">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    placeholder="Enter Your State"
                    name="state"
                    required
                    value={state}
                    onChange={handleChange}
                    minLength="3"

                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="number"
                    id="zip"
                    placeholder="Enter Zip"
                    name="zip"
                    required
                    value={zip}
                    onChange={handleChange}
                    minLength="4"

                  />
                </div>
                <div className="col">
                  <label htmlFor="web">Web</label>
                  <input
                    type="text"
                    id="web"
                    placeholder="Enter Web"
                    name="web"
                    value={web}
                    required
                    onChange={handleChange}
                    minLength="3"

                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                    value={email}
                    onChange={handleChange}
                    minLength="5"

                  />
                </div>
                <div className="col">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                    value={password}
                    onChange={handleChange}
                    minLength="5"
                  />
                </div>
              </div>

              <input type="submit" value="Register" className="btn-submit" />
            </form>
          </main>
  )
}

export default Form