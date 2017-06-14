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
          data: []
      };
      this.setParent = this.setParent.bind(this);
  }

  setParent(data){
      //binding our axios esults to the parent state of datea (store in array)
      this.setState({data: data});
      console.log(this.state.data);

      // var result = this.state.data;
      //
      // console.log(result);

      // result.map(function (el, index) {
      //     console.log(el);
      // });
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
            <Saved /> 
          </div>
        </div>
      );
  }
}

// Export the componen back for use in other files
module.exports = Main;