import Track from '../Track/trackhtml.js'

export default class TrackList extends React.Component {
render(){
    //<!-- You will add a map method that renders a set of Track components in the div -->
    
    if(this.props.isRemoval){
    return     (<div className="TrackList">
        <ul>
            {this.props.tracks.map((track)=>{
               return  <Track 
               isRemoval={this.props.isRemoval} 
               key={track.id} track={track} 
                onClick={this.props.addTrack||this.props.removeTrack} />
            })}
            
        </ul>
     </div>)
    }
    return (<div className="TrackList">
   <ul>
       {this.props.tracks.map((track)=>{
          return  <Track      
          key={track.id} track={track} 
           onClick={this.props.addTrack||this.props.removeTrack} />
       })}
       
   </ul>
</div>)
}}