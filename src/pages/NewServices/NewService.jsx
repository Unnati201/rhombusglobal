import React from 'react';
import "./Newservice.css";

const NewService = (props) => {
  const { imageUrl, title, description } = props;

  return (
    <div className='new_data_service'>
      <div className='new_services_imgs'>
        <div className='image_overlay'></div>
        <img src={imageUrl} alt='' />
      </div>

      <h3 className='new_serv_h3'>
        {title}
      </h3>
      <p className='new_serv_p'>{description}</p>
    </div>
  );
}

export default NewService;
