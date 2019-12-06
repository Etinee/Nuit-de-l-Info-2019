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
    			'<div class="ligne trois">'+
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
        'background-color: #000000;'+
        'height: 500px;'+
        'width: 900px;'+
        'position : absolute;'+
        'top: -100%;'+
        'right: 100px;'+
        'display:flex;'+
        'flex-direction: column;'+
        'overflow:scroll;'+
    	'}'+
      '.btn_power{'+
        'background-color : #000000;'+
        'height:30px;'+
        'width:900px;'+
        'top:200px;'+
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
        'background-color: yellow;'+
        'margin:10px;'+
        'height:100%;'+
        'width:100%;'+
    	'}'+

    '</style>'
  );
  }


}
