var React = require("react");
var queryNYT = require("../../helper")

var Saved = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className="panel-body">
              <p>
                Saved articles populate here
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Saved;