import React from 'react';

const RecipeDetail = props => {

  return (
    <div>
      <div onClick={() => props.handleClick(false)}>
        <p>
          {props.uuid}
        </p>
      </div>
    </div>
  );
};
 
export default RecipeDetail;