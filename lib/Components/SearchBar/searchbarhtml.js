export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(e) {
    const term = e.target.previousElementSibling.value;
    this.props.onSearch(term);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "SearchBar"
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Enter A Song, Album, or Artist"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.search,
      className: "SearchButton"
    }, "SEARCH"));
  }

}