import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { range } from 'underscore';
import PageNumberButton from './PageNumberButton';

class Pagination extends Component {
  static propTypes = {
    totalPages: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    maxPages: PropTypes.number.isRequired,
    loadPage: PropTypes.func.isRequired,
  };

  isPreviousButtonDisabled = () => {
    const { activePage } = this.props;
    return activePage === 1;
  };

  isNextButtonDisabled = () => {
    const { activePage, totalPages } = this.props;
    return activePage === totalPages;
  };

  onPreviousButtonClickAction = () => {
    const { loadPage, activePage } = this.props;
    if (!this.isPreviousButtonDisabled()) {
      loadPage(activePage - 1);
    }
  };

  onNextButtonClickAction = () => {
    const { loadPage, activePage } = this.props;
    if (!this.isNextButtonDisabled()) {
      loadPage(activePage + 1);
    }
  };

  render = () => {
    const { totalPages, activePage } = this.props;
    return (
      <nav
        className="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        {totalPages > 1 && (
          <ul className="pagination-list">
            <li
              key="lessThan"
              className="pagination-link"
              disabled={this.isPreviousButtonDisabled()}
              onClick={() => this.onPreviousButtonClickAction()}
            >
              &lt;
            </li>
            {this.renderItems(totalPages, activePage)}
            <li
              key="greaterThan"
              className="pagination-link"
              disabled={this.isNextButtonDisabled()}
              onClick={() => this.onNextButtonClickAction()}
            >
              &gt;
            </li>
          </ul>
        )}
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

const renderEllipsis = (key) => (
  <li key={key}>
    <span className="pagination-ellipsis">&#8230;</span>
  </li>
);

const renderItemsRange = (from, to, activePage, loadPage) =>
  range(from, to + 1).map((currentPage) => (
    <PageNumberButton
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
    <PageNumberButton key={1} pageNumber={1} loadPage={loadPage} />,
    renderEllipsis('first-ellipsis'),
    paginatedItems,
    renderEllipsis('second-ellipsis'),
    <PageNumberButton
      key={totalPages}
      pageNumber={totalPages}
      loadPage={loadPage}
    />,
  ];
};

const renderNearerStartCase = (totalPages, maxPages, activePage, loadPage) => {
  const paginatedItems = renderItemsRange(1, maxPages - 1, activePage, loadPage);
  return [
    paginatedItems,
    renderEllipsis('first-ellipsis'),
    <PageNumberButton
      key={totalPages}
      pageNumber={totalPages}
      loadPage={loadPage}
    />,
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
    <PageNumberButton key={1} pageNumber={1} loadPage={loadPage} />,
    renderEllipsis('first-ellipsis'),
    paginatedItems,
  ];
};
export default Pagination;
