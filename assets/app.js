$(document).ready(function(){
    $("#search-button").on("click", function(){
        var searchTearm = $("#search-value").val();
        $("#search-value").val("")
        weatherAPI(searchTearm);

    })
    function weatherAPI(searchTearm){
        $.ajax({
            type:"GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" +searchTearm +"&APPID=66fa9b97478bf2b9d156815cabfc54c0",
            dataType: "json",
            success: function(data){
                // was able to console log lat and long//
                var dataString= data(toString)
                function(dataString){
                    for (let i = 0; i < .length; i++) {
                        const element = array[i];
                        
                    }

                };
            }
        })
    }
})
// .then(function (response) {

//     $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//     $(".wind").text("Wind Speed: " + response.wind.speed);
//     $(".humidity").text("Humidity: " + response.main.humidity);
//     $(".temp").text("Temperature (F) " + response.main.temp);