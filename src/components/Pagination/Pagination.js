import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { range } from 'underscore';
import PaginationItem from './PaginationItem';

class Pagination extends Component {
  static propTypes = {
    totalPages: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    maxPages: PropTypes.number.isRequired,
    loadPage: PropTypes.func.isRequired,
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
    const { totalPages, activePage, maxPages, loadPage } = this.props;

    if (totalPages <= maxPages) {
      return renderItemsRange(1, totalPages, activePage, loadPage);
    }

    const twoEllipses =
      totalPages / 2 > maxPages - 1 &&
      activePage > maxPages - 2 &&
      activePage + maxPages - 1 <= totalPages;

    if (twoEllipses) {
      return renderTwoEllipsisCase(totalPages, maxPages, activePage, loadPage);
    }

    const isNearerToFirstPage = totalPages - activePage > activePage;
    return isNearerToFirstPage
      ? renderNearerStartCase(totalPages, maxPages, activePage, loadPage)
      : renderNearerEndCase(totalPages, maxPages, activePage, loadPage);
  };
}

const renderItemsRange = (from, to, activePage, loadPage) =>
  range(from, to + 1).map((currentPage) => (
    <PaginationItem
      key={currentPage}
      pageNumber={currentPage}
      isActive={currentPage === activePage}
      loadPage={loadPage}
    />
  ));

const renderTwoEllipsisCase = (totalPages, maxPages, activePage, loadPage) => {
  const numberOfPagesBeforeAndAfter = Math.floor((maxPages - 2) / 2);
  const paginatedItems = renderItemsRange(
    activePage - numberOfPagesBeforeAndAfter,
    activePage + numberOfPagesBeforeAndAfter,
    activePage,
    loadPage
  );

  return [
    <PaginationItem key={1} pageNumber={1} loadPage={loadPage} />,
    <PaginationItem key="first-ellipsis" isEllipsis={true} />,
    paginatedItems,
    <PaginationItem key="second-ellipsis" isEllipsis={true} />,
    <PaginationItem key={totalPages} pageNumber={totalPages} loadPage={loadPage} />,
  ];
};

const renderNearerStartCase = (totalPages, maxPages, activePage, loadPage) => {
  const paginatedItems = renderItemsRange(1, maxPages - 2, activePage, loadPage);
  return [
    paginatedItems,
    <PaginationItem key="first-ellipsis" isEllipsis={true} />,
    <PaginationItem key={totalPages} pageNumber={totalPages} loadPage={loadPage} />,
  ];
};

const renderNearerEndCase = (totalPages, maxPages, activePage, loadPage) => {
  const paginatedItems = renderItemsRange(
    totalPages - maxPages + 2,
    totalPages,
    activePage,
    loadPage
  );
  return [
    <PaginationItem key={1} pageNumber={1} loadPage={loadPage} />,
    <PaginationItem key="first-ellipsis" isEllipsis={true} />,
    paginatedItems,
  ];
};
export default Pagination;
