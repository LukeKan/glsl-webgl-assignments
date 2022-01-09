function cross(a,b){
	return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ]
}
function normalize(a){
	norm = Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2))
	a[0] = a[0] / norm;
	a[1] = a[1] / norm;
	a[2] = a[2] / norm;
	return a;
}

function buildGeometry() {
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0], [-1.0,-1.0,1.0, 0.0,-1.0,0.0],
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [
		[-1.0,-1.0,1.0, 0.0, 0.0,1.0], [1.0,-1.0,1.0, 0.0, 0.0, 1.0], [1.0,1.0,1.0, 0.0, 0.0, 1.0], [-1.0,1.0,1.0, 0.0, 0.0, 1.0], 
		//vertex for the front face
		[-1.0,-1.0,-1.0, 0.0, 0.0,-1.0], [1.0,-1.0,-1.0, 0.0, 0.0,-1.0], [1.0, 1.0, -1.0, 0.0, 0.0,-1.0], [-1.0,1.0,-1.0, 0.0, 0.0,-1.0], 
		// vertex for the rear face
		[-1.0, 1.0, 1.0, 0.0, 1.0, 0.0], [1.0, 1.0, 1.0, 0.0, 1.0, 0.0], [1.0, 1.0, -1.0, 0.0, 1.0, 0.0], [-1.0, 1.0, -1.0, 0.0, 1.0, 0.0], //vertex for the top face
		[-1.0, -1.0, 1.0, 0.0, -1.0, 0.0], [1.0, -1.0, 1.0, 0.0, -1.0, 0.0], [1.0, -1.0, -1.0, 0.0, -1.0, 0.0], [-1.0, -1.0, -1.0, 0.0, -1.0, 0.0], //vertex for the bottom face
		[-1.0, -1.0, -1.0, -1.0, 0.0, 0.0], [-1.0, -1.0, 1.0, -1.0, 0.0, 0.0], [-1.0, 1.0, 1.0, -1.0, 0.0, 0.0], [-1.0, 1.0, -1.0, -1.0, 0.0, 0.0], // vertex for the left face
		[1.0, -1.0, 1.0, 1.0, 0.0, 0.0], [1.0, -1.0, -1.0, 1.0, 0.0, 0.0], [1.0, 1.0, -1.0, 1.0, 0.0, 0.0], [1.0, 1.0, 1.0, 1.0, 0.0, 0.0] // vertex for the right face
	];
	var ind2 = [0, 1, 2,  0, 2, 3,  //davanti
				4, 6, 5,  4, 7, 6,  //dietro
				8, 9, 10,  8, 10, 11,  //sopra
				12, 14, 13,  12, 15, 14,  //sotto
				16, 17, 18,  16, 18, 19,  //dx
				20, 21, 22,  20, 22, 23];//sx
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	
	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 -- To do for the assignment.
	///// Creates vertices
	let granularity = 50;
	var vert3 = [];
	for(let i = 0; i <= granularity; i++) {
		for(j = 0; j <= granularity; j++) {
			x = i/granularity * 6 - 3;
			z = j/granularity * 6 - 3;
			y = Math.sin(x) * Math.cos(z)
			surface_dev_x = [1, Math.cos(x)*Math.cos(z), 0]
			surface_dev_z = [0, -Math.cos(x)*Math.sin(z), 1]

			normal = cross(surface_dev_z, surface_dev_x)
			normal = normalize(normal)
			vert3.push([x, y, z, normal[0],normal[1],normal[2]]);
		}
	}
	////// Creates indices
	var ind3 = [];
	for(let i = 0; i <= granularity-1; i++) {
		for(j = 0; j <= granularity-1; j++) {
			ind3.push(i*(granularity+1) + j)
			ind3.push(i*(granularity+1) + (j+1))
			ind3.push((i+1)*(granularity+1) + j)

			ind3.push(i*(granularity+1) + (j+1))
			ind3.push((i+1)*(granularity+1) + (j+1))
			ind3.push((i+1)*(granularity+1) + j)
		}
	}

	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
	
	// Draws a Cylinder --- To do for the assignment
	let radius = 1;
	var vert4 = [];
	granularity = 100;
	//-------------------TOP CAP------------------------------
	y = 2.0;
	let first_top = 0;
	vert4.push([0.0, y, 0.0, 0.0, 1.0, 0.0]);
	for(let i = 0; i<granularity; i++){
		x = radius * Math.sin(utils.degToRad(i*(360/granularity)));
		z = radius * Math.cos(utils.degToRad(i*(360/granularity)));
		vert4.push([x, y, z, 0.0, 1.0, 0.0]);
	}
	var ind4 = [];
	for(let i=0; i<granularity-1; i++){
		
		ind4.push(first_top);
		ind4.push(first_top+i+1);
		ind4.push(first_top+i+2);
	}
	/* LAST TRIANGLE */
	ind4.push(first_top);
	ind4.push(granularity);
	ind4.push(first_top+1);
	/*---------------*/
	//----------------------------------------------------------

	//-------------------BOTTOM CAP-----------------------------
	y = -2.0;
	vert4.push([0.0, y, 0.0, 0.0, -1.0, 0.0]); //center
	for(let i = 0; i<granularity; i++){
		x = radius * Math.sin(utils.degToRad(i*(360/granularity)));
		z = radius * Math.cos(utils.degToRad(i*(360/granularity)));
		vert4.push([x, y, z, 0.0, -1.0, 0.0]);
	}
	let first_bottom = granularity+1;
	for(let i=0; i<granularity-1; i++){
		
		ind4.push(first_bottom);
		ind4.push(first_bottom+i+2);
		ind4.push(first_bottom+i+1);
	}
	/* LAST TRIANGLE */
	ind4.push(first_bottom);
	ind4.push(first_bottom+1);
	ind4.push(first_bottom+granularity);
	/*---------------*/
	//----------------------------------------------------------

	//-------------------SIDE FACE-----------------------------
	y = 2.0;
	vert4.push([0.0, y, 0.0, 0.0, -1.0, 0.0]); //center
	for(let i = 0; i<granularity; i++){
		x = radius * Math.sin(utils.degToRad(i*(360/granularity)));
		z = radius * Math.cos(utils.degToRad(i*(360/granularity)));
		vert4.push([x, y, z, x, 0.0, z]);
		y=-y;
		vert4.push([x, y, z, x, 0.0, z]);
		y=-y;
	}
	let first_side = 2*(granularity+1);
	for(let i=first_side+1; i<first_side + 1+  2 * ( granularity - 1); i+=2){
		ind4.push(i)
		ind4.push(i+1)
		ind4.push(i+2)

		ind4.push(i+2)
		ind4.push(i+1)
		ind4.push(i+3)


	}
	/* LAST RECTANGLE */
	ind4.push(first_side+1);
	ind4.push(first_side+ 2*granularity);
	ind4.push(first_side+2);
	ind4.push(first_side+1);
	ind4.push(first_side+ 2*granularity -1);
	ind4.push(first_side+2*granularity);
	/*---------------*/
	//----------------------------------------------------------

	var color4 = [1.0, 1.0, 0.0];
	addMesh(vert4, ind4, color4);

	// Draws a Sphere --- To do for the assignment.
	var vert5 = [[0.0, 1.0, 0.0,0.0,1.0,0.0]];
	radius = 1;
	for(var j = 1; j < 18; j++) { //180 degree phi --> full sphere
		for(var i = 0; i < 36; i++) { //360 degree theta
			x = radius * Math.sin(utils.degToRad(i*10.0)) * Math.sin(utils.degToRad(j*10.0));
			y = radius * Math.cos(utils.degToRad(j*10.0));
			z = radius * Math.cos(utils.degToRad(i*10.0)) * Math.sin(utils.degToRad(j*10.0));
			vert5.push([x, y, z,x,y,z]);
		}
	}
	vert5.push([0.0,-1,0.0, 0.0,-1,0.0]); // bottom of the sphere
	var last = vert5.length-1;
	////// Creates indices
	var ind5 = [];
	// Outer half-sphere
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 17; j++) {
			ind5.push(i + (j - 1) * 36 + 1);
			ind5.push(i + j * 36 + 1);
			ind5.push((i + 1) % 36 + (j - 1) * 36 + 1);

			ind5.push((i + 1) % 36 + (j - 1) * 36 + 1);
			ind5.push(i + j * 36 + 1);
			ind5.push((i + 1) % 36 + j * 36 + 1);
		}
	}	
	// TOP VERTEX
	for(i = 0; i < 36; i++) {
		ind5.push(0);
		ind5.push(i + 1);
		ind5.push((i + 1) % 36 + 1);
	}
	// BASELINE: last vertex row
	for(i = 0; i < 36; i++) {
		ind5.push(last); 
		ind5.push((i + 1) % 36 + 506); 
		ind5.push(i + 506); 
	}
	var color5 = [1.0, 0.0, 0.0];
	addMesh(vert5, ind5, color5);
}

