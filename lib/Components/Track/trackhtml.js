export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onClick(this.props.track);
  }

  removeTrack() {
    this.props.onClick(this.props.track);
  }

  getAlbum(a) {
    if (typeof a === "string") return a;
    return a.name;
  }

  getArtists(a) {
    if (typeof a === "string") return a;
    const artists = [];

    for (const artist of a) {
      artists.push(artist.name);
    }

    return artists.toString();
  }

  render() {
    /*
    return (<div class="Track">
      <div class="Track-information">
        <h3><!-- track name will go here --></h3>
        <p><!-- track artist will go here--> | <!-- track album will go here --></p>
      </div>
      <button class="Track-action"><!-- + or - will go here --></button>
    </div>)
    */
    const track = this.props.track;
    const {
      name,
      album
    } = track;
    let artists = track.artist || track.artists;
    const isRemoval = this.props.isRemoval;
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", {
      className: "Track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Track-information"
    }, /*#__PURE__*/React.createElement("h3", null, name), /*#__PURE__*/React.createElement("p", null, this.getArtists(artists), " | Album: ", this.getAlbum(album))), /*#__PURE__*/React.createElement("button", {
      className: "Track-action",
      onClick: this.addTrack
    }, isRemoval ? "-" : "+")));
  }

}