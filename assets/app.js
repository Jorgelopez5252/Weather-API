$(document).ready(function(){
    $("#search-button").on("click", function(){
        var searchTearm = $("#search-value").val();
        $("#search-value").val("")
        weatherAPI(searchTearm);

    })
    function weatherAPI(searchTearm){
        $.ajax({
            type:"GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" +searchTearm +"&APPID=66fa9b97478bf2b9d156815cabfc54c0",
            dataType: "json",
            success: function(data){
                // was able to console log lat and long//
                console.log(data);
            }
        })
    }
})
// .then(function (response) {

//     $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//     $(".wind").text("Wind Speed: " + response.wind.speed);
//     $(".humidity").text("Humidity: " + response.main.humidity);
//     $(".temp").text("Temperature (F) " + response.main.temp);