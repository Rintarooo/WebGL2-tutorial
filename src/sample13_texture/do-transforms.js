import { mouse, wheel } from "./callback-events.js";

function deg2rad(x){
  return (x * Math.PI) / 180; 
}

function initTransforms(gl, program, degree){
	return null;   // pass
}

function updateTransforms(gl, program, degree, info_obj_trans){
  const 
    fov = Math.abs(wheel) % 180,//60,
    aspect = gl.canvas.clientWidth / gl.canvas.clientHeight,
    zNear = 0.1,
    zFar = 1000.0,
    projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, deg2rad(fov), aspect, zNear, zFar);

	const 
    modelViewMatrix = mat4.create(),
		normalMatrix = mat4.create();
	
	// obj_scale = Math.random(),
	const modelMatrix = calcMatModel(degree, info_obj_trans);
	const viewMatrix = calcMatView();

	// mat4.multiply(out, a, b);
	// a: 左側の行列, b: 右側の行列
	mat4.multiply(modelViewMatrix, viewMatrix, modelMatrix);

	mat4.copy(normalMatrix, modelViewMatrix);
	mat4.invert(normalMatrix, normalMatrix);
	mat4.transpose(normalMatrix, normalMatrix);

  // Set the shader uniforms
  gl.uniformMatrix4fv(program.uProjectionMatrix, false, projectionMatrix);
	gl.uniformMatrix4fv(program.uViewMatrix, false, viewMatrix);
	gl.uniformMatrix4fv(program.uModelMatrix, false, modelMatrix);
	gl.uniformMatrix4fv(program.uNormalMatrix, false, normalMatrix);
}

function calcMatModel(degree, info_obj_trans){
	const 
		radian = deg2rad(degree % 360),
		rotate_scale_y= 1.0,
		modelMatrix = mat4.create();

	// console.log(info_obj_trans);
	// console.log(radian);
	console.log(degree);
	
	mat4.scale(modelMatrix, modelMatrix, 
		// [2,2,2]);
		[info_obj_trans.obj_scale, info_obj_trans.obj_scale, info_obj_trans.obj_scale]);
	
		mat4.translate(
		modelMatrix, // destination matrix
		modelMatrix, // matrix to translate
		// [info_obj_trans.offset_x, radian, info_obj_trans.offset_z]// [0.0, radian, 0.0]// [0.0, 0.0, 0.0]
		[info_obj_trans.offset_x, degree * info_obj_trans.drop_speed, info_obj_trans.offset_z]// [0.0, radian, 0.0]// [0.0, 0.0, 0.0]
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
	return modelMatrix;
}

function calcMatView(){
	const 
		viewMatrix = mat4.create(),
		radius = 5.0;
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
	return viewMatrix;
}

export { initTransforms, updateTransforms, calcMatModel };