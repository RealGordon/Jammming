import { App } from './Components/App/App.js';
import { Spotify } from "./utils/Spotify.js";
let accessToken;
accessToken = Spotify.getAccessToken();

if (accessToken) {
  window.accessToken = accessToken;
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
}