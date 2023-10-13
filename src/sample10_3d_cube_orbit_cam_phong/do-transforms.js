import { mouse, wheel } from "./callback-events.js";

function deg2rad(x){
  return (x * Math.PI) / 180; 
}

function initTransforms(gl, program){
	return null;   // pass
}

function updateTransforms(gl, program, degree){
  const 
    fov = Math.abs(wheel) % 180,//60,
    aspect = gl.canvas.clientWidth / gl.canvas.clientHeight,
    zNear = 0.1,
    zFar = 1000.0,
    projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, deg2rad(fov), aspect, zNear, zFar);

	const 
		radian = deg2rad(degree % 360),
		rotate_scale_y= 1.0,
    modelViewMatrix = mat4.create(),
		viewMatrix = mat4.create(),
		modelMatrix = mat4.create();
	
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

	const radius = 5.0;
	const 
		azimuth = mouse.x % 90, 
		elevation = mouse.y % 90;
	const 
		phi = deg2rad(90 - elevation),
		theta = deg2rad(azimuth);
	const
		camPosX = radius * Math.sin(phi) * Math.cos(theta),
		camPosY = radius * Math.cos(phi),
		camPosZ = radius * Math.sin(phi) * Math.sin(theta);
	// console.log("camPosX: " + camPosX + ", camPosZ: " + camPosZ);
	const camPos = [camPosX, camPosY, camPosZ],
				camAim = [0, 0, 0],//[0, 0, -1.0],
				camUp = [0, 1, 0];
	mat4.lookAt(viewMatrix, camPos, camAim, camUp);

	// mat4.multiply(out, a, b);
	// a: 左側の行列, b: 右側の行列
	mat4.multiply(modelViewMatrix, viewMatrix, modelMatrix);

  // Set the shader uniforms
  gl.uniformMatrix4fv(program.uProjectionMatrix, false, projectionMatrix);
	gl.uniformMatrix4fv(program.uModelViewMatrix, false, modelViewMatrix);
}

export { initTransforms, updateTransforms };