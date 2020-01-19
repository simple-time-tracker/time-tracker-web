import React from 'react';
import PropTypes from 'prop-types';

const PaginationItem = (props) => {
  const { pageNumber, isActive, isEllipsis, loadPage } = props;
  return isEllipsis ? renderThreeDots() : renderItem(pageNumber, isActive, loadPage);
};

const getIsActiveCssClass = (isActive) => (isActive ? 'is-current' : '');

const renderThreeDots = () => (
  <li>
    <span className="pagination-ellipsis">&hellip;</span>
  </li>
);

const renderItem = (pageNumber, isActive, loadPage) => (
  <li>
    <a
      className={`pagination-link ${getIsActiveCssClass(isActive)}`}
      aria-label={`Goto page ${pageNumber}`}
      onClick={() => loadPage(pageNumber)}
    >
      {pageNumber}
    </a>
  </li>
);

PaginationItem.propTypes = {
  pageNumber: PropTypes.number,
  isActive: PropTypes.bool,
  isEllipsis: PropTypes.bool,
  loadPage: PropTypes.func,
};

export default PaginationItem;
