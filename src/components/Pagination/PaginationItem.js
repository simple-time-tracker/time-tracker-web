import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const PaginationItem = ({ pageNumber, isActive, isEllipsis }) => {
  return isEllipsis ? renderThreeDots() : renderItem(pageNumber, isActive);
};

const getIsActiveCssClass = (isActive) => (isActive ? 'is-current' : '');

const renderThreeDots = () => (
  <li>
    <span className="pagination-ellipsis">&hellip;</span>
  </li>
);

const renderItem = (pageNumber, isActive) => (
  <li>
    <a
      className={`pagination-link ${getIsActiveCssClass(isActive)}`}
      aria-label={`Goto page ${pageNumber}`}
    >
      {pageNumber}
    </a>
  </li>
);

PaginationItem.propTypes = {
  pageNumber: PropTypes.number,
  isActive: PropTypes.bool,
  isEllipsis: PropTypes.bool,
};

export default PaginationItem;
