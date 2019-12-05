// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $("#btn_exemple").click(function(){
    	for(let i = 0; i<50; i++)
    		$("#exemple").append("<h1>Ceci est un test</h1>");
    });
});