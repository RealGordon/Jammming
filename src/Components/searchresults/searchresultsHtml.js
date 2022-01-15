import TrackList from '../Tracklist/tracklistHtml.js';

export default class SearchResults extends React.Component {
  componentDidUpdate(){
    loader("off");
  }
render(){
  // put <TrackList /> in the div
  return (<div className="SearchResults">
  <h2>Results</h2>
  <TrackList    
  tracks={this.props.searchResults}  addTrack={this.props.addTrack }/>
</div>)
}
}