function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, and then 15 degrees around the y-axis.
	// R1 = transl * Z_ROT * Y_ROT * X_ROT * inv(Y_ROT) * inv(Z_ROT) * inv(transl) 
	let rad_angle_z = 45;
	let rad_angle_y = 15;
	let rad_angle_x = 60;
	let Z_rot = utils.MakeRotateZMatrix(rad_angle_z);
	let Y_rot = utils.MakeRotateYMatrix(rad_angle_y);
	let X_rot = utils.MakeRotateXMatrix(rad_angle_x);
	let transl = utils.MakeTranslateMatrix(0.0,1.0,-1.0)
	

	var R1 = utils.multiplyMatrices(transl,Y_rot);	
	R1 = utils.multiplyMatrices(R1,Z_rot);
	R1 = utils.multiplyMatrices(R1,X_rot);
	R1 = utils.multiplyMatrices(R1,utils.invertMatrix(Z_rot));	
	R1 = utils.multiplyMatrices(R1,utils.invertMatrix(Y_rot));
	R1 = utils.multiplyMatrices(R1,utils.invertMatrix(transl));		
	
	
	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 
	let scale = utils.MakeScaleNuMatrix(0.5,1.0,1.0);
	Z_rot = utils.MakeRotateZMatrix(45);

	var S1 = utils.multiplyMatrices(Z_rot,scale);
	S1 = utils.multiplyMatrices(S1, utils.invertMatrix(Z_rot));
	
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	transl = utils.MakeTranslateMatrix(1.0,1.0,1.0);
	X_rot = utils.MakeRotateXMatrix(15);
	let mirror = utils.MakeScaleNuMatrix(1.0,-1.0,1.0);

	var S2 =  utils.multiplyMatrices(transl,X_rot);
	S2 =  utils.multiplyMatrices(S2,mirror);
	S2 =  utils.multiplyMatrices(S2,utils.invertMatrix(X_rot));
	S2 =  utils.multiplyMatrices(S2,utils.invertMatrix(transl));


	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	Y_rot = utils.MakeRotateYMatrix(30);
	transl = utils.MakeTranslateMatrix(0.0,0.0,5.0);
	scale = utils.MakeScaleMatrix(3.0);
	var I1 =  utils.multiplyMatrices(utils.invertMatrix(Y_rot),utils.invertMatrix(transl));
	I1 =  utils.multiplyMatrices(I1,utils.invertMatrix(scale));
	return [R1, S1, S2, I1];
}

