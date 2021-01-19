import React from 'react';

const Ingredient = props => {

  const { uuid, name } = props;

  return (
    <div>
        <p>{name}</p>
    </div>
  );
};

export default Ingredient;