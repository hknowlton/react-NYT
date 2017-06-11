var React = require("react");
var queryNYT = require("../../helper")

var Search = React.createClass({
search: function() {
    //event, term, start, end
   
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
                      <label for="topic">Topic</label>
                      <textarea className="form-control" id="topic" rows="1"></textarea>
                      <label for="startyear">Start Year</label>
                      <textarea className="form-control" id="topic" rows="1" type="number"></textarea>
                      <label for="endyear">End Year</label>
                      <textarea className="form-control" id="topic" rows="1" type="number"></textarea>
                      <button type="submit" className="btn btn-primary" onSubmit={this.search()}>Submit</button>
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
