import React from 'react';

const Posts = ({currentPosts,loading, sorting,search}) => { 
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
      < div className='container'> 
      <h2 style={{margin:'1rem 0'}}>Users Details</h2>
      {
      !currentPosts ? ("no Data Found"):(
        <table className='table table-border' >
        <thead className='thead-dark' style={{cursor :"pointer"}}>
          <tr>
            <th onClick={()=>sorting("firstName")}>FirstName</th>
            <th onClick={()=>sorting("lastName")}>LastName</th>
            <th>Email</th>
            <th>Web</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {
            currentPosts.filter((val)=>{
              if(search=== ''){
                return val;
              }else if(
                val.firstName.toLowerCase().startsWith(search.toLowerCase()) ||
                val.lastName.toLowerCase().startsWith(search.toLowerCase()) )
                {
                  return val
                }else{
                  return null;
                }
              })
            .map((post,index)=>{
              return(
              <tr key={index}>
                <td>{post.firstName}</td>
                <td>{post.lastName}</td>
                <td>{post.email}</td>
                <td>{post.web}</td>
                <td>{post.city}</td>
                <td>{post.state}</td>
              </tr>
              )
            })
          }
        </tbody> 
      </table>
      )
}
      
    </div>
  )
}

export default Posts