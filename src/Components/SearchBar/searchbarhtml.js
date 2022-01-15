export default class SearchBar extends React.Component {
 
 constructor(props){
   super(props);
   this.search=this.search.bind(this);
 }
  search(e){
   const term= e.target.previousElementSibling.value;
   this.props.onSearch(term);
 }
  render(){
return (<div className="SearchBar">
  <input   placeholder="Enter A Song, Album, or Artist" />
  <button onClick={this.search} className="SearchButton">SEARCH</button>
</div>)
  }
}