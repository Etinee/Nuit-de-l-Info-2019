// A $( document ).ready() block.
function closeDore(){
    $("#porte_close").attr("hidden",false);
    $("#porte_open").attr("hidden",true);
}

$( document ).ready(function() {
	$( ".draggable" ).draggable({ containment: "#bureau", scroll: false });
    $("#porte_close").click(function(){
        $(this).attr("hidden",true);
        $("#porte_open").attr("hidden",false);
        var timeoutID = setTimeout(closeDore, 1000);
        $("#personne").attr("hidden",false);
        $("#personne").attr("src","characters/random1.png");
    });

});