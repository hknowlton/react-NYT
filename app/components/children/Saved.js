var React = require("react");
var queryNYT = require("../../helper")

class Saved extends React.Component{
  constructor() {
      super();
      //binding search function
      this.loadSaved = this.loadSaved.bind(this);
  }

  loadSaved() {
    queryNYT.getSaved()
    this.props.setSaved(results)
  }

  render(){
      return(
       <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3><button type="submit" className="btn btn-primary" onClick={this.loadSaved}>Load Saved Articles</button>
            </div>
            <div className="panel-body">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = Saved;