var time= 0;
var intervalPerso;

function closeDore(){
    $("#porte_close").attr("hidden",false);
    $("#porte_open").attr("hidden",true);
}

function avancer(personne){
    time++;


    let larg = personne.width();
    let pos = personne.offset().left;

    larg = larg * 1.02;
    pos = pos-1;
    personne.css({width: larg+"px", left :pos+"px"});
    var h = window.innerWidth;
    if(larg > (0.2*h) ){
        clearInterval(intervalPerso);
    }
};

$( document ).ready(function() {
	$( ".draggable" ).draggable({ containment: "#bureau", scroll: false });
    $("#porte_close").click(function(){
        if(intervalPerso!=null)
            return;
        $(this).attr("hidden",true);
        $("#porte_open").attr("hidden",false);
        var timeoutID = setTimeout(closeDore, 1000);
        let personne = $("#personne");
        personne.attr("hidden",false);
        personne.attr("src","characters/random1.png");
        intervalPerso = setInterval(avancer, 50, personne);
    });

});