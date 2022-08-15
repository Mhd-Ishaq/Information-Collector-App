import React from 'react';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div >
      {items.map((item) => {
        const { id,firstName,lastName,age,password,email,city,state,zip,company,web } = item;
        return (
          <article  className='list-item' key={id}>
            <h4 className='title'>FirstName : {firstName}</h4>
            <h4 className='title'>Lat Name : {lastName}</h4>
            <h4 className='title'>Id : {id}</h4>
            <h4 className='title'>Company Name : {company}</h4>
            <h4 className='title'>City : {city}</h4>
            <h4 className='title'>State : {state}</h4>
            <h4 className='title'>Zip : {zip}</h4>
            <h4 className='title'>Email: {email}</h4>
            <h4 className='title'>Password: {password}</h4>
            <h4 className='title'>Web : {web}</h4>
            <h4 className='title'>Age : {age}</h4>
            
          </article>
        );
      })}
    </div>
  );
};

export default List;