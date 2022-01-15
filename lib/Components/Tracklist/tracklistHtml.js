import Track from '../Track/trackhtml.js';
export default class TrackList extends React.Component {
  render() {
    //<!-- You will add a map method that renders a set of Track components in the div -->
    if (this.props.isRemoval) {
      return /*#__PURE__*/React.createElement("div", {
        className: "TrackList"
      }, /*#__PURE__*/React.createElement("ul", null, this.props.tracks.map(track => {
        return /*#__PURE__*/React.createElement(Track, {
          isRemoval: this.props.isRemoval,
          key: track.id,
          track: track,
          onClick: this.props.addTrack || this.props.removeTrack
        });
      })));
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "TrackList"
    }, /*#__PURE__*/React.createElement("ul", null, this.props.tracks.map(track => {
      return /*#__PURE__*/React.createElement(Track, {
        key: track.id,
        track: track,
        onClick: this.props.addTrack || this.props.removeTrack
      });
    })));
  }

}