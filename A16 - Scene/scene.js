function drawSceneTree(S) {
	var mat = utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
		utils.MakeTranslateMatrix(S[0][0], S[0][1], S[0][2]),
		utils.MakeRotateZMatrix(S[0][5])),
		utils.MakeRotateXMatrix(S[0][3])),
		utils.MakeRotateYMatrix(S[0][4]))
	draw(0, mat);
	updateChildrenMatrices(S,0,mat);
}

function updateChildrenMatrices(S, index, index_matrix){
	for (let j=S[index][6]; j < S[index][7]+1; j++){
		if(j==-1) return;
		var nmat =  utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
			index_matrix,
			utils.MakeTranslateMatrix(S[j][0], S[j][1], S[j][2])),
			utils.MakeRotateZMatrix(S[j][5])),
			utils.MakeRotateXMatrix(S[j][3])),
			utils.MakeRotateYMatrix(S[j][4]))
		draw(j, nmat);
		updateChildrenMatrices(S,j,nmat);
	}
}