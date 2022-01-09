function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	let yaw = 90;
	let pitch = 0;
	let roll = 0;
	let resize = 1;
	let translation = utils.MakeTranslateMatrix(0.0, 0.0, -3.0);
	let X_rot = utils.MakeRotateXMatrix(pitch);
	let Y_rot = utils.MakeRotateYMatrix(yaw);
	let Z_rot = utils.MakeRotateZMatrix(roll);
	let Resize_Matrix = utils.MakeScaleMatrix(resize);
	var A1 =  utils.multiplyMatrices(translation, Y_rot);
	A1 = utils.multiplyMatrices(A1,  X_rot);
	A1 = utils.multiplyMatrices(A1,  Z_rot);
	A1 = utils.multiplyMatrices(A1,  Resize_Matrix);
			   
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	yaw = 0;
	pitch = 60;
	roll = 0;
	translation = utils.MakeTranslateMatrix(0.0, 2.0, 0.0);
	X_rot = utils.MakeRotateXMatrix(pitch);
	Y_rot = utils.MakeRotateYMatrix(yaw);
	Z_rot = utils.MakeRotateZMatrix(roll);
	resize = 1/10;
	Resize_Matrix = utils.MakeScaleMatrix(resize);
	var A2 =  utils.multiplyMatrices(translation, Y_rot);
	A2 = utils.multiplyMatrices(A2,  X_rot);
	A2 = utils.multiplyMatrices(A2,  Z_rot);
	A2 = utils.multiplyMatrices(A2,  Resize_Matrix);

	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45
	yaw = 30;
	pitch = 0;
	roll = 45;
	translation = utils.MakeTranslateMatrix(0.0, 0.0, 0.0);
	X_rot = utils.MakeRotateXMatrix(pitch);
	Y_rot = utils.MakeRotateYMatrix(yaw);
	Z_rot = utils.MakeRotateZMatrix(roll);
	resize = 1;
	Resize_Matrix = utils.MakeScaleMatrix(resize);
	var A3 =  utils.multiplyMatrices(translation, Y_rot);
	A3 = utils.multiplyMatrices(A3,  X_rot);
	A3 = utils.multiplyMatrices(A3,  Z_rot);
	A3 = utils.multiplyMatrices(A3,  Resize_Matrix);
			   
	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider
	yaw = 180;
	pitch = 0;
	roll = 0;
	translation = utils.MakeTranslateMatrix(2.0, 0.0, 2.0);
	X_rot = utils.MakeRotateXMatrix(pitch);
	Y_rot = utils.MakeRotateYMatrix(yaw);
	Z_rot = utils.MakeRotateZMatrix(roll);
	Resize_Matrix = utils.MakeScaleNuMatrix(2.0,1.0,1.0);
	var A4 =  utils.multiplyMatrices(translation, Y_rot);
	A4 = utils.multiplyMatrices(A4,  X_rot);
	A4 = utils.multiplyMatrices(A4,  Z_rot);
	A4 = utils.multiplyMatrices(A4,  Resize_Matrix);

	// Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)
	yaw = -30;
	pitch = 45;
	roll = -15;
	translation = utils.MakeTranslateMatrix(1.0, -1.0, 2.5);
	X_rot = utils.MakeRotateXMatrix(pitch);
	Y_rot = utils.MakeRotateYMatrix(yaw);
	Z_rot = utils.MakeRotateZMatrix(roll);
	Resize_Matrix = utils.MakeScaleNuMatrix(0.8, 0.75, 1.2);
	var A5 =  utils.multiplyMatrices(translation, Y_rot);
	A5 = utils.multiplyMatrices(A5,  X_rot);
	A5 = utils.multiplyMatrices(A5,  Z_rot);
	A5 = utils.multiplyMatrices(A5,  Resize_Matrix);

	return [A1, A2, A3, A4, A5];
}