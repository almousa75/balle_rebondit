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
        function animer()

          {
             context.clearRect(0, 0, canvas.width, canvas.height);
                  
             context.beginPath();
             context.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
             context.fill(); 
             if(posX+diametreBalle/2 >= canvas.width || posX <= 0+diametreBalle/2)
              {
                  vitesseX *= -1;
              }
             if(posY+diametreBalle/2 >= canvas.height || posY <= 0+diametreBalle/2) 
                {
                  vitesseY *= -1;
              }
                 posX += vitesseX;
               posY += vitesseY;
         }
    }