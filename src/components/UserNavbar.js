import React from 'react';
import {Link} from 'react-router-dom';

const UserNavbar = ({changeHandler,search}) => {
  return (
    <nav className="navbar"   >
        <Link className="navbar-brand"  to='/home'>Home</Link>
        <form className="form-inline" >
          <input className="form-control mr-sm-2 " 
          value={search}
          onChange={changeHandler}
          type="search" placeholder="Search" aria-label="Search"/>
      </form>
      </nav>
  )
}

export default UserNavbar