var React = require("react");
var queryNYT = require("../../helper")

var Search = React.createClass({
search: function(event) {
  event.preventDefault();
    //event, term, start, end
    console.log(React.findDOMNode(this.refs['topic'].focus()));
   
  console.log("search button clicked")
    //queryNYT.runQuery(term, start, end)
    //render articles in container
},

render: function() {
    return (
    <div className="container">
      <div className="col-lg-12">
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                      <label htmlFor="topic">Topic</label>
                      <textarea className="form-control" id="topic" rows="1" ref="topic"></textarea>
                      <label htmlFor="startyear">Start Year</label>
                      <input className="form-control" id="topic" rows="1" type="number" ref="start"></input>
                      <label htmlFor="endyear">End Year</label>
                      <input className="form-control" id="topic" rows="1" type="number" ref="stop"></input>
                      <button type="submit" className="btn btn-primary" onSubmit={this.search}>Submit</button>
                    </div>
                </form>
            </div>
        </div>   
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
