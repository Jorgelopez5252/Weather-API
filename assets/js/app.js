$(document).ready(function () {
  $("#search-button").on("click", function () {
    //get the value from our input form
    var searchTerm = $("#search-value").val();
    //call the weatherAPI function and pass in our searchTerm
    weatherAPI(searchTerm);
    //call the forcast function and pass in our searchTerm
    forecast(searchTerm);
  });

  function weatherAPI(searchTerm) {
    $.ajax({
      method: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchTerm +
        "&appid=66fa9b97478bf2b9d156815cabfc54c0&units=imperial"
    }).then(function (response) {
      const city = response.name;
      const wind = response.wind.speed;
      const humidity = response.main.humidity;
      const temp = response.main.temp;

      $("#city").text(city);
      $("#wind").text("Wind Speed: " + wind);
      $("#humidity").text("Humidity: " + humidity);
      $("#temp").text("Temp: " + temp);
    });
  }

  function forecast(searchTerm) {
    $.ajax({
      method: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        searchTerm +
        "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"
    }).then(function (response) {
      //the response returns an array that has a all of the forcast items.  we set that = to a variable
      const forcast = response.list;
      console.log(forcast[0]);
      //loop through the forcast array
      for (let i = 0; i < forcast.length; i++) {
        //if the text of dt_txt includes 15:00 then we will create a card with all of the info
        if (forcast[i].dt_txt.indexOf("15:00:00") !== -1) {
          //get all of the info from our result and store it in variables
          const date = forcast[i].dt_txt.split(" ")[0];
          const icon = forcast[i].weather[0].icon;
          const temp = forcast[i].main.temp;
          const humidity = forcast[i].main.humidity;

          //create a column
          const col = $("<div>").addClass("col");

          //creating our html card with jquery
          const card = $("<div>").addClass("card");

          //NEED TO DO create the body of the card with jquery///
          const body = $("<body>").addClass("body");

          //creating the card-title text with jquery
          const cardDate = $("<h5>").addClass("card-title").text(date);

          //creating the icon image with jquery
          const img = $("<img>").attr(
            "src",
            "http://openweathermap.org/img/w/" + icon + ".png"
          );

          //NEED TO DO create the temperature p tag with jquery similar to cardDate but you will be adding ptag
          const ptemp = $("<p>").addClass("card-title").text(temp);

          //NEED TO DO create the humidity p tag with jquery
          const phumidity = $("<p>").addClass("card-title").text(humidity);

          //append all of date, img, p tags to the card body
          body.append(cardDate, img, ptemp, phumidity);

          //NEED TO DO append the body to the card
          card.append(body);

          //NEED TO DO append card to column
          body.append(col);

          //NEED TO DO append the col to the forcast div in the html
          $(document).ready(function () {
            $("#forecast").click(function () {
              $("p").append("<p>Append text</p>.");
            });
          });
        }
      }
    });
  }
});
