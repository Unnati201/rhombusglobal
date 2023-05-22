// ParentComponent.js
import React from 'react';
import NewService from './NewService';

const Newdata = () => {
  return (
    <div>
      {/* <h1 >Our Services</h1> */}
      <NewService
        imageUrl='asserts/transform.jpg'
        title='Our Services'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, facere error consectetur omnis amet eligendi mollitia animi! Suscipit recusandae neque itaque? Totam, iste quis.'
      />
    </div>
  );
}

export default Newdata;
