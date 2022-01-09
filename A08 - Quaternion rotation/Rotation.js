// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.

var q = Quaternion.fromEuler(0, 0, 0, 'ZXY');
function updateWorld(rvx, rvy, rvz) {
	rvx = utils.degToRad(rvx);
	rvy = utils.degToRad(rvy);
	rvz = utils.degToRad(rvz);
	var delta_q = Quaternion.fromEuler(rvz,rvx,rvy, 'ZXY');
	// compute the rotation matrix
	q = delta_q.mul(q);
	return q.toMatrix4();
}

