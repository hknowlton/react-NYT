var React = require("react");
var queryNYT = require("../../helper")

class Search extends React.Component{
  constructor() {
      super();
      //binding search function
      this.search = this.search.bind(this);
  }

  search(event) {
    event.preventDefault();
    console.log("search button clicked")
    var data = {};

    for(var input in this.refs) {
        data[input] = this.refs[input].value;
        this.refs[input].value = '';
    }
    // //--------------------------
    // //event, term, start, end
    // //console.log(React.findDOMNode(this.refs['topic'].focus()));
    // //----------------------
    console.log(data);
    //Connect to the API- run query
    queryNYT.runQuery(data.topic, data.start, data.stop).then(function (data) {
        this.props.setParent(data);
    }.bind(this));
    //render articles in container

  }

  render(){
      return(
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
                              <button type="submit" className="btn btn-primary" onClick={this.search}>Submit</button>
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
                            {this.props.results.toString()}
                        </p>
                    </div>
                </div>
              </div>
            </div>
      )
  }
};

module.exports = Search;
