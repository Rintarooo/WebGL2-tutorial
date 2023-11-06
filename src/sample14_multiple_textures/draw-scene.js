import { updateTransforms } from "./do-transforms.js";

function drawScene(gl, program, buffers, degree, info_obj_trans, tex) {
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

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);// Flip texture image

  // Bind the VAO
  gl.bindVertexArray(buffers.vao);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.ibo);
  
  // gl.TEXTURE0 + slot picks which of the texture read ports in the fragment shader to use
  gl.activeTexture(gl.TEXTURE0);
  // gl.TEXTURE_2D is the input slot we use to provide the GPU with information about the texture
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.uniform1i(program.uSampler, 0);
  
  for (let i = 0; i < info_obj_trans.length; i++){
    updateTransforms(gl, program, degree, info_obj_trans[i]);
    gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);
 }

  // Clean
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  gl.bindTexture(gl.TEXTURE_2D, null);
}

export { drawScene };