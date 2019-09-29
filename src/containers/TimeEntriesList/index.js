import { connect } from "react-redux";
import { loadTimeEntries, deleteEntry } from "../../state/actions";
import TimeEntriesList from "./TimeEntriesList";

const mapStateToProps = state => {
  return {
    entries: state.timeEntries
  };
};

const mapDispatchToProps = { loadTimeEntries, deleteEntry };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesList);
