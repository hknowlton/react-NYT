// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key (Replace with your own API Key)
var APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper Functions
var queryNYT = {
  // This will run our query.
  // runQuery: function(term, start, end) {

  //   // Adjust to get search terms in proper format
  //   var formattedTerm = term.trim();
  //   var formattedStart = start.trim() + "0101";
  //   var formattedEnd = end.trim() + "1231";

  //   return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
  //     params: {
  //       "api-key": APIKey,
  //       "q": formattedTerm,
  //       "begin_date": formattedStart,
  //       "end_date": formattedEnd
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("Axios Results", results.data.response);
  //     return results.data.response;
  //   });
  // },
  // // This will return any saved articles from our database
  // getSaved: function() {
  //   return axios.get("/api/saved")
  //     .then(function(results) {
  //       console.log("axios results", results);
  //       return results;
  //     });
  // },
  // // This will save new articles to our database
  // postSaved: function(title, date, url) {
  //   var newArticle = { title: title, date: date, url: url };
  //   return axios.post("/api/saved", newArticle)
  //     .then(function(response) {
  //       console.log("axios results", response.data._id);
  //       return response.data._id;
  //     });
  // },
  // // This will remove saved articles from our database
  // deleteSaved: function(title, data, url) {
  //   return axios.delete("/api/saved", {
  //     params: {
  //       "title": title,
  //       "data": data,
  //       "url": url
  //     }
  //   })
  //   .then(function(results) {
  //     console.log("axios results", results);
  //     return results;
  //   });
  // }
};

//Export queryNYT function
module.exports = queryNYT;