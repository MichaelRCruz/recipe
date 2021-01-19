import React from 'react';

import './Recipe.css';

const Recipe = props => {

  const { cookTime, prepTime, title, images } = props;

  return (
    <div className="card-container">
      <div className="card u-clearfix">
        <div className="card-body">
          <span className="card-prepTime subtle">{prepTime} minutes to prepare</span>
          <span className="card-cookTime subtle">{cookTime} minutes to cook</span>
          <h2 className="card-title">{title}</h2>
          <span className="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
          <div className="card-read">Read</div>
          <span className="card-tag card-circle subtle">C</span>
        </div>
        <img src={images.small} alt="" className="card-media" />
        <p>{images.small}</p>
      </div>
      <div className="card-shadow"></div>
    </div>
  );
};
 
export default Recipe;