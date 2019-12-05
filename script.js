// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $("#btn_exemple").click(function(){
    	$("#exemple").append("<h1>Ceci est un test</h1>");
    });
});