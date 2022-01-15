import SearchResults  from '../searchresults/searchresultsHtml.js';
import Playlist from '../Playlist/playlisthtml.js';
import SearchBar from '../SearchBar/searchbarhtml.js';
import { Spotify } from '../../utils/Spotify.js';
import data from "./data.js";
const   {useState,useEffect} =React;
function Avatar(){
  const [userName,setUserName]=useState("");
  useEffect(()=>{
  if (Spotify.getAccessToken())Spotify.getUserName().then(name=>{
      if (name)setUserName(name);
      },[]);
   
  })
  if (!userName)return null;
  return  (<div className="avatar">
  <div className="chip" >
  <img src="images/profile_placeholder.png"  width="96" height="96" />
  {userName }
</div></div>)
}
export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchResults:data
    ,playlistName:"",playlistTracks:data.slice(0,4)} ;
this.removeTrack=this.removeTrack.bind(this);
this.addTrack=this.addTrack.bind(this);
this.updatePlaylistName=this.updatePlaylistName.bind(this);
this.savePlaylist=this.savePlaylist.bind(this);
this.search=this.search.bind(this);
}

savePlaylist(){
const tracksURI=this.state.playlistTracks.map(track=>track.uri);
const playlistName=this.state.playlistName;
if(!tracksURI.length) {
  loader("off");
  alert("could not save, empty playlist")
 return  Promise.reject(" empty playlist");
}
if (playlistName===""){
  alert("no playlist name?")
  return Promise.reject("no playlist name")}
loader("on");
return Spotify.savePlaylist(playlistName, tracksURI)
}
updatePlaylistName(name){
this.setState({playlistName:name})
}
addTrack(track){
if(!this.state.playlistTracks.some(v=>{
  return (v.id===track.id && v.name===track.name)})){
   // let arr;
  //( arr=this.state.playlistTracks.slice()).push(track);
  this.setState({playlistTracks:[...this.state.playlistTracks,track]})
}}
removeTrack(track){
  this.setState({playlistTracks:this.state.playlistTracks.filter(v=>v.id!==track.id)})
}
search(term){
  loader("on");
Spotify.search(term).then(tracks=>{
  this.setState({searchResults:tracks})
}).catch(e=>{
  console.log(e.message);
  loader("off");
  alert("something went wrong, check your internet connection")
});

}
  render(){
return <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <Avatar />
  <div className="App">
    <SearchBar onSearch={this.search} />
    <div className="App-playlist">
      <SearchResults addTrack={this.addTrack} searchResults={this.state.searchResults} />
      <Playlist onSave={this.savePlaylist} 
      onNameChange={this.updatePlaylistName} 
       removeTrack={this.removeTrack} 
       playlistName={this.state.playlistName} 
       playlistTracks={this.state.playlistTracks} />
    </div>
  </div>
</div>
  }
}
