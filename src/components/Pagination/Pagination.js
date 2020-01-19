import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { range } from 'underscore';
import PaginationItem from './PaginationItem';

class Pagination extends Component {
  static propTypes = {
    totalPages: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    maxPages: PropTypes.number.isRequired,
  };

  render = () => {
    const { totalPages, activePage } = this.props;
    return (
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          <li key="lessThan" className="pagination-link">
            &lt;
          </li>
          {this.renderItems(totalPages, activePage)}
          <li key="greaterThan" className="pagination-link">
            &gt;
          </li>
        </ul>
      </nav>
    );
  };

  renderItems = () => {
    const { totalPages, activePage, maxPages } = this.props;

    if (totalPages <= maxPages) {
      return renderItemsRange(1, totalPages, activePage);
    }

    const twoEllipses =
      totalPages / 2 > maxPages - 1 &&
      activePage > maxPages - 2 &&
      activePage + maxPages - 1 <= totalPages;

    if (twoEllipses) {
      return renderTwoEllipsisCase(totalPages, maxPages, activePage);
    }

    const isNearerToFirstPage = totalPages - activePage > activePage;
    return isNearerToFirstPage
      ? renderNearerStartCase(totalPages, maxPages, activePage)
      : renderNearerEndCase(totalPages, maxPages, activePage);
  };
}

const renderItemsRange = (from, to, activePage) =>
  range(from, to + 1).map((currentPage) => (
    <PaginationItem
      key={currentPage}
      pageNumber={currentPage}
      isActive={currentPage === activePage}
    />
  ));

const renderTwoEllipsisCase = (totalPages, maxPages, activePage) => {
  const numberOfPagesBeforeAndAfter = Math.floor((maxPages - 2) / 2);
  const paginatedItems = renderItemsRange(
    activePage - numberOfPagesBeforeAndAfter,
    activePage + numberOfPagesBeforeAndAfter,
    activePage
  );

  return [
    <PaginationItem key={1} pageNumber={1} />,
    <PaginationItem key="first-ellipsis" isEllipsis={true} />,
    paginatedItems,
    <PaginationItem key="second-ellipsis" isEllipsis={true} />,
    <PaginationItem key={totalPages} pageNumber={totalPages} />,
  ];
};

const renderNearerStartCase = (totalPages, maxPages, activePage) => {
  const paginatedItems = renderItemsRange(1, maxPages - 2, activePage);
  return [
    paginatedItems,
    <PaginationItem key="first-ellipsis" isEllipsis={true} />,
    <PaginationItem key={totalPages} pageNumber={totalPages} />,
  ];
};

const renderNearerEndCase = (totalPages, maxPages, activePage) => {
  const paginatedItems = renderItemsRange(
    totalPages - maxPages + 2,
    totalPages,
    activePage
  );
  return [
    <PaginationItem key={1} pageNumber={1} />,
    <PaginationItem key="first-ellipsis" isEllipsis={true} />,
    paginatedItems,
  ];
};
export default Pagination;
