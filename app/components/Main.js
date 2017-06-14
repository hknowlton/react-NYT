// Include React
var React = require("react");
var Saved = require("./children/Saved")
var Search = require("./children/Search")

var Main = React.createClass({
  //set state to pass to both children
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2><strong>NYT Article Scrubber</strong></h2>
          <hr />
          <p><em>Search for and annotate articles of interest!</em></p>
        </div>
        <div className="row">
          <Search />
          <Saved /> 
        </div>
      </div>
    );
  }
});
// Export the componen back for use in other files
module.exports = Main;