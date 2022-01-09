function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color
//vec4 ambColor;		// material ambient color
//vec4 specularColor;		// specular color
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface n_x
//vec3 eyedirVec;		// looking direction omega_r
//
//
// Lighr directions can be found into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution can be found intop
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material. No specular or emission.
var S1 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular. No ambient and emission.
var S2 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;

	vec3 halfVector_A = normalize(eyedirVec + lightDirA);
	vec3 halfVector_B = normalize(eyedirVec + lightDirB);
	vec3 halfVector_C = normalize(eyedirVec + lightDirC);

	vec4 halfVector_Acontr = pow(clamp(dot(normalVec,halfVector_A), 0.0, 1.0),SpecShine) * lightColorA;
	vec4 halfVector_Bcontr = pow(clamp(dot(normalVec,halfVector_B), 0.0, 1.0),SpecShine) * lightColorB;
	vec4 halfVector_Ccontr = pow(clamp(dot(normalVec,halfVector_C), 0.0, 1.0),SpecShine) * lightColorC;

	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + specularColor * (halfVector_Acontr + halfVector_Bcontr + halfVector_Ccontr), 0.0, 1.0);
`;

// Ambient and Phong specular. No emssion and no diffuse.
var S3 = `
	vec3 refl_A = -reflect(lightDirA,normalVec);
	vec3 refl_B = -reflect(lightDirB,normalVec);
	vec3 refl_C = -reflect(lightDirC,normalVec);

	vec4 refl_Acontr = pow(clamp(dot(refl_A,eyedirVec), 0.0, 1.0), SpecShine) * lightColorA;
	vec4 refl_Bcontr = pow(clamp(dot(refl_B,eyedirVec), 0.0, 1.0), SpecShine) * lightColorB;
	vec4 refl_Ccontr = pow(clamp(dot(refl_C,eyedirVec), 0.0, 1.0), SpecShine) * lightColorC;

	out_color = clamp( (refl_Acontr + refl_Bcontr + refl_Ccontr) * specularColor + ambientLight * ambColor, 0.0, 1.0);
`;

// Diffuse, ambient, emission and Phong specular.
var S4 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;

	vec3 refl_A = -reflect(lightDirA,normalVec);
	vec3 refl_B = -reflect(lightDirB,normalVec);
	vec3 refl_C = -reflect(lightDirC,normalVec);

	vec4 refl_Acontr = pow(clamp(dot(refl_A,eyedirVec), 0.0, 1.0), SpecShine) * lightColorA;
	vec4 refl_Bcontr = pow(clamp(dot(refl_B,eyedirVec), 0.0, 1.0), SpecShine) * lightColorB;
	vec4 refl_Ccontr = pow(clamp(dot(refl_C,eyedirVec), 0.0, 1.0), SpecShine) * lightColorC;

	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor + emit + (refl_Acontr + refl_Bcontr + refl_Ccontr) * specularColor, 0.0, 1.0);
`;

// Ambient, Toon diffuse and and Toon (Blinn based) specular. No emission.
var S5 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;

	vec3 halfVector_A = normalize(eyedirVec + lightDirA);
	vec3 halfVector_B = normalize(eyedirVec + lightDirB);
	vec3 halfVector_C = normalize(eyedirVec + lightDirC);

	vec4 halfVector_Acontr = pow(clamp(dot(normalVec,halfVector_A), 0.0, 1.0),1.0) * lightColorA;
	vec4 halfVector_Bcontr = pow(clamp(dot(normalVec,halfVector_B), 0.0, 1.0),1.0) * lightColorB;
	vec4 halfVector_Ccontr = pow(clamp(dot(normalVec,halfVector_C), 0.0, 1.0),1.0) * lightColorC;

	vec4 diffToon_A;
	if(dot(lightDirA,normalVec) >= DToonTh){
		diffToon_A = diffColor;
	}
	else{
		diffToon_A = vec4(0.0,0.0,0.0,1.0);
	}

	vec4 diffToon_B;
	if(dot(lightDirB,normalVec) >= DToonTh){
		diffToon_B = diffColor;
	}
	else{
		diffToon_B = vec4(0.0,0.0,0.0,1.0);
	}

	vec4 diffToon_C;
	if(dot(lightDirC,normalVec) >= DToonTh){
		diffToon_C = diffColor;
	}
	else{
		diffToon_C = vec4(0.0,0.0,0.0,1.0);
	}

	vec4 specToon_A;
	if(dot(halfVector_A,normalVec) >= SToonTh){
		specToon_A = specularColor;
	}
	else{
		specToon_A = vec4(0.0,0.0,0.0,1.0);
	}
	
	vec4 specToon_B;
	if(dot(halfVector_B,normalVec) >= SToonTh){
		specToon_B = specularColor;
	}
	else{
		specToon_B = vec4(0.0,0.0,0.0,1.0);
	}
	
	vec4 specToon_C;
	if(dot(halfVector_C,normalVec) >= SToonTh){
		specToon_C = specularColor;
	}
	else{
		specToon_C = vec4(0.0,0.0,0.0,1.0);
	}

	out_color = clamp(ambientLight * ambColor + LAcontr *diffToon_A + LBcontr * diffToon_B + LCcontr * diffToon_C + halfVector_Acontr * specToon_A + halfVector_Bcontr * specToon_B + halfVector_Ccontr * specToon_C , 0.0, 1.0);
`;

	return [S1, S2, S3, S4, S5];
}

