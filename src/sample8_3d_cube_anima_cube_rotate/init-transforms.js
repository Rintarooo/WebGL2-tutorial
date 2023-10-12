function deg2rad(x){
  return (x * Math.PI) / 180; 
}

function initTransforms(gl, program){
  const 
    fov = 60,
    aspect = gl.canvas.clientWidth / gl.canvas.clientHeight,
    zNear = 0.1,
    zFar = 1000.0,
    projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, deg2rad(fov), aspect, zNear, zFar);
  
  // Set the shader uniforms
  gl.uniformMatrix4fv(program.uProjectionMatrix, false, projectionMatrix);
}

function updateTransforms(gl, program, degree){
	const 
		radian = deg2rad(degree % 360),
		rotate_scale_y= 1.0,
    modelViewMatrix = mat4.create(),
		viewMatrix = mat4.create(),
		modelMatrix = mat4.create();
	
	// // cos, sin関数に入力
	// const 
	// 	camPosX = radius * Math.cos(radian),
	// 	camPosZ = radius * Math.sin(radian);
	
	mat4.translate(
		modelMatrix, // destination matrix
		modelMatrix, // matrix to translate
		[0.0, 0.0, 0.0]
	); // amount to translate

	mat4.rotate(
		modelMatrix, // destination matrix
		modelMatrix, // matrix to translate
		0.0, // amount to rotate in radians
		[1, 0, 0] // axis to rotate around (X)
	); 
	mat4.rotate(
		modelMatrix,
		modelMatrix,
		radian * rotate_scale_y,
		[0, 1, 0]// axis to rotate around (Y)
	);
	mat4.rotate(
		modelMatrix,
		modelMatrix,
		0.0, 
		[0, 0, 1]// axis to rotate around (Z)
	);

	// console.log("mo " + degree + " degrees: " + camPosX + ", Sine of " + degree + " degrees: " + camPosY);
	const 
		camPos = [1.4, 1.1, 3.1],
		camAim = [0, 0, 0],
		camUp = [0, 1, 0];
	mat4.lookAt(viewMatrix, camPos, camAim, camUp);

	// mat4.multiply(out, a, b);
	// a: 左側の行列, b: 右側の行列
	mat4.multiply(modelViewMatrix, viewMatrix, modelMatrix);

	// Set the shader uniforms
	gl.uniformMatrix4fv(program.uModelViewMatrix, false, modelViewMatrix);
}

export { initTransforms, updateTransforms };