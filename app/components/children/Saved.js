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
              {this.props.results.map(({_id, title, date, url}) => (
              <div className="row" key= {_id}>
                  <div className="well">
                    <a href={url} target="_blank"><h3>{title}</h3></a>
                    <h5>Date published:{date}</h5>
                  </div>
              </div>))}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = Saved;