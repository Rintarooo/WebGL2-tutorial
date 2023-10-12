function draw(gl, program, buffers) {
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
  // console.log( buffers.index_array_size);
  gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);

  // Clean
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}

export { draw };