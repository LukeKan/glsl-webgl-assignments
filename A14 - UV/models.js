
function buildGeometry() {
	var i,j;
	// Draws a pyramid --- To complete for the assignment. This is just the one in Assignment 13, where two 0.1, 0.1 UV components have been added to the vertices definitions. Such number must be replaced (differently for each vertexes), to obtain a proper Egyptian Pyramid
		var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944, 0.625, 0.5],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.75, 0.25],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.5, 0.25],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0, 0.875, 0.5],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0, 0.75, 0.25],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0, 1.0, 0.25],[0.0,1.0,0.0, -0.8944, 0.4472,0.0, 0.621, 0.25],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0, 0.75, 0.0],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0, 0.5, 0.0], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944, 0.625, 0.5],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.75, 0.25],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.5, 0.25], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0, 0.75,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0, 1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0, 1.0, 0.25], [-1.0,-1.0,1.0, 0.0,-1.0,0.0, 0.75,0.25]
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [
		[-1.0,-1.0,1.0, 0.0, 0.0,1.0, 0.125,0.875], [1.0,-1.0,1.0, 0.0, 0.0, 1.0, 0.25,0.875], [1.0,1.0,1.0, 0.0, 0.0, 1.0, 0.25,1.0], [-1.0,1.0,1.0, 0.0, 0.0, 1.0, 0.125,1.0], 
		//vertex for the front face
		[-1.0,-1.0,-1.0, 0.0, 0.0,-1.0, 0.125,0.75], [1.0,-1.0,-1.0, 0.0, 0.0,-1.0, 0.25,0.75], [1.0, 1.0, -1.0, 0.0, 0.0,-1.0, 0.25,0.625], [-1.0,1.0,-1.0, 0.0, 0.0,-1.0, 0.125,0.625], 
		// vertex for the rear face
		[-1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.125,0.5], [1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.25,0.5], [1.0, 1.0, -1.0, 0.0, 1.0, 0.0, 0.25,0.625], [-1.0, 1.0, -1.0, 0.0, 1.0, 0.0, 0.125,0.625], //vertex for the top face
		[-1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 0.125,0.875], [1.0, -1.0, 1.0, 0.0, -1.0, 0.0, 0.25,0.875], [1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 0.25,0.75 ], [-1.0, -1.0, -1.0, 0.0, -1.0, 0.0, 0.125,0.75], //vertex for the bottom face
		[-1.0, -1.0, -1.0, -1.0, 0.0, 0.0, 0.125,0.75], [-1.0, -1.0, 1.0, -1.0, 0.0, 0.0, 0.0,0.75], [-1.0, 1.0, 1.0, -1.0, 0.0, 0.0, 0.0,0.625], [-1.0, 1.0, -1.0, -1.0, 0.0, 0.0, 0.125,0.625], // vertex for the left face
		[1.0, -1.0, 1.0, 1.0, 0.0, 0.0, 0.375,0.75], [1.0, -1.0, -1.0, 1.0, 0.0, 0.0, 0.25,0.75], [1.0, 1.0, -1.0, 1.0, 0.0, 0.0, 0.25,0.625], [1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.375,0.625] // vertex for the right face
	];
	var ind2 = [0, 1, 2,  0, 2, 3,  //davanti
				4, 6, 5,  4, 7, 6,  //dietro
				8, 9, 10,  8, 10, 11,  //sopra
				12, 14, 13,  12, 15, 14,  //sotto
				16, 17, 18,  16, 18, 19,  //dx
				20, 21, 22,  20, 22, 23];//sx
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	
	
	// Draws a Cylinder --- To do for the assignment
	let radius = 1;
	var vert3 = [];
	let granularity = 100;
	//-------------------TOP CAP------------------------------
	y = 2.0;
	let first_top = 0;
	vert3.push([0.0, y, 0.0, 0.0, 1.0, 0.0, 0.625,0.875]);
	for(let i = 0; i<granularity; i++){
		x = radius * Math.sin(utils.degToRad(i*(360/granularity)));
		z = radius * Math.cos(utils.degToRad(i*(360/granularity)));
		vert3.push([x, y, z, 0.0, 1.0, 0.0, 0.625+0.125*Math.sin(utils.degToRad(i*(360/granularity))),0.875+0.125*Math.cos(utils.degToRad(i*(360/granularity)))]);
	}
	var ind3 = [];
	for(let i=0; i<granularity-1; i++){
		
		ind3.push(first_top);
		ind3.push(first_top+i+1);
		ind3.push(first_top+i+2);
	}
	/* LAST TRIANGLE */
	ind3.push(first_top);
	ind3.push(granularity);
	ind3.push(first_top+1);
	/*---------------*/
	//----------------------------------------------------------

	//-------------------BOTTOM CAP-----------------------------
	y = -2.0;
	vert3.push([0.0, y, 0.0, 0.0, -1.0, 0.0, 0.875,0.875]); //center
	for(let i = 0; i<granularity; i++){
		x = radius * Math.sin(utils.degToRad(i*(360/granularity)));
		z = radius * Math.cos(utils.degToRad(i*(360/granularity)));
		vert3.push([x, y, z, 0.0, -1.0, 0.0, 0.875+0.125*Math.sin(utils.degToRad(i*(360/granularity))),0.875+0.125*Math.cos(utils.degToRad(i*(360/granularity)))]);
	}
	let first_bottom = granularity+1;
	for(let i=0; i<granularity-1; i++){
		
		ind3.push(first_bottom);
		ind3.push(first_bottom+i+2);
		ind3.push(first_bottom+i+1);
	}
	/* LAST TRIANGLE */
	ind3.push(first_bottom);
	ind3.push(first_bottom+1);
	ind3.push(first_bottom+granularity);
	/*---------------*/
	//----------------------------------------------------------

	//-------------------SIDE FACE-----------------------------
	y = 2.0;
	vert3.push([0.0, y, 0.0, 0.0, -1.0, 0.0]); //center
	for(let i = 0; i<granularity; i++){
		x = radius * Math.sin(utils.degToRad(i*(360/granularity)));
		z = radius * Math.cos(utils.degToRad(i*(360/granularity)));
		vert3.push([x, y, z, x, 0.0, z, 0.5+(i/granularity)*0.5,0.75]);
		y=-y;
		vert3.push([x, y, z, x, 0.0, z, 0.5+(i/granularity)*0.5,0.5]);
		y=-y;
	}
	let first_side = 2*(granularity+1);
	for(let i=first_side+1; i<first_side + 1+  2 * ( granularity - 1); i+=2){
		ind3.push(i)
		ind3.push(i+1)
		ind3.push(i+2)

		ind3.push(i+2)
		ind3.push(i+1)
		ind3.push(i+3)


	}
	/* LAST RECTANGLE */
	ind3.push(first_side+1);
	ind3.push(first_side+ 2*granularity);
	ind3.push(first_side+2);
	ind3.push(first_side+1);
	ind3.push(first_side+ 2*granularity -1);
	ind3.push(first_side+2*granularity);
	/*---------------*/
	//----------------------------------------------------------
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
}