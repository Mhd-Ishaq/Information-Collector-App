import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({postsPerPage, totalPosts,paginate}) => {
  const pageNumbers = [];

  for(let i =1; i<= Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i)
  }
  // console.log(pageNumbers);
return (
  <nav className='d-flex justify-content-center'>
    <ul className="pagination">
      {
        pageNumbers.map(number =>(
          <li className="page-item" key={number}>
            <Link
              to='/users' className='page-link' onClick={()=> paginate(number)}>
              {number}
            </Link>
          </li>
        ))
      } 
    </ul>
  </nav>
)
}

export default Pagination