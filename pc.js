class PC{
  constructor(){
    document.write('<div class="pc">'+
    	'<div class="screen">'+
    			'<div class="ligne un">'+
    				'<div class="case">'+
            
    				'</div>'+
    				'<div class="case">'+

    				'</div>'+
    				'<div class="case">'+

    				'</div>'+
    			'</div>'+
    			'<div class="ligne deux">'+
    				'<div class="case">'+

    				'</div>'+
    				'<div class="case">'+

    				'</div>'+
    				'<div class="case">'+

    				'</div>'+
    			'</div>'+
    	'</div>'+
    	'<div class="btn_power">'+

    	'</div>'+
    '</div>'+

    '<style>'+
    	'.pc{'+
        'display:flex;'+
        'flex-direction:column;'+
    	'}'+

    	'.screen{'+
        'background-image: url("windows.jpg");'+
        'height: 125%;'+
        'width: 40%;'+
        'position : absolute;'+
        'top: -90%;'+
        'right: 100px;'+
        'display:flex;'+
        'flex-direction: column;'+
        'overflow:scroll;'+
    	'}'+
      '.btn_power{'+
        'background-color : #000000;'+
        'height:10%;'+
        'width:40%;'+
        'top:35%;'+
        'right:100px;'+
        'position:absolute;'+
      '}'+
    	'.ligne{'+
        'display:flex;'+
        'flex-direction:row;'+
        'height:50%;'+
        'margin:10px;'+
    	'}'+

    	'.un{'+

    	'}'+
    	'.deux{'+

    	'}'+
    	'.trois{'+

    	'}'+
    	'.case{'+
        'background-image: url("fenetrepng.png");'+
        'margin:10px;'+
        'height:100%;'+
        'width:100%;'+
    	'}'+

    '</style>'
  );
  }


}
