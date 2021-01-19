import React from 'react';

import './Direction.css';

const Direction = props => {

  const { instructions, optional } = props;
  
  return !optional
    ? <div>
        <p>{instructions}</p>
      </div>
    : (
      <div>
        <p>{instructions} - <span className='optional'>optional</span></p>
      </div>
    );
};

export default Direction;