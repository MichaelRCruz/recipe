import React from 'react';

const Ingredient = props => {

  const { uuid, name, specialIngredientsIds } = props;

  
  return specialIngredientsIds.includes(uuid)
      ? <div>
          <p>{name} and {uuid}</p>
        </div>
      : (
        <div>
          <p>{name}</p>
        </div>
      );
};

export default Ingredient;