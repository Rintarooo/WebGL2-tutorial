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
		radius = 3.0,
    modelViewMatrix = mat4.create(),
		viewMatrix = mat4.create();
	
	// cos, sin関数に入力
	const 
		camPosX = radius * Math.cos(radian),
		camPosZ = radius * Math.sin(radian);
	
	// console.log("Cosine of " + degree + " degrees: " + camPosX + ", Sine of " + degree + " degrees: " + camPosY);
	const 
		camPos = [camPosX, 1.1, camPosZ],
		camAim = [0, 0, 0],
		camUp = [0, 1, 0];
	mat4.lookAt(viewMatrix, camPos, camAim, camUp);

	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);


	// Set the shader uniforms
	gl.uniformMatrix4fv(program.uModelViewMatrix, false, modelViewMatrix);
}

export { initTransforms, updateTransforms };