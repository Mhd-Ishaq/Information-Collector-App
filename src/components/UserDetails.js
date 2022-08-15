import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from './List'
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {

  const [loginData,setLoginData] = useState([]);

  const users = ()=>{
    const getUser = localStorage.getItem('user_login');
    if(getUser && getUser.length){
      const user = JSON.parse(getUser);
      setLoginData(user);
  }
}

  useEffect(()=>{
    users()
  },[])

  const navigate = useNavigate();

const handleOut =(e)=> {

  localStorage.removeItem('user_login');

  navigate('/')
}


return(
  <>
  {
    loginData.length === 0 ? "Error ! Login First to Access this Page":(
      <>
      <div className="heading">
          <h1>User details</h1>
          <button className="btn-log" onClick={handleOut}>LogOut</button>
        </div>
      <div className='form-container'>
        
      <div className='item-container'>
          <List items={loginData}  />
        </div>
        </div>
        </>
    )
  }

  </>
)
}

export default UserDetails