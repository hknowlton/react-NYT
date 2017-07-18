// Include React
var React = require("react");
var Saved = require("./children/Saved")
var Search = require("./children/Search")

class Main extends React.Component{
  constructor(){
      super();

      this.state = {
          topic:'',
          startYear: 0,
          endYear:'',
          data: [],
          saved: false
      };
      this.setParent = this.setParent.bind(this);
  }

  setParent(data){
      //binding our axios results to the parent state of data (store in array)
      this.setState({data: data});
  }

  setSaved(data){
    this.setState({results: results});
  }

  render(){
      return(
        <div className="container">
          <div className="jumbotron">
            <h2><strong>NYT Article Scrubber</strong></h2>
            <hr />
            <p><em>Search for and annotate articles of interest!</em></p>
          </div>
          <div className="row">
            <Search setParent={this.setParent} results={this.state.data}/>
            <Saved savedArticles={this.state.data}/> 
          </div>
        </div>
      );
  }
}

// Export the component back for use in other files
module.exports = Main;