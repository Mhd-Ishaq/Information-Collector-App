import React from "react";

const Posts = ({ currentPosts, loading, sorting, search }) => {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <>
      {!currentPosts ? (
        "no Data Found"
      ) : (
        <>
          <div className="container">
            <h2 style={{ margin: "1rem 0" }}>Users Details</h2>
            <table className="table table-border">
              <thead className="thead-dark" style={{ cursor: "pointer" }}>
                <tr>
                  {/* <th>Id</th> */}
                  <th onClick={() => sorting("first_name")}>FirstName</th>
                  <th onClick={() => sorting("last_name")}>LastName</th>
                  {/* <th>Company Name</th> */}
                  <th>Email</th>
                  <th>Web</th>
                  <th>City</th>
                  <th>State</th>

                  
                  
                </tr>
              </thead>
              <tbody>
                {currentPosts
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.first_name
                        .toLowerCase()
                        .startsWith(search.toLowerCase()) ||
                      val.last_name
                        .toLowerCase()
                        .startsWith(search.toLowerCase())
                    ) {
                      return val;
                    } else {
                      return null;
                    }
                  })
                  .map((post, index) => {
                    return (
                      <tr key={index}>
                        {/* <td>{post.id}</td> */}
                        <td>{post.first_name}</td>
                        <td>{post.last_name}</td>
                        {/* <td>{post.company_name}</td> */}
                        <td>{post.email}</td>
                        <td>{post.web}</td>
                        <td>{post.city}</td>
                        <td>{post.state}</td>
                        {/* <td>{post.zip}</td>
                        <td>{post.id}</td>
                        <td>{post.age}</td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Posts;
