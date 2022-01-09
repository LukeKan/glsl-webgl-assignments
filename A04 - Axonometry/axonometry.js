function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	let rad_angle_y = 45;
	let rad_angle_x = 35.26;
	let w = 50;
	let a = 16/9;
	let n = 1;
	let f = 101;

	let Y_rot = utils.MakeRotateYMatrix(rad_angle_y);
	let X_rot = utils.MakeRotateXMatrix(rad_angle_x);

	let axonometry_matrix = [	1/w,		0.0,		0.0,			0.0,
								0.0,		a/w,		0.0,			0.0,
								0.0,		0.0,		-2/(f-n),		-(f+n)/(f-n),
								0.0,		0.0,		0.0,			1.0];

	var A1 = utils.multiplyMatrices(axonometry_matrix,X_rot);
	A1 = utils.multiplyMatrices(A1,Y_rot);
	
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	rad_angle_y = 45;
	rad_angle_x = 20;
	w = 50;
	a = 16/9;
	n = 1;
	f = 101;

	Y_rot = utils.MakeRotateYMatrix(rad_angle_y);
	X_rot = utils.MakeRotateXMatrix(rad_angle_x);

	axonometry_matrix = [	1/w,		0.0,		0.0,			0.0,
							0.0,		a/w,		0.0,			0.0,
							0.0,		0.0,		-2/(f-n),		-(f+n)/(f-n),
							0.0,		0.0,		0.0,			1.0];

	var A2 = utils.multiplyMatrices(axonometry_matrix,X_rot);
	A2 = utils.multiplyMatrices(A2,Y_rot);
			   
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	rad_angle_y = 30;
	rad_angle_x = -30;
	w = 50;
	a = 16/9;
	n = 1;
	f = 101;

	Y_rot = utils.MakeRotateYMatrix(rad_angle_y);
	X_rot = utils.MakeRotateXMatrix(rad_angle_x);

	axonometry_matrix = [	1/w,		0.0,		0.0,			0.0,
							0.0,		a/w,		0.0,			0.0,
							0.0,		0.0,		-2/(f-n),		-(f+n)/(f-n),
							0.0,		0.0,		0.0,			1.0];

	var A3 = utils.multiplyMatrices(axonometry_matrix,X_rot);
	A3 = utils.multiplyMatrices(A3,Y_rot);
			   
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	let rad_angle = utils.degToRad(45);
	w = 50;
	a = 16/9;
	n = 1;
	f = 101;

	let shear_matrix = [	1.0,		0.0,		-Math.cos(rad_angle),			0.0,
							0.0,		1.0,		-Math.sin(rad_angle),			0.0,
							0.0,		0.0,		1.0,							0.0,
							0.0,		0.0,		0.0,							1.0];

	axonometry_matrix = [	1/w,		0.0,		0.0,			0.0,
							0.0,		a/w,		0.0,			0.0,
							0.0,		0.0,		-2/(f-n),		-(f+n)/(f-n),
							0.0,		0.0,		0.0,			1.0];
	var O1 =  utils.multiplyMatrices(axonometry_matrix,shear_matrix);

	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	rad_angle = utils.degToRad(60);
	w = 50;
	a = 16/9;
	n = 1;
	f = 101;

	shear_matrix = [	1.0,		0.0,		-0.5 * Math.cos(rad_angle),			0.0,
						0.0,		1.0,		-0.5 * Math.sin(rad_angle),			0.0,
						0.0,		0.0,		1.0,								0.0,
						0.0,		0.0,		0.0,								1.0];

	axonometry_matrix = [	1/w,		0.0,		0.0,			0.0,
							0.0,		a/w,		0.0,			0.0,
							0.0,		0.0,		-2/(f-n),		-(f+n)/(f-n),
							0.0,		0.0,		0.0,			1.0];
	var O2 =  utils.multiplyMatrices(axonometry_matrix,shear_matrix);

	return [A1, A2, A3, O1, O2];
}