window.onload = function()

		{
   		 var canvas = document.getElementById("myCanvas");
   		 if(!canvas)
   		   {
        		alert("Impossible de récupérer le canvas");
        		return;
  	           }	
   		 var context = canvas.getContext("2d");
   		 if(!context)
    		  {
     			 alert("Impossible de récupérer le context");
       			 return;
    		  }

  	    var diametreBalle = 30;
    		var posX = 1+diametreBalle/2;
    		var posY = 1+diametreBalle/2;
    		var vitesseX = 5;
    		var vitesseY = 5;
 	      var myInterval = setInterval(animer, 1000/30);