import TrackList from '../Tracklist/tracklistHtml.js';
export default class SearchResults extends React.Component {
  componentDidUpdate() {
    loader("off");
  }

  render() {
    // put <TrackList /> in the div
    return /*#__PURE__*/React.createElement("div", {
      className: "SearchResults"
    }, /*#__PURE__*/React.createElement("h2", null, "Results"), /*#__PURE__*/React.createElement(TrackList, {
      tracks: this.props.searchResults,
      addTrack: this.props.addTrack
    }));
  }

}