function buildGeometry() {
	

	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
	///// Creates vertices
	let granularity = 200;
	var vert2 = [];
	for(let i = 0; i <= granularity; i++) {
		for(j = 0; j <= granularity; j++) {
			x = i/granularity * 6 - 3;
			z = j/granularity * 6 - 3;
			y = Math.sin(x) * Math.cos(z)
			vert2.push([x,y,z]);
		}
	}
	console.log(vert2)
	////// Creates indices
	var ind2 = [];
	for(let i = 0; i <= granularity-1; i++) {
		for(j = 0; j <= granularity-1; j++) {
			ind2.push(i*(granularity+1) + j)
			ind2.push(i*(granularity+1) + (j+1))
			ind2.push((i+1)*(granularity+1) + j)

			ind2.push(i*(granularity+1) + (j+1))
			ind2.push((i+1)*(granularity+1) + (j+1))
			ind2.push((i+1)*(granularity+1) + j)
		}
	}

	var color2 = [0.0, 0.0, 1.0];
	addMesh(vert2, ind2, color2);


	// Draws a Half Sphere
	///// Creates vertices
	var vert3 = [[0.0, 1.0, 0.0]];
	let radius = 1;
	for(let j = 1; j < 9; j++) { //90 degree phi --> half sphere
		for(let i = 0; i < 36; i++) { //360 degree theta
			x = radius * Math.sin(utils.degToRad(i*10.0)) * Math.sin(utils.degToRad(j*10.0));
			y = radius * Math.cos(utils.degToRad(j*10.0));
			z = radius * Math.cos(utils.degToRad(i*10.0)) * Math.sin(utils.degToRad(j*10.0));
			vert3.push([x, y, z]);
		}
	}
	vert3.push([0.0,0.17,0.0]); // center of the half-sphere
	let last = vert3.length-1;
	////// Creates indices
	var ind3 = [];
	// Outer half-sphere
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 8; j++) {
			ind3.push(i + (j - 1) * 36 + 1);
			ind3.push(i + j * 36 + 1);
			ind3.push((i + 1) % 36 + (j - 1) * 36 + 1);

			ind3.push((i + 1) % 36 + (j - 1) * 36 + 1);
			ind3.push(i + j * 36 + 1);
			ind3.push((i + 1) % 36 + j * 36 + 1);
		}
	}	
	// TOP VERTEX
	for(i = 0; i < 36; i++) {
		ind3.push(0);
		ind3.push(i + 1);
		ind3.push((i + 1) % 36 + 1);
	}
	// BASELINE: last vertex row
	for(i = 0; i < 36; i++) {
		ind3.push(last); // center of the bottom circle
		ind3.push((i + 1) % 36 + 253); 
		ind3.push(i + 253); 
	}
	
	var color3 = [1.0, 0.0, 1.0];
	addMesh(vert3, ind3, color3);
}

