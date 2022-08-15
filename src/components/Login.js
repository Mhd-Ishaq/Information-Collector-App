import React,{useState} from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({email:'',password:''});
  const navigate = useNavigate();




  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };


  const handleLogin = (e)=>{

    const getUserArr = localStorage.getItem('list');
    // console.log(getUserArr)
    const {email,password}= user;
    if(email=== ''){
      alert("Email is required");
    }else if(password=== ''){
      alert("Password is required");
    }
    else{
      if(getUserArr && getUserArr.length){
        const userData = JSON.parse(getUserArr);
        // console.log(userData);
        const userLogin = userData.filter((el,i)=>{
          return el.email === email && el.password === password
        });

        if(userLogin.length === 0){
          alert('Invalid Details')
        }else{
          // console.log("user login successfully");
          localStorage.setItem('user_login',JSON.stringify(userLogin))
          navigate('/users/1');
        }
      }
    }

    
  }



  return (
    <div className="form-container">
            <h1>Login</h1>
            <div name="contact" className="form" >
              <div className="row">
                <div className="col">
                  <label htmlFor="mail">Email</label>
                  <input
                    type="email"
                    id="mail"
                    name="email"
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    minLength="5"
                    maxLength="26"
                  />
                </div>
                <div className="col">
                  <label htmlFor="pass">Password </label>
                  <input
                    type="password"
                    id="pass"
                    placeholder="Enter Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    minLength="5"
                    maxLength="15"
                  />
                </div>
              </div>
              <button className="btn-submit" onClick={handleLogin}>Login</button>
            </div>
          </div>
  )
}

export default Login