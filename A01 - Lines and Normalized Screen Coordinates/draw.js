function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are a few random lines, you will have to replace with your code
	//line(0.3, 0.3,-0.4,-0.4);
	//line(0.4,-0.4,-0.4, 0.4);
	//for(i = 0; i <= 16; i++) {
	//	y = 1.6*Math.random() - 0.5;
	//	line(0.4, y,-0.4, y);
	//}


	/* straight lines */

	   line(-0.5,0.3,0.3,0.3); 
	   line(-0.5,-0.3,0.3,-0.3); 
	   line(-0.5,0.3,-0.5,-0.3);

	/* semi-circle line */

	radius = x = y = 0.3;
	to_rad = Math.PI/180; // Math.cos and Math.sin work in radians
	for(i = 0; i < 64; i ++){
		delta_theta = i / 64 * 180;
		x_new = 0.3 + radius * Math.cos((90 - delta_theta ) * to_rad);
		y_new = 0 + radius * Math.sin((90 - delta_theta) * to_rad);
		line(x,y,x_new,y_new);
		x = x_new;
		y = y_new;
	}


}
