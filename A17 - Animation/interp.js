// Returns the transform matrix obtained interpolating the given positions and angles
function InterpMat(
				tx1, ty1, tz1, rx1, ry1, rz1,
			    tx2, ty2, tz2, rx2, ry2, rz2,
			    a) {
	// tx1, ty1, tz1	-> Initial position
	// rx1, ry1, rz1	-> Initial rotation (in Euler angles)
	// tx2, ty2, tz2	-> Final position
	// rx2, ry2, rz2	-> Final rotation (in Euler angles)
	// a (in 0..1 range)	-> Interpolation coefficient
	//
	// return the interpolated transform matrix with the given position and rotation
	
	let int_x = (1 - a) * tx1 + a * tx2;
	let int_y = (1 - a) * ty1 + a * ty2;
	let int_z = (1 - a) * tz1 + a * tz2;
	let transl_matrix = utils.MakeTranslateMatrix(int_x, int_y, int_z);

	rx1 = utils.degToRad(rx1);
	ry1 = utils.degToRad(ry1);
	rz1 = utils.degToRad(rz1);
	rx2 = utils.degToRad(rx2);
	ry2 = utils.degToRad(ry2);
	rz2 = utils.degToRad(rz2);

	var init_q = Quaternion.fromEuler(rz1,rx1,ry1, 'ZXY');
	var final_q = Quaternion.fromEuler(rz2,rx2,ry2, 'ZXY');
	// compute the rotation matrix
	final_q = init_q.slerp(final_q)(a);
	rot_matrix = final_q.toMatrix4();



	out = utils.multiplyMatrices(transl_matrix, rot_matrix);
	return out;			   
}