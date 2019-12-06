class Yes_no {
  constructor() {
    document.write(
      '<div class="Yes_no">'+
        '<div class="Yes">'+
          '<span>Accepter</span>'+
        '</div>'+
        '<div class="No">'+
          '<span>Refuser</span>'+
        '</div>'+
      '</div>');
    document.write(
      '<style>'+
      '.Yes_no{'+
    	'display: flex;'+
    	'flex-direction: row;'+
    	'width: 400px;'+
    	'height: 100px;'+
    	'background-color: yellow;'+
    	'color: #ffffff;'+
    	'position: absolute;'+
    	'bottom: 10%;'+
    	'right: -400px;'+
    '}'+

    '.Yes, .No{'+
    	'margin: 10px;'+
    	'padding: 5px;'+
    	'background-color: #ff0000;'+
    	'width: 100%;'+
    	'text-align: center;'+
    '}'+
    '</style>');
    $(".Yes").click(function(){
        console.log("dfsshfos");
    });
    $(".No").click(function(){
        console.log("No");
    });

  }

  affichage(on_off){
    if(on_off){
      $(".Yes_no").css("right", "0");
    }
    if(!on_off){
      $(".Yes_no").css("right", "-400px");
    }
  }
}
