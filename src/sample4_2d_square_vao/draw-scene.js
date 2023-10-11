function drawScene(gl, program, buffers) {
  const clearColor = [0.7,0.7,0.7];
  gl.clearColor(...clearColor, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
  // Bind the VAO
  gl.bindVertexArray(buffers.vao);
  // Bind IBO
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.ibo);

  // Draw to the scene using triangle primitives
  gl.drawElements(gl.TRIANGLES, buffers.index_array_size, gl.UNSIGNED_SHORT, 0);

  // UnBind VAO, VBO and IBO
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
}

export { drawScene };