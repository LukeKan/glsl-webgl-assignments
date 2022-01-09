function perspective() {
	// Make perspective projection, FoV-y = 70 deg, a = 16/9, n = 1, f = 101.
	let theta = utils.degToRad(35);
	let a = 16/9;
	let n = 1;
	let f = 101;
	var A1 =  [1 / (a * Math.tan(theta)),	0.0,					0.0,				0.0,
				0.0,						1/ Math.tan(theta),		0.0,				0.0,
				0.0,						0.0,					(f+n)/(n-f),		(2*f*n) / (n-f),
				0.0,						0.0,					-1.0,				0.0];
			   
	// Make perspective projection, FoV-y = 105 deg, a = 16/9, n = 1, f = 101
	theta = utils.degToRad(105/2);
	a = 16/9;
	n = 1;
	f = 101;
	var A2 =  [1/ (a * Math.tan(theta)),	0.0,					0.0,				0.0,
				0.0,						1/ Math.tan(theta),		0.0,				0.0,
				0.0,						0.0,					(f+n)/(n-f),		(2*f*n) / (n-f),
				0.0,						0.0,					-1.0,				0.0];
			   
	// Make perspective projection, FoV-y = 40 deg, a = 16/9, n = 1, f = 101
	theta = utils.degToRad(20);
	a = 16/9;
	n = 1;
	f = 101;
	var A3 =  [1/ (a * Math.tan(theta)),	0.0,					0.0,				0.0,
				0.0,						1/ Math.tan(theta),		0.0,				0.0,
				0.0,						0.0,					(f+n)/(n-f),		(2*f*n) / (n-f),
				0.0,						0.0,					-1.0,				0.0];
			   
	// Make perspective projection, FoV-y = 90 deg, a = 4/3, n = 1, f = 101. Note: since the aspect ratio is not correct, the image should appear to be deformed
	theta = utils.degToRad(45);
	a = 4/3;
	n = 1;
	f = 101;
	var O1 =  [1/ (a * Math.tan(theta)),	0.0,					0.0,				0.0,
				0.0,						1/ Math.tan(theta),		0.0,				0.0,
				0.0,						0.0,					(f+n)/(n-f),		(2*f*n) / (n-f),
				0.0,						0.0,					-1.0,				0.0];

	// Make perspective projection, l = -1.2, r = 0, t = 0.3375, b = -0.3375, n = 1, f = 101. Note: due to the asimmetry of this projection, only the left part of the scene should be visible
	let l = -1.2;
	let r = 0;
	let t = 0.3375;
	let b = -0.3375;
	n = 1;
	f = 101;

	var O2 =  [(2*n)/(r-l),		0.0,				(r+l)/(r-l),		0.0,
			   0.0,				(2*n)/(t-b),		(t+b)/(t-b),		0.0,
			   0.0,				0.0,				(f+n)/(n-f),		(2*f*n)/(n-f),
			   0.0,				0.0,				-1.0,				0.0];

	return [A1, A2, A3, O1, O2];
}