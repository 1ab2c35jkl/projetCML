var canva=document.getElementById("can");
	var context=canva.getContext("2d");
		context.beginPath();
		context.moveTo(200,200);
		context.lineTo(300,300);
		context.lineTo(300,400);
		context.lineTo(100,400);
		context.lineTo(100,300);
		context.lineTo(200,200)
		context.stroke();
		context.fillStyle="#FFCC66";
		context.closePath();
		context.strokeStyle="blue";
		context.fill();


		
		 context.beginPath();
		context.rect(255,187,30,60);
		context.stroke();
		context.fillStyle="#FFCC66";
		context.closePath();
		context.fill();

                                                                   

		context.beginPath();
		context.rect(250,175,40,10);
		context.stroke();
		context.fillStyle="#0000CC";
		context.closePath();
		context.fill();


		context.beginPath();
		context.rect(170,370,60,10);
		context.stroke();
		context.fillStyle="#FFCC66";
		context.closePath();
		context.fill()