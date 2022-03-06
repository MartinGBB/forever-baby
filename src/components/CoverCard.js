import React from 'react'
import { covers } from '../data/covers';

function CoverCard() {
  return (
    <div>
      {
        covers.map(({ id, img, name }) => {
          <div key={ id }>
            <img src={ img } alt={ name } />
          </div>
        })
      }
    </div>
  );
}

export default CoverCard;
