import { deg2rad } from "./init-transforms.js";

function updateTransforms(gl, program, degree){
	const 
		fov = 60,
		aspect = gl.canvas.clientWidth / gl.canvas.clientHeight,
		zNear = 0.1,
		zFar = 1000.0,
		projectionMatrix = mat4.create(),
		modelViewMatrix = mat4.create();
	mat4.perspective(projectionMatrix, deg2rad(fov), aspect, zNear, zFar);
	
	const 
		radian = deg2rad(degree % 360),
		radius = 3.0;
	
	// cos, sin関数に入力
	const 
		camPosX = radius * Math.cos(radian),
		camPosZ = radius * Math.sin(radian);
	
	// console.log("Cosine of " + degree + " degrees: " + camPosX + ", Sine of " + degree + " degrees: " + camPosY);
	const 
		camPos = [camPosX, 1.1, camPosZ],
		camAim = [0, 0, 0],
		camUp = [0, 1, 0];
	mat4.lookAt(modelViewMatrix, camPos, camAim, camUp);

	// Set the shader uniforms
	gl.uniformMatrix4fv(program.uProjectionMatrix, false, projectionMatrix);
	gl.uniformMatrix4fv(program.uModelViewMatrix, false, modelViewMatrix);
}

export { updateTransforms };