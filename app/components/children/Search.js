var React = require("react");

var Search = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              <p>
                Scraped articles show here
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Search;