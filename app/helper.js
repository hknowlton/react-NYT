// Include the Axios library for HTTP requests
var axios = require("axios");

var APIkey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper Functions
var queryNYT = {
  //Run our query via the NYT API.
  runQuery: function(term, start, stop) {
    var formattedTerm = term.trim();
    var formattedStart = start.trim() + "0101";
    var formattedStop = stop.trim() + "1231";

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIkey,
        "q": formattedTerm,
        "begin_date": formattedStart,
        "end_date": formattedStop
      }
    })
    .then(function(results) {
      console.log("Axios Results from NYT", results.data.response);
      return results.data.response.docs;
    });
  },
    //Save new articles to the database
  postSaved: function(data) {
    axios.post('/api/saved', {
        title: data.title,
        date: data.date,
        url: data.url
      })
      .then(function (response) {
        console.log("post response" + response);
      })
      .catch(function (error) {
        console.log("error posting" + error);
      });
  },
  // This will return any saved articles from our database
  getSaved: function() {
    axios.get('/api/saved')
      .then(function (response) {
       return response;
      })
      .catch(function (error) {
        console.log("get error" + error);
      });
  },

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

module.exports = queryNYT;