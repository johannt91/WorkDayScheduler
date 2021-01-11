$(document).ready(function() {//Wait for whole document to load before running javascript
    
    //sets date at the top of the page
    function setDate(){
        $("#currentDay").text(moment().format("MMM | Do | YYYY, h:mm:ss a"));
    }
    setInterval(setDate, 1000);//update time in real-time
    



    //time block states for past, present, and future
    function timeBlock() {
        var currentHour = moment().hour();

        $(".time-block").each(function() {
            //split the id of the class with time-block and parseInt in index 1 of array
            var timeBlockHour = parseInt($(this).attr("id").split("hour")[1]);

            //apply respective background colour depending on hour
            if(timeBlockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (timeBlockHour === currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
    }
    timeBlock();

}); //function end
