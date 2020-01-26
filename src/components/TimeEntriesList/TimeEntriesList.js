import React from 'react';
import PropTypes from 'prop-types';
import TimeEntryListItem from './TimeEntryListItem';
import Pagination from '../Pagination/Pagination';
import { DEFAULT_MAX_PAGES } from '../../constants/pagination';

const TimeEntriesList = ({
  timeEntries,
  totalPages,
  currentPage,
  deleteEntry,
  loadTimeEntries,
}) => (
  <div id="time-entries-table" className="container">
    <table className="table is-fullwidth is-striped is-narrow">
      <thead>
        <tr>
          <th>Id</th>
          <th>Activity</th>
          <th>Project</th>
          <th className="is-hidden-mobile">Start date</th>
          <th className="is-hidden-mobile">End date</th>
          <th>Time spent</th>
          <th>
            <span className="icon">
              <i className="fa fa-trash" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>{mapEntries(timeEntries, deleteEntry)}</tbody>
    </table>

    <Pagination
      totalPages={totalPages}
      activePage={currentPage}
      maxPages={DEFAULT_MAX_PAGES}
      loadPage={loadTimeEntries}
    />
  </div>
);

const mapEntries = (entries, deleteHandler) =>
  entries.map((entry) => (
    <TimeEntryListItem
      id={entry.id}
      key={entry.id}
      activity={entry.description}
      project={entry.project.name}
      startDate={entry.startDate}
      endDate={entry.endDate}
      deleteHandler={deleteHandler}
    />
  ));

TimeEntriesList.propTypes = {
  timeEntries: PropTypes.array,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  deleteHandler: PropTypes.func,
  loadTimeEntries: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func,
};
export default TimeEntriesList;
