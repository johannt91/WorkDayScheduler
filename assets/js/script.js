$(document).ready(function() {//Wait for whole document to load before running javascript
    
    //sets date at the top of the page
    function setDate(){
        $("#currentDay").text(moment().format("MMM | Do | YYYY, h:mm:ss a"));
    }
    setInterval(setDate, 1000);//update time in real-time
    
    //Store tasks
    $(".saveBtn").on("click", function() {
        console.log(this);
    })


}); //function end
