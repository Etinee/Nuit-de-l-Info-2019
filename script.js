
var intervalPerso;
var characterID;

function closeDore(){
    $("#porte_close").attr("hidden",false);
    $("#porte_open").attr("hidden",true);
}

function avancer(personne){
    let larg = personne.width();
    let pos = personne.offset().left;
    console.log(randomi(5,10))

    larg = larg * 1.03;
    pos = pos-4;
    personne.css({width: larg+"px", left :pos+"px"});
    var h = window.innerWidth;
    if(larg > (0.2*h) ){
        clearInterval(intervalPerso);
        $("#ID_card").attr("hidden",false);
        $("#formulaire").attr("hidden",false);

        $("#name").append(PrenomGars[randomi(1,10)]);
        $("#lastName").append(Nom[randomi(1,10)]);
        let d = randomDate(new Date(1982, 0, 1), new Date(2002,31,1));
        var today = new Date();
        var age = Math.floor((today-d) / (365.25 * 24 * 60 * 60 * 1000));
        $("#birthday").append((((""+d.getDate()).length == 1) ?"0"+d.getDate():d.getDate() )+"/"+ (((""+d.getMonth()).length == 1) ? "0"+d.getMonth():d.getMonth())+"/"+d.getFullYear());
        $("#salary").append(randomi(0,500));
        $("#age").append(age);
        $("#nbchild").append(randomWithProbability());
        $("#id_photo").attr("src","characters/random"+characterID+".png");

    }
};

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


function randomi(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomWithProbability() {
  var notRandomNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,1,1,1,2,3];
  var idx = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[idx];
}

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
        characterID = randomi(1,18);
        personne.attr("src","characters/random"+characterID+".png");
        intervalPerso = setInterval(avancer, 50, personne);
    });
});

