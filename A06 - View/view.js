function compute_module(v){
	return Math.abs(
			Math.sqrt(
				(v[0]) * (v[0]) +
				(v[1]) * (v[1]) +
				(v[2]) * (v[2])));
}

function cross_product( a, b ){
	return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
}

function view() {
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	let beta = -30;
	let alpha = 90;

	let Y_rot = utils.MakeRotateYMatrix(alpha);
	let X_rot = utils.MakeRotateXMatrix(beta);
	let transl = utils.MakeTranslateMatrix(5.0,2.5,0.0);

	var A1 =  utils.multiplyMatrices(transl,Y_rot);
	A1 =  utils.multiplyMatrices(A1,X_rot);
	A1 = utils.invertMatrix(A1);
			   
	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	beta = 15;
	alpha = 170;
	ro = 45;

	Y_rot = utils.MakeRotateYMatrix(alpha);
	X_rot = utils.MakeRotateXMatrix(beta);
	Z_rot = utils.MakeRotateZMatrix(ro);
	transl = utils.MakeTranslateMatrix(0.0,-1.0,-5.0);

	var A2 =  utils.multiplyMatrices(transl,Y_rot);
	A2 =  utils.multiplyMatrices(A2,X_rot);
	A2 =  utils.multiplyMatrices(A2,Z_rot);
	A2 = utils.invertMatrix(A2);
	
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
	c = [ -4.0 , 2.0, -4.0 ];
	a = [ 0.0, 0.5, 0.5 ];
	u = [ 0.0, 1.0, 0.0 ];

	let Vz = [(c[0]-a[0]), (c[1]-a[1]), (c[2]-a[2])];
	let Vz_mod = compute_module(Vz);
	Vz = [Vz[0]/Vz_mod, Vz[1]/Vz_mod, Vz[2]/Vz_mod];

	let Vx = cross_product(u, Vz);
	let Vx_mod = compute_module(Vx);
	Vx = [Vx[0]/Vx_mod, Vx[1]/Vx_mod, Vx[2]/Vx_mod];
	Vy = cross_product(Vz,Vx);
	var A3 = [	Vx[0], Vy[0], Vz[0], c[0],
				Vx[1], Vy[1], Vz[1], c[1],
				Vx[2], Vy[2], Vz[2], c[2],
				0,		0,		0,		1			
	];
	A3 = utils.invertMatrix(A3);
			   
	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
	c = [ 2.57, 0.0, 0.0 ];
	a = [ 2.8, 0.0, -1.0 ];
	u = [ 1.0, 0.0, 0.0 ];

	Vz = [(c[0]-a[0]), (c[1]-a[1]), (c[2]-a[2])];
	Vz_mod = compute_module(Vz);
	Vz = [Vz[0]/Vz_mod, Vz[1]/Vz_mod, Vz[2]/Vz_mod];

	Vx = cross_product(u, Vz);
	Vx_mod = compute_module(Vx);
	Vx = [Vx[0]/Vx_mod, Vx[1]/Vx_mod, Vx[2]/Vx_mod];
	Vy = cross_product(Vz,Vx);
	
	var A4 = [	Vx[0], Vy[0], Vz[0], c[0],
				Vx[1], Vy[1], Vz[1], c[1],
				Vx[2], Vy[2], Vz[2], c[2],
				0,		0,		0,		1			
	];
	A4 = utils.invertMatrix(A4);


	return [A1, A2, A3, A4];
}