// import { calcMatModel } from "./do-transforms.js";
import { updateTransforms } from "./do-transforms.js";

function drawScene(gl, program, buffers, degree, info_obj_trans) {
  const width = gl.canvas.clientWidth;
  const height = gl.canvas.clientHeight;
  gl.canvas.width = width;
  gl.canvas.height = height;

  const clearColor = [0.7,0.7,0.7];
  gl.clearColor(...clearColor, 1); 
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);


  // Bind the VAO
  gl.bindVertexArray(buffers.vao);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.ibo);

  // Draw to the scene using triangle primitives
  // console.log( buffers.index_array_size );
  // gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);

  // console.log( "info_obj_trans.length: " + info_obj_trans.length);
  for (let i = 0; i < info_obj_trans.length; i++){
    // const infoTransform = {offset_x: 2, offset_z: 0};
    // const info_obj_trans = {offset_x: (i+1)*1.3%3, offset_z: 0, obj_scale: i};
    // const infoTransform = {offset_x: Math.random() * 3, offset_z: Math.random() * 3};
    // renderAgain(gl, program, buffers, degree, info_obj_trans);
    // const modelMatrix = calcMatModel(0,0,0);
    updateTransforms(gl, program, degree, info_obj_trans[i]);
    gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);
  }
  // renderMultipleObject(gl, program, buffers, degree);

  // Clean
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}

/*
function renderAgain(gl, program, buffers, degree, info_obj_trans){
  const 
    modelViewMatrix = mat4.create();
    
  const modelMatrix = calcMatModel(degree, info_obj_trans);
  // mat4.multiply(out, a, b);
	// a: 左側の行列, b: 右側の行列
  mat4.multiply(modelViewMatrix, modelMatrix, modelViewMatrix);
  gl.uniformMatrix4fv(program.uModelMatrix, false, modelMatrix);  
  gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);
}
*/

/*
function renderMultipleObject(gl, program, buffers, degree){
  const 
    modelViewMatrix = mat4.create(),
    modelMatrix = mat4.create();
  mat4.translate(
    modelMatrix, // destination matrix
    modelMatrix, // matrix to translate
    [2, 0.01*(degree%90), 0]//[0.0, 1.0, 0.0]// [0.0, 0.0, 0.0]
  ); // amount to translate

  // mat4.multiply(out, a, b);
	// a: 左側の行列, b: 右側の行列
  mat4.multiply(modelViewMatrix, modelMatrix, modelViewMatrix);
  gl.uniformMatrix4fv(program.uModelMatrix, false, modelMatrix);  
  gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);
}
*/

export { drawScene };