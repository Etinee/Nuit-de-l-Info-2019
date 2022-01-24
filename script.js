
var intervalPerso;
var characterID;
var datasChara= [];
var isEnter = false;
var slideIsSlide = false;
function closeDore(){
    $("#porte_close").attr("hidden",false);
    $("#porte_open").attr("hidden",true);
}

function avancer(personne){
    let larg = personne.width();
    let pos = personne.offset().left;

    larg = larg * 1.03;
    pos = pos-4;
    personne.css({width: larg+"px", left :pos+"px"});
    var h = window.innerWidth;
    if(larg > (0.2*h) ){
        isEnter = true;
        clearInterval(intervalPerso);
        $("#ID_card").attr("hidden",false);
        $("#formulaire").attr("hidden",false);

        let nom = (randomi(0,1) == 0) ?  PrenomGars[randomi(1,10)] : PrenomFille[randomi(1,10)];
        let prenom = Nom[randomi(1,10)];

        $("#name").append(prenom);
        $("#lastName").append(nom);
        let d = randomDate(new Date(1982, 0, 1), new Date(2002,31,1));
        let today = new Date();
        let age = Math.floor((today-d) / (365.25 * 24 * 60 * 60 * 1000));
        $("#birthday").append((((""+d.getDate()).length == 1) ?"0"+d.getDate():d.getDate() )+"/"+ (((""+d.getMonth()).length == 1) ? "0"+d.getMonth():d.getMonth())+"/"+d.getFullYear());
        let salaire = randomi(0,5000);
        $("#salary").append(salaire);
        $("#age").append(age);
        let child = randomWithProbability();
        let bac = randomi(0,1);
        $("#bac").append(bac==0?"Oui":"Non");
        $("#nbchild").append(child);
        $("#id_photo").attr("src","characters/random"+characterID+".png");
        let demande = aides[randomi(0,6)];
        $("#demande").append(demande.acro);
        let pro = randomi(2,28);
        let profession = pro;
        $("#profession").append(profession);
        let status = (pro >= 22)?"Autonome":"A charge";
        let nationalite = Nationalite[randomi(0,Nationalite.length)];
        $("#statut").append(status);
        $("#nationalite").append(nationalite);
        datasChara["nom"]=nom;
        datasChara["profession"]=profession;
        datasChara["age"]=age;
        datasChara["salaire"]=salaire;
        datasChara["child"]=child;
        datasChara["demande"]=demande;
        datasChara["bac"]=bac;
        datasChara["status"]=status;
        datasChara["nationalite"]=nationalite;

    }
};


function gagne(){
    alert("C'est juste");
}
function perdu(){
    alert("Vous vous êtes trompé");
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function testDemande(response){
    let personne = $("#personne");
    personne.attr("hidden",true);
    let isTrue;
    slideIsSlide = false;
             $( "#Yes_no" ).animate({
            left:"+=360"
        }, 500, "linear", function() {
        });
    intervalPerso = null;
    $(".formulaire").empty();
    $(".draggable").attr("hidden",true);
    personne.css({width: "5%", left :"46%"});

    switch( datasChara["demande"].acro) {
        case "ASAA":
        if(datasChara["age"]<=datasChara["demande"].age_max && datasChara["bac"]==0 && datasChara["status"] == "Autonome" && datasChara["salaire"] >= 250){
            isTrue = true;
        }else{
            isTrue = false;
        }
        if(response == isTrue){
            gagne();
        }else{
            perdu();
        }
    // code block
    break;
    case "BCS":
    if(datasChara["age"]<=datasChara["demande"].age_max && datasChara["bac"]==0 && datasChara["salaire"] <= 500){
        isTrue = true;
    }else{
        isTrue = false;
    }
    if(response == isTrue){
        gagne();
    }else{
        perdu();
    }


    // code block
    break;

    case "ASAP":
    if(datasChara["age"]<=datasChara["demande"].age_max && datasChara["bac"]==0 && datasChara["salaire"] <= 500 && datasChara["profession"] <= 21 ){
        isTrue = true;
    }else{
        isTrue = false;
    }
    if(response == isTrue){
        gagne();
    }else{
        perdu();
    }
    break;

    case "BFSS":
    if(datasChara["profession"] <= 14 && datasChara["profession"] >= 10 ){
        isTrue = true;
    }else{
        isTrue = false;
    }
    if(response == isTrue){
        gagne();
    }else{
        perdu();
    }

    break;
    case "Erasmus":
    if(datasChara["nationalite"] != "Français"){
        isTrue = true;
    }else{
        isTrue = false;
    }
    if(response == isTrue){
        gagne();
    }else{
        perdu();
    }
    break;
    case "FSDIE Social":
    if(datasChara["status"] == "Autonome" && datasChara["salaire"] == 0){
                isTrue = true;
    }else{
        isTrue = false;
    }
    if(response == isTrue){
        gagne();
    }else{
        perdu();
    }
    break;
    default:
    // code block
}
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
    $(".response").click(function(){
        if($(this).attr("id") == "Yes"){
            testDemande(true);
        }else{
            testDemande(false);
        }
    })
	$( ".draggable" ).draggable({ containment: "#bureau", scroll: false });
    $("#porte_close").click(function(){
        if(intervalPerso!=null && intervalPerso != false){
            console.log(intervalPerso)
            return;
        }
        $(this).attr("hidden",true);
        $("#porte_open").attr("hidden",false);
        var timeoutID = setTimeout(closeDore, 1000);
        let personne = $("#personne");
        personne.attr("hidden",false);
        characterID = randomi(1,18);
        personne.attr("src","characters/random"+characterID+".png");
        intervalPerso = setInterval(avancer, 50, personne);
    });
    $("#slide").click(function(){
        if(slideIsSlide != true && isEnter == true ){
            slideIsSlide = true;
            $( "#Yes_no" ).animate({
                left:"-=360"
            }, 500, "linear", function() {
            });
        }
        else if(slideIsSlide == true){
         slideIsSlide = false;
         console.log("Click")
         $( "#Yes_no" ).animate({
            left:"+=360"
        }, 500, "linear", function() {
        });
     }


 });
});

