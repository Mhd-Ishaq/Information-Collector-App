import React from 'react';
import Posts from './Posts';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from './Pagination';

let list = JSON.parse(localStorage.getItem('list'));

const Users = () => {
  const [posts,setPosts]= useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage]= useState(3);
  const [search, setSearch]= useState('');

  const [order, setOrder] = useState("ASC");

   // sorting Function
  const sorting =(col)=>{
    if(order=== "ASC"){
      const sorted = [...posts].sort((a,b)=>{
        return(
          a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1
        );
      })
      setPosts(sorted);
      setOrder("DSC");
    }

    if(order=== "DSC"){
      const sorted = [...posts].sort((a,b)=>{
        return(
          a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1
        );
      })
      setPosts(sorted);
      setOrder("ASC");
    }

  }



const indexOfLastPost = currentPage *  postsPerPage;
const indexofFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexofFirstPost,indexOfLastPost);

// change page 
const paginate = (pageNumber)=> setCurrentPage (pageNumber);

useEffect(()=>{
  // const fetchPosts = async ()=>{
  //   setLoading(true);
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   setPosts(res.data);
  //   setLoading(false);
  // }
  // fetchPosts()
  setPosts(list);
  
},[])

  return (
  <div>
    <nav className="navbar"   >
        <Link className="navbar-brand"  to='/home'>Home</Link>
        <form className="form-inline" >
          <input className="form-control mr-sm-2 " 
          value={search}
          onChange={e=>setSearch(e.target.value)}
          type="search" placeholder="Search" aria-label="Search"/>
      </form>
      </nav>
    <Posts currentPosts={currentPosts}  sorting={sorting} search={search} />
    <Pagination  postsPerPage={postsPerPage} totalPosts={posts.length}  
    paginate={paginate}/> 
    </div>
  )
}

export default Users