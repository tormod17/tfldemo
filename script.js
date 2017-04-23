$("#search-bethnal-tube").on("click", function() {
    // api request to be sent on button click
    $.getJSON("https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=", function(data) {
    	var sorted = data.sort(function(a,b){
    		 return a.timeToStation - b.timeToStation;
    	})

    	sorted.forEach(function(train){

    	})
    	console.log(sorted);
		});
});
