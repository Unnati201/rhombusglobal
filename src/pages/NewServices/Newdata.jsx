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
        description='Complete portfolio of services to  empower our customers for the future'
      />
    </div>
  );
}

export default Newdata;
