function Anim1(t) {
	// moving car
	var out;
	let initialScaling = utils.MakeScaleMatrix(0.25);
	out = utils.multiplyMatrices(utils.MakeTranslateMatrix(t % 0.25,0.5,0),initialScaling) ;
	return out;
}

function Anim2(t) {
	// bumping code
	var out;
	let initialScaling = utils.MakeScaleMatrix(0.25);
	let initialTranslation = utils.MakeTranslateMatrix(0.75,0.5,0.0);
	let variableTraslation = utils.MakeTranslateMatrix(0.0,Math.abs(t-0.5),0.0);
	out = utils.multiplyMatrices(initialTranslation,initialScaling);
	out = utils.multiplyMatrices(out, variableTraslation);
	return out;
}

function Anim3(t) {
	// rotating fan
	var out = utils.multiplyMatrices(utils.MakeTranslateMatrix(0.5,0.75,0),utils.MakeScaleMatrix(0.25)) ;
	out =  utils.multiplyMatrices(out,utils.MakeTranslateMatrix(0.5,0.5,0)) ;
	out =  utils.multiplyMatrices(out,utils.MakeRotateZMatrix(t*360)) ;
	out =  utils.multiplyMatrices(out,utils.invertMatrix(utils.MakeTranslateMatrix(0.5,0.5,0))) ;
	return out;
}

function Anim4(t) {
	// burning flame
	let level_size = 0.25/3 ;
	let column_size = 0.25/3 ;
	let my_cell = Math.trunc(t*72) % 72;
	let row = Math.trunc(my_cell/12);
	let column = (my_cell- row * 12);
	
	var out ;
	out=utils.multiplyMatrices(utils.MakeTranslateMatrix(column * column_size,0.5 - (row + 1) * level_size,0),
									utils.MakeScaleNuMatrix(level_size,column_size,1.0)) ;
	return out;
}
