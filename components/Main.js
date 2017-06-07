// Include React
var React = require("react");
var Main = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2><strong>NYT Article Scrubber</strong></h2>
          <p><em>Search for and annotate articles of interest!</em></p>
          <hr />
          <p>
            Add fields here to search
          </p>
        </div>
        <div className="row">
          {/* This code will dump the correct Child Component */}
          {this.props.children}
        </div>
      </div>
    );
  }
});
// Export the componen back for use in other files
module.exports = Main;