import TrackList from '../Tracklist/tracklistHtml.js';
export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      playlistID: null
    };
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  handleSave(e) {
    e.preventDefault();
    this.props.onSave().then(id => {
      loader("off");
      this.setState({
        playlistID: id
      });
    }).then(() => webNotify(this.props.playlistName)).catch(e => {
      loader("off");
      console.log(e);
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "Playlist"
    }, /*#__PURE__*/React.createElement("form", {
      action: "#",
      id: "playlistform",
      onSubmit: this.handleSave
    }, /*#__PURE__*/React.createElement("p", null, "Playlist name: ", this.props.playlistName), /*#__PURE__*/React.createElement("input", {
      name: "playlistName",
      required: true,
      defaultValue: 'New Playlist',
      onChange: this.handleNameChange
    })), /*#__PURE__*/React.createElement(TrackList, {
      isRemoval: true,
      removeTrack: this.props.removeTrack,
      tracks: this.props.playlistTracks
    }), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      form: "playlistform",
      className: "Playlist-save"
    }, "SAVE TO SPOTIFY"));
  }

}