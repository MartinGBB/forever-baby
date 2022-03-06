import React from 'react'
import CoverCard from './CoverCard';
import PropTypes from 'prop-types';

function CoverList({ covers }) {
  console.log(covers)
  return (
    <div>
      {
        covers.map(({ id, name, img }) => {
          return <CoverCard key={ id } src={ img } alt={ name } />
        })
      }
    </div>
  );
}

CoverList.propTypes = {
  covers: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CoverList;
