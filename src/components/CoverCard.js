import React from 'react'
import { covers } from '../data/coverData';
import Cover from './Cover';

function CoverCard() {
  return (
    <div>
      {
        covers.map(({ id, img, name }) => {
          <div key={ id }>
            <Cover src={ img } alt={ name } />
          </div>
        })
      }
    </div>
  );
}

export default CoverCard;
