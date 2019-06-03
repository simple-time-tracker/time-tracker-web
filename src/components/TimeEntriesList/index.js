import { connect } from "react-redux";
import { loadTimeEntries } from "../../state/actions";
import TimeEntriesList from "./TimeEntriesList";

const mapStateToProps = state => {
  return {
    entries: state.timeEntries
  };
};

const mapDispatchToProps = { loadTimeEntries };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesList);
