$(document).ready(function() {//Wait for whole document to load before running javascript
    
    //retrieve from localStorage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    //sets date at the top of the page
    function setDate(){
        $("#currentDay").text(moment().format("MMM | Do | YYYY, h:mm:ss a"));
    }
    setInterval(setDate, 1000);//update time in real-time
    
    //Store tasks
    $(".saveBtn").on("click", function () {
        //get nearby values.
        var inputData = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, inputData);
    })


    //retrieve tasks
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = JSON.parse(localStorage.getItem("schedule"));

        if (schedule !== null) {
            $(this).children(".description").val(schedule);
        }
    });


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
