import React from 'react';

import './Recipe.css';

const Recipe = props => {

  const { cookTime, prepTime, title, images, description, uuid } = props;

  return (
    <div className="card-container">
      <div className="card u-clearfix">
        <div className="card-body">
          <span className="card-prepTime subtle">{prepTime} minutes to prepare</span>
          <span className="card-cookTime subtle">{cookTime} minutes to cook</span>
          <h2 className="card-title">{title}</h2>
          <span className="card-description subtle">{description}</span>
          <div className="card-read" onClick={() => props.handleClick(uuid)}>Read</div>
        </div>
        <img src={'img/' + images.small} alt="" className="card-media" />
      </div>
      <div className="card-shadow"></div>
    </div>
  );
};
 
export default Recipe;